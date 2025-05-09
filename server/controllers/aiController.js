const OpenAI = require('openai');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');
const fs = require('fs');
const Resume = require('../models/Resume');
const User = require('../models/User');

// Initialize OpenAI
let openai;
try {
  if (!process.env.OPENAI_API_KEY) {
    console.error('OpenAI API Key is not set in environment variables');
  } else {
    console.log('OpenAI API Key is configured');
  }
  
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || '',
  });
} catch (error) {
  console.error('Error initializing OpenAI client:', error);
}

// Generate text with AI
exports.generateText = async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a prompt',
      });
    }
    
    console.log('Generating text with prompt:', prompt);
    console.log('Calling OpenAI API...');
    
    let generatedText = '';
    
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a professional resume writer and career coach." },
          { role: "user", content: prompt }
        ],
        max_tokens: 1000,
        temperature: 0.7,
      });
      
      console.log('OpenAI API call successful');
      generatedText = completion.choices[0].message.content;
      console.log('Generated text:', generatedText.substring(0, 100) + '...');
    } catch (error) {
      console.error('OpenAI API call failed:', error.message);
      throw error;
    }
    
    res.status(200).json({
      success: true,
      text: generatedText,
    });
  } catch (error) {
    console.error('Generate text error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate text',
      error: error.message,
    });
  }
};

// Generate job description
exports.generateJobDescription = async (req, res) => {
  try {
    const { jobTitle, industry, seniorityLevel } = req.body;

    if (!jobTitle || !industry || !seniorityLevel) {
      return res.status(400).json({
        success: false,
        message: 'Please provide job title, industry, and seniority level',
      });
    }

    const prompt = `Generate a detailed job description for a ${seniorityLevel} ${jobTitle} position in the ${industry} industry. Include responsibilities, requirements, and preferred qualifications.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a professional resume writer and job description expert." },
        { role: "user", content: prompt }
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    const jobDescription = completion.choices[0].message.content;

    res.status(200).json({
      success: true,
      data: {
        jobDescription,
      },
    });
  } catch (error) {
    console.error('Generate job description error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate job description',
      error: error.message,
    });
  }
};

// Analyze resume against job description
exports.analyzeResume = async (req, res) => {
  try {
    const { resumeId, jobDescription } = req.body;

    if (!resumeId || !jobDescription) {
      return res.status(400).json({
        success: false,
        message: 'Please provide resume ID and job description',
      });
    }

    const resume = await Resume.findOne({
      _id: resumeId,
      user: req.user.id,
    });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found',
      });
    }

    // Prepare resume content for analysis
    const resumeContent = JSON.stringify({
      personalInfo: resume.personalInfo,
      education: resume.education,
      experience: resume.experience,
      skills: resume.skills,
      projects: resume.projects,
      certifications: resume.certifications,
      languages: resume.languages,
    });

    const prompt = `
    I have a resume and a job description. I need you to analyze how well the resume matches the job description and provide suggestions for improvement.
    
    Resume:
    ${resumeContent}
    
    Job Description:
    ${jobDescription}
    
    Please provide:
    1. An overall match score (0-100%)
    2. Key missing skills or qualifications
    3. Suggestions to improve each section of the resume
    4. Recommended action verbs and phrases to include
    5. ATS optimization tips
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a professional resume writer and job application expert." },
        { role: "user", content: prompt }
      ],
      max_tokens: 1500,
      temperature: 0.7,
    });

    const analysis = completion.choices[0].message.content;

    // Update resume with job description and AI suggestions
    resume.jobDescription = jobDescription;
    resume.aiSuggestions = {
      analysis,
      generatedAt: new Date(),
    };
    await resume.save();

    res.status(200).json({
      success: true,
      data: {
        analysis,
      },
    });
  } catch (error) {
    console.error('Analyze resume error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to analyze resume',
      error: error.message,
    });
  }
};

// Parse uploaded resume
exports.parseUploadedResume = async (req, res) => {
  try {
    console.log('Request received for parse-upload');
    console.log('Request body:', req.body);
    console.log('Request file:', req.file);
    
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Please upload a file',
      });
    }

    const filePath = req.file.path;
    const fileExtension = req.file.originalname.split('.').pop().toLowerCase();
    console.log('File path:', filePath);
    console.log('File extension:', fileExtension);
    
    let extractedText = '';
    
    // Parse based on file type
    if (fileExtension === 'pdf') {
      const dataBuffer = fs.readFileSync(filePath);
      const pdfData = await pdfParse(dataBuffer);
      extractedText = pdfData.text;
    } else if (fileExtension === 'docx') {
      const result = await mammoth.extractRawText({ path: filePath });
      extractedText = result.value;
    } else {
      return res.status(400).json({
        success: false,
        message: 'Unsupported file format. Please upload a PDF or DOCX file.',
      });
    }

    // Check if text was successfully extracted
    if (!extractedText || extractedText.trim() === '') {
      console.error('No text extracted from the uploaded file');
      return res.status(400).json({
        success: false,
        message: 'Could not extract text from the uploaded file. Please ensure the file contains readable text.'
      });
    }
    
    console.log('Successfully extracted text from file, length:', extractedText.length);
    
    // Use OpenAI to extract structured information
    const prompt = `
    Extract structured information from this resume text:
    
    ${extractedText.substring(0, 5000)} ${extractedText.length > 5000 ? '... (text truncated for length)' : ''}
    
    Format the output as a JSON object with the following structure:
    {
      "personalInfo": {
        "name": "",
        "email": "",
        "phone": "",
        "address": "",
        "linkedin": "",
        "website": "",
        "summary": ""
      },
      "education": [
        {
          "institution": "",
          "degree": "",
          "fieldOfStudy": "",
          "startDate": "",
          "endDate": "",
          "description": ""
        }
      ],
      "experience": [
        {
          "company": "",
          "position": "",
          "startDate": "",
          "endDate": "",
          "description": "",
          "achievements": []
        }
      ],
      "skills": [],
      "projects": [
        {
          "title": "",
          "description": "",
          "technologies": []
        }
      ],
      "certifications": [
        {
          "name": "",
          "issuer": "",
          "date": ""
        }
      ],
      "languages": [
        {
          "name": "",
          "proficiency": ""
        }
      ]
    }
    
    If any field cannot be determined from the text, leave it as an empty string or array.
    `;

    console.log('Sending request to OpenAI API...');
    let completion;
    try {
      completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a professional resume parser. Extract structured information from resume text." },
          { role: "user", content: prompt }
        ],
        max_tokens: 2000,
        temperature: 0.3,
      });
      console.log('Successfully received response from OpenAI');
    } catch (error) {
      console.error('Error calling OpenAI API:', error.message);
      // Clean up the temporary file before returning error
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      return res.status(500).json({
        success: false,
        message: 'Error processing resume with AI',
        error: error.message
      });
    }

    // Clean up the temporary file
    fs.unlinkSync(filePath);

    // Try to parse the response as JSON
    let parsedResume;
    try {
      parsedResume = JSON.parse(completion.choices[0].message.content);
    } catch (error) {
      console.error('Error parsing OpenAI response as JSON:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to parse resume structure',
        error: 'Invalid response format',
      });
    }
    
    // Store the parsed resume in the user's recentUploads array
    try {
      // Get the current user
      const user = await User.findById(req.user.id);
      
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found',
        });
      }
      
      // Create a new upload entry
      const newUpload = {
        resumeData: parsedResume,
        fileName: req.file.originalname,
        uploadDate: new Date()
      };
      
      // Add to the beginning of the array (most recent first)
      user.recentUploads.unshift(newUpload);
      
      // Keep only the 2 most recent uploads
      if (user.recentUploads.length > 2) {
        user.recentUploads = user.recentUploads.slice(0, 2);
      }
      
      // Save the updated user
      await user.save();
      
      console.log(`Cached resume for user ${user._id} (${user.name}). Total cached: ${user.recentUploads.length}`);
    } catch (error) {
      console.error('Error caching resume:', error);
      // Continue even if caching fails - don't block the response
    }

    res.status(200).json({
      success: true,
      data: parsedResume,
    });
  } catch (error) {
    console.error('Parse uploaded resume error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to parse uploaded resume',
      error: error.message,
    });
  }
};
