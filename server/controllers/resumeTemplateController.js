/**
 * Resume Template Controller
 * Handles requests for role-specific resume template content
 */

const templateContent = require('../data');

/**
 * Get template content for a specific role and experience level
 */
const getResumeTemplateContent = async (req, res) => {
  try {
    const { role, experienceLevel } = req.params;
    
    // Check if role exists in our template content
    if (!templateContent[role]) {
      return res.status(404).json({ 
        success: false, 
        message: `Template content for role '${role}' not found` 
      });
    }
    
    // Check if experience level exists for this role
    if (!templateContent[role][experienceLevel]) {
      return res.status(404).json({ 
        success: false, 
        message: `Experience level '${experienceLevel}' not found for role '${role}'` 
      });
    }
    
    // Return the template content
    return res.status(200).json({
      success: true,
      data: templateContent[role][experienceLevel]
    });
  } catch (error) {
    console.error('Error fetching resume template content:', error);
    return res.status(500).json({
      success: false,
      message: 'Error fetching resume template content',
      error: error.message
    });
  }
};

/**
 * Get all available roles and experience levels
 */
const getAvailableRolesAndLevels = async (req, res) => {
  try {
    const roles = Object.keys(templateContent);
    
    // Create a mapping of available experience levels for each role
    const rolesWithLevels = {};
    roles.forEach(role => {
      rolesWithLevels[role] = Object.keys(templateContent[role]);
    });
    
    return res.status(200).json({
      success: true,
      data: {
        roles,
        rolesWithLevels
      }
    });
  } catch (error) {
    console.error('Error fetching available roles and levels:', error);
    return res.status(500).json({
      success: false,
      message: 'Error fetching available roles and levels',
      error: error.message
    });
  }
};

module.exports = {
  getResumeTemplateContent,
  getAvailableRolesAndLevels
};
