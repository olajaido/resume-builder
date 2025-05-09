/**
 * Resume Template Content Index
 * Exports all role-specific template content
 */

const devopsEngineerTemplates = require('./devopsEngineerTemplates');
const cloudEngineerTemplates = require('./cloudEngineerTemplates');
const platformEngineerTemplates = require('./platformEngineerTemplates');
const infrastructureEngineerTemplates = require('./infrastructureEngineerTemplates');

module.exports = {
  devopsEngineer: devopsEngineerTemplates,
  cloudEngineer: cloudEngineerTemplates,
  platformEngineer: platformEngineerTemplates,
  infrastructureEngineer: infrastructureEngineerTemplates
};
