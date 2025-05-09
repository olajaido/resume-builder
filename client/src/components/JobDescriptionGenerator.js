import { useState } from 'react';
import { aiService } from '@/services/api';

const JobDescriptionGenerator = ({ onJobDescriptionGenerated }) => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    industry: '',
    seniorityLevel: 'mid-level',
    roleType: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [generatedDescription, setGeneratedDescription] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.jobTitle || !formData.industry) {
      setError('Please fill in all required fields.');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      const response = await aiService.generateJobDescription(formData);
      
      setGeneratedDescription(response.data.jobDescription);
      
      // Call the callback function if provided
      if (onJobDescriptionGenerated) {
        onJobDescriptionGenerated(response.data.jobDescription);
      }
    } catch (error) {
      console.error('Error generating job description:', error);
      setError(
        error.response?.data?.message || 
        'Failed to generate job description. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleUseDescription = () => {
    if (onJobDescriptionGenerated) {
      onJobDescriptionGenerated(generatedDescription);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4 bg-blue-600 text-white">
        <h2 className="text-xl font-bold">AI Job Description Generator</h2>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-6">
          Generate a professional job description based on your target role. This will help tailor your resume to match the job requirements.
        </p>
        
        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                Job Title *
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="e.g., Software Engineer, Marketing Manager"
                className="input"
                required
              />
            </div>
            
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                Industry *
              </label>
              <input
                type="text"
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                placeholder="e.g., Technology, Healthcare, Finance"
                className="input"
                required
              />
            </div>
            
            <div>
              <label htmlFor="roleType" className="block text-sm font-medium text-gray-700 mb-1">
                Role Type
              </label>
              <select
                id="roleType"
                name="roleType"
                value={formData.roleType}
                onChange={handleChange}
                className="input"
              >
                <option value="">Select a role type</option>
                <option value="cloudEngineer">Cloud Engineer</option>
                <option value="platformEngineer">Platform Engineer</option>
                <option value="devopsEngineer">DevOps Engineer</option>
                <option value="infrastructureEngineer">Infrastructure Engineer</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="seniorityLevel" className="block text-sm font-medium text-gray-700 mb-1">
                Seniority Level
              </label>
              <select
                id="seniorityLevel"
                name="seniorityLevel"
                value={formData.seniorityLevel}
                onChange={handleChange}
                className="input"
              >
                <option value="junior">Junior (Entry Level)</option>
                <option value="mid-level">Mid-Level</option>
                <option value="senior">Senior</option>
                <option value="manager">Manager</option>
                <option value="director">Director</option>
                <option value="executive">Executive</option>
              </select>
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full btn btn-primary"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </span>
                ) : (
                  'Generate Job Description'
                )}
              </button>
            </div>
          </div>
        </form>
        
        {generatedDescription && (
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Generated Job Description</h3>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4 max-h-96 overflow-y-auto">
              <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700">
                {generatedDescription}
              </pre>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleUseDescription}
                className="btn btn-primary"
              >
                Use This Description
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDescriptionGenerator;
