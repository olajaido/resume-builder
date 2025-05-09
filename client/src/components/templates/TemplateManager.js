import React from 'react';
import ModernTemplate from './ModernTemplate';
import ProfessionalTemplate from './ProfessionalTemplate';
import CreativeTemplate from './CreativeTemplate';
import MinimalTemplate from './MinimalTemplate';
import ExecutiveTemplate from './ExecutiveTemplate';
import CloudEngineerTemplate from './CloudEngineerTemplate';
import PlatformEngineerTemplate from './PlatformEngineerTemplate';

/**
 * Template Manager component that renders the appropriate resume template
 * based on the selected template ID
 */
const TemplateManager = ({ resume, templateId = 'modern' }) => {
  console.log('Rendering template with ID:', templateId);
  
  // Map of template IDs to their respective components
  const templates = {
    modern: ModernTemplate,
    professional: ProfessionalTemplate,
    creative: CreativeTemplate,
    minimal: MinimalTemplate,
    executive: ExecutiveTemplate,
    // Cloud Engineer templates for different seniority levels
    'cloud-engineer-junior': CloudEngineerTemplate,
    'cloud-engineer-mid': CloudEngineerTemplate,
    'cloud-engineer-senior': CloudEngineerTemplate,
    // Platform Engineer templates for different seniority levels
    'platform-engineer-junior': PlatformEngineerTemplate,
    'platform-engineer-mid': PlatformEngineerTemplate,
    'platform-engineer-senior': PlatformEngineerTemplate,
  };

  // Get the template component based on the templateId
  const TemplateComponent = templates[templateId] || templates.modern;
  
  // If we're using a specialized template but it's not in our map, fall back to modern
  if (!TemplateComponent) {
    console.warn(`Template with ID "${templateId}" not found, falling back to modern template`);
    return <ModernTemplate resume={resume} />;
  }

  return <TemplateComponent resume={resume} />;
};

export default TemplateManager;
