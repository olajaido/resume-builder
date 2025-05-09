import { useState } from 'react';
import { aiService } from '@/services/api';

const ResumeAnalyzer = ({ resumeId, initialJobDescription = '' }) => {
  const [jobDescription, setJobDescription] = useState(initialJobDescription);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handleAnalyze = async () => {
    if (!resumeId) {
      setError('Resume ID is required for analysis.');
      return;
    }

    if (!jobDescription.trim()) {
      setError('Please provide a job description for analysis.');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await aiService.analyzeResume({
        resumeId,
        jobDescription,
      });

      setAnalysis(response.data.analysis);
    } catch (error) {
      console.error('Error analyzing resume:', error);
      setError(
        error.response?.data?.message ||
        'Failed to analyze resume. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4 bg-blue-600 text-white">
        <h2 className="text-xl font-bold">AI Resume Analysis</h2>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-6">
          Get AI-powered analysis of how well your resume matches the job description and receive personalized improvement suggestions.
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

        <div className="space-y-6">
          <div>
            <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-1">
              Job Description
            </label>
            <textarea
              id="jobDescription"
              value={jobDescription}
              onChange={handleJobDescriptionChange}
              rows={8}
              placeholder="Paste the job description here..."
              className="input"
            ></textarea>
            <p className="mt-1 text-sm text-gray-500">
              Provide the full job description for the position you're applying to.
            </p>
          </div>

          <div>
            <button
              type="button"
              onClick={handleAnalyze}
              disabled={loading}
              className="w-full btn btn-primary"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </span>
              ) : (
                'Analyze Resume'
              )}
            </button>
          </div>
        </div>

        {analysis && (
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Analysis Results</h3>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4 max-h-96 overflow-y-auto">
              <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700">
                {analysis}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeAnalyzer;
