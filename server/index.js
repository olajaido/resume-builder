// Load environment variables first
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Import routes
const authRoutes = require('./routes/auth');
const resumeRoutes = require('./routes/resumes');
const templateRoutes = require('./routes/templates');
const aiRoutes = require('./routes/ai');
const resumeTemplateRoutes = require('./routes/resumeTemplates');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5001; // Changed to 5001 since 5000 is in use

// Enable CORS for all routes
app.use(cors());

// Additional CORS handling middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  
  next();
});

// Log all requests for debugging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/resumes', resumeRoutes);
app.use('/api/templates', templateRoutes);
app.use('/api/resume-templates', resumeTemplateRoutes);
app.use('/api/ai', aiRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Resume Builder API is running');
});

// Test route for debugging
app.get('/api/test', (req, res) => {
  res.json({ message: 'Test route is working' });
});

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`, { 
    body: req.body,
    headers: req.headers 
  });
  next();
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/resume-builder', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

module.exports = app;
