// Script to seed template data into the database
require('dotenv').config();
const mongoose = require('mongoose');
const Template = require('../models/Template');

// Template data based on our implemented templates
const templateData = [
  {
    name: 'modern',
    displayName: 'Modern',
    description: 'A clean, contemporary design with a sidebar for skills and contact information. Perfect for tech, design, and forward-thinking industries.',
    previewImage: '/templates/modern.png',
    structure: {
      layout: 'sidebar',
      color: 'blue',
      features: ['Two-column layout', 'Sidebar for skills and contact info', 'Clean typography', 'Accent color highlights'],
      bestFor: 'Technology, Design, Marketing, Startups'
    },
    isDefault: true
  },
  {
    name: 'professional',
    displayName: 'Professional',
    description: 'A traditional layout with a formal structure perfect for conservative industries and experienced professionals.',
    previewImage: '/templates/professional.png',
    structure: {
      layout: 'classic',
      color: 'gray',
      features: ['Classic formatting', 'Structured sections', 'Formal typography', 'Balanced white space'],
      bestFor: 'Finance, Law, Healthcare, Government'
    },
    isDefault: false
  },
  {
    name: 'creative',
    displayName: 'Creative',
    description: 'A bold, eye-catching design that stands out for creative professionals and showcases personality.',
    previewImage: '/templates/creative.png',
    structure: {
      layout: 'modern',
      color: 'purple',
      features: ['Distinctive header', 'Visual skill indicators', 'Timeline elements', 'Accent colors'],
      bestFor: 'Graphic Design, Arts, Media, Entertainment'
    },
    isDefault: false
  },
  {
    name: 'minimal',
    displayName: 'Minimal',
    description: 'A clean, minimalist design focusing on content with subtle styling. Perfect for letting your experience speak for itself.',
    previewImage: '/templates/minimal.png',
    structure: {
      layout: 'minimalist',
      color: 'green',
      features: ['Understated design', 'Clean typography', 'Ample white space', 'Subtle separators'],
      bestFor: 'Academia, Research, Writing, Consulting'
    },
    isDefault: false
  },
  {
    name: 'executive',
    displayName: 'Executive',
    description: 'An elegant, sophisticated design for senior professionals and executives that conveys authority and experience.',
    previewImage: '/templates/executive.png',
    structure: {
      layout: 'executive',
      color: 'indigo',
      features: ['Distinctive header', 'Elegant typography', 'Structured layout', 'Professional color scheme'],
      bestFor: 'Executive Leadership, Senior Management, Board Positions'
    },
    isDefault: false
  },
  // Cloud Engineer Templates - Different seniority levels
  {
    name: 'cloud-engineer-junior',
    displayName: 'Cloud Engineer (Junior)',
    description: 'Designed for entry-level cloud engineers, highlighting technical skills, cloud fundamentals, and relevant certifications.',
    previewImage: '/templates/cloud-engineer-junior.png',
    structure: {
      layout: 'cloud-engineer',
      color: 'blue',
      features: ['Cloud skills section', 'Certification highlights', 'Technical project showcase', 'Clean design for readability'],
      bestFor: 'Junior Cloud Engineers, Cloud Support, Cloud Associates',
      seniority: 'junior'
    },
    isDefault: false
  },
  {
    name: 'cloud-engineer-mid',
    displayName: 'Cloud Engineer (Mid-Level)',
    description: 'Tailored for mid-level cloud engineers with several years of experience, emphasizing technical depth and project accomplishments.',
    previewImage: '/templates/cloud-engineer-mid.png',
    structure: {
      layout: 'cloud-engineer',
      color: 'blue',
      features: ['Detailed cloud expertise', 'Project metrics', 'Advanced certifications', 'Technical achievements'],
      bestFor: 'Cloud Engineers, DevOps Engineers, Cloud Administrators',
      seniority: 'mid'
    },
    isDefault: false
  },
  {
    name: 'cloud-engineer-senior',
    displayName: 'Cloud Engineer (Senior)',
    description: 'Sophisticated design for senior cloud engineers, highlighting leadership, architecture skills, and strategic contributions.',
    previewImage: '/templates/cloud-engineer-senior.png',
    structure: {
      layout: 'cloud-engineer',
      color: 'blue',
      features: ['Leadership highlights', 'Architecture expertise', 'Business impact metrics', 'Technical depth'],
      bestFor: 'Senior Cloud Engineers, Cloud Architects, Technical Team Leads',
      seniority: 'senior'
    },
    isDefault: false
  },
  // Platform Engineer Templates - Different seniority levels
  {
    name: 'platform-engineer-junior',
    displayName: 'Platform Engineer (Junior)',
    description: 'Designed for entry-level platform engineers, focusing on infrastructure, automation basics, and DevOps fundamentals.',
    previewImage: '/templates/platform-engineer-junior.png',
    structure: {
      layout: 'platform-engineer',
      color: 'teal',
      features: ['Infrastructure skills', 'Automation tools', 'CI/CD basics', 'Technical foundation'],
      bestFor: 'Junior Platform Engineers, DevOps Associates, Infrastructure Support',
      seniority: 'junior'
    },
    isDefault: false
  },
  {
    name: 'platform-engineer-mid',
    displayName: 'Platform Engineer (Mid-Level)',
    description: 'Tailored for mid-level platform engineers, highlighting infrastructure as code, automation expertise, and system reliability.',
    previewImage: '/templates/platform-engineer-mid.png',
    structure: {
      layout: 'platform-engineer',
      color: 'teal',
      features: ['Infrastructure as Code', 'Advanced automation', 'Reliability engineering', 'Technical implementations'],
      bestFor: 'Platform Engineers, DevOps Engineers, Site Reliability Engineers',
      seniority: 'mid'
    },
    isDefault: false
  },
  {
    name: 'platform-engineer-senior',
    displayName: 'Platform Engineer (Senior)',
    description: 'Sophisticated design for senior platform engineers, emphasizing architectural decisions, team leadership, and enterprise-scale solutions.',
    previewImage: '/templates/platform-engineer-senior.png',
    structure: {
      layout: 'platform-engineer',
      color: 'teal',
      features: ['Architecture expertise', 'Team leadership', 'Enterprise solutions', 'Strategic initiatives'],
      bestFor: 'Senior Platform Engineers, DevOps Architects, Infrastructure Architects',
      seniority: 'senior'
    },
    isDefault: false
  }
];

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('Connected to MongoDB');
    
    try {
      // Clear existing templates
      await Template.deleteMany({});
      console.log('Cleared existing templates');
      
      // Insert new templates
      const templates = await Template.insertMany(templateData);
      console.log(`Successfully added ${templates.length} templates to the database`);
      
      // Disconnect from MongoDB
      mongoose.disconnect();
      console.log('Disconnected from MongoDB');
    } catch (error) {
      console.error('Error seeding templates:', error);
      mongoose.disconnect();
    }
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
