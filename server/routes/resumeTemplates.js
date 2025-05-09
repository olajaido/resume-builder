/**
 * Resume Templates Routes
 * Routes for fetching role-specific resume template content
 */

const express = require('express');
const router = express.Router();
const { 
  getResumeTemplateContent, 
  getAvailableRolesAndLevels 
} = require('../controllers/resumeTemplateController');

// Get template content for a specific role and experience level
router.get('/content/:role/:experienceLevel', getResumeTemplateContent);

// Get all available roles and experience levels
router.get('/roles-and-levels', getAvailableRolesAndLevels);

module.exports = router;
