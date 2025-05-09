const express = require('express');
const {
  generateText,
  generateJobDescription,
  analyzeResume,
  parseUploadedResume,
} = require('../controllers/aiController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');
const OpenAI = require('openai');

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

const router = express.Router();

// Test route for OpenAI integration (no auth required)
router.post('/test-openai', async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a prompt',
      });
    }
    
    console.log('Testing OpenAI with prompt:', prompt);
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
      return res.status(500).json({
        success: false,
        message: 'Failed to generate text',
        error: error.message,
      });
    }
    
    res.status(200).json({
      success: true,
      text: generatedText,
    });
  } catch (error) {
    console.error('Test OpenAI error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to test OpenAI',
      error: error.message,
    });
  }
});

// Protect all routes below this line
router.use(protect);

// Protected routes
router.post('/generate-text', generateText);
router.post('/generate-job-description', generateJobDescription);
router.post('/analyze-resume', analyzeResume);
router.post('/parse-upload', upload, parseUploadedResume);

module.exports = router;
