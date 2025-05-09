import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Resume API services
export const resumeService = {
  // Get all resumes
  getResumes: async () => {
    try {
      const response = await api.get('/api/resumes');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get a single resume
  getResume: async (id) => {
    try {
      const response = await api.get(`/api/resumes/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Create a new resume
  createResume: async (resumeData) => {
    try {
      const response = await api.post('/api/resumes', resumeData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update a resume
  updateResume: async (id, resumeData) => {
    try {
      const response = await api.put(`/api/resumes/${id}`, resumeData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Delete a resume
  deleteResume: async (id) => {
    try {
      const response = await api.delete(`/api/resumes/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

// Template API services
export const templateService = {
  // Get all templates
  getTemplates: async () => {
    try {
      const response = await api.get('/api/templates');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get a single template
  getTemplate: async (name) => {
    try {
      const response = await api.get(`/api/templates/${name}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

// Auth API services
export const authService = {
  // Get current user
  getCurrentUser: async () => {
    try {
      const response = await api.get('/api/auth/me');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  // Get recent uploads
  getRecentUploads: async () => {
    try {
      const response = await api.get('/api/auth/recent-uploads');
      return response.data;
    } catch (error) {
      console.error('Get recent uploads error:', error.response?.data || error.message);
      throw error;
    }
  },
};

// AI API services
export const aiService = {
  // Generate job description
  generateJobDescription: async (jobData) => {
    try {
      const response = await api.post('/api/ai/generate-job-description', jobData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Analyze resume
  analyzeResume: async (analysisData) => {
    try {
      const response = await api.post('/api/ai/analyze-resume', analysisData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Parse uploaded resume
  parseUploadedResume: async (formData, config = {}) => {
    try {
      const response = await api.post('/api/ai/parse-upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        ...config
      });
      return response.data;
    } catch (error) {
      console.error('API Error:', error.response?.data || error.message);
      throw error;
    }
  },
  
  // Generate text with AI
  generateText: async (prompt) => {
    try {
      const response = await api.post('/api/ai/generate-text', { prompt });
      return response.data;
    } catch (error) {
      console.error('AI Generation Error:', error.response?.data || error.message);
      throw error;
    }
  },
};

// Resume Template Content API services
export const resumeTemplateService = {
  // Get template content for a specific role and experience level
  getResumeTemplateContent: async (role, experienceLevel) => {
    try {
      const response = await api.get(`/api/resume-templates/content/${role}/${experienceLevel}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get all available roles and experience levels
  getAvailableRolesAndLevels: async () => {
    try {
      const response = await api.get('/api/resume-templates/roles-and-levels');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default api;
