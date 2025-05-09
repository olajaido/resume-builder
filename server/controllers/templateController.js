const Template = require('../models/Template');

// Get all templates
exports.getTemplates = async (req, res) => {
  try {
    const templates = await Template.find()
      .select('name displayName description previewImage isDefault')
      .sort({ isDefault: -1, name: 1 });

    res.status(200).json({
      success: true,
      count: templates.length,
      data: templates,
    });
  } catch (error) {
    console.error('Get templates error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get templates',
      error: error.message,
    });
  }
};

// Get a single template
exports.getTemplate = async (req, res) => {
  try {
    const template = await Template.findOne({ name: req.params.name });

    if (!template) {
      return res.status(404).json({
        success: false,
        message: 'Template not found',
      });
    }

    res.status(200).json({
      success: true,
      data: template,
    });
  } catch (error) {
    console.error('Get template error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get template',
      error: error.message,
    });
  }
};
