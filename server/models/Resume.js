const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  school: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  current: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
  },
});

const experienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  current: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
  },
  achievements: [String],
});

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  technologies: {
    type: String,
  },
  link: {
    type: String,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
});

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    template: {
      type: String,
      required: true,
      default: 'modern',
    },
    personalInfo: {
      name: {
        type: String,
        required: true,
      },
      title: {
        type: String,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
      },
      address: {
        type: String,
      },
      website: {
        type: String,
      },
      linkedin: {
        type: String,
      },
      github: {
        type: String,
      },
    },
    summary: {
      type: String,
    },
    education: [educationSchema],
    experience: [experienceSchema],
    skills: {
      type: [String],
      default: [],
    },
    additionalSkills: {
      type: [String],
      default: [],
    },
    projects: [projectSchema],
    certifications: {
      type: [String],
      default: [],
    },
    languages: [
      {
        language: String,
        proficiency: String,
      },
    ],
    interests: [String],
    aiSuggestions: {
      type: Object,
      default: {},
    },
    jobDescription: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
