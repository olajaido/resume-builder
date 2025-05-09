const Resume = require('../models/Resume');

// Get all resumes for a user
exports.getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ user: req.user.id })
      .sort({ updatedAt: -1 })
      .select('title template updatedAt');

    res.status(200).json({
      success: true,
      count: resumes.length,
      data: resumes,
    });
  } catch (error) {
    console.error('Get resumes error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get resumes',
      error: error.message,
    });
  }
};

// Get a single resume
exports.getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found',
      });
    }

    res.status(200).json({
      success: true,
      data: resume,
    });
  } catch (error) {
    console.error('Get resume error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get resume',
      error: error.message,
    });
  }
};

// Create a new resume
exports.createResume = async (req, res) => {
  try {
    const { title, template, personalInfo } = req.body;

    // Basic validation
    if (!title || !template || !personalInfo) {
      return res.status(400).json({
        success: false,
        message: 'Please provide title, template, and personal information',
      });
    }

    const resume = new Resume({
      user: req.user.id,
      title,
      template,
      personalInfo,
      ...req.body,
    });

    await resume.save();

    res.status(201).json({
      success: true,
      message: 'Resume created successfully',
      data: resume,
    });
  } catch (error) {
    console.error('Create resume error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create resume',
      error: error.message,
    });
  }
};

// Update a resume
exports.updateResume = async (req, res) => {
  try {
    let resume = await Resume.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found',
      });
    }

    resume = await Resume.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: 'Resume updated successfully',
      data: resume,
    });
  } catch (error) {
    console.error('Update resume error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update resume',
      error: error.message,
    });
  }
};

// Delete a resume
exports.deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found',
      });
    }

    await Resume.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Resume deleted successfully',
    });
  } catch (error) {
    console.error('Delete resume error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete resume',
      error: error.message,
    });
  }
};
