import { useState } from 'react';
import { aiService } from '@/services/api';

const ResumeUploader = ({ onResumeDataParsed }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [parsedData, setParsedData] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    
    if (!selectedFile) {
      setFile(null);
      return;
    }
    
    // Check file type
    const fileType = selectedFile.type;
    if (
      fileType !== 'application/pdf' && 
      fileType !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
      setError('Please upload a PDF or DOCX file.');
      setFile(null);
      return;
    }
    
    // Check file size (max 10MB)
    if (selectedFile.size > 10 * 1024 * 1024) {
      setError('File size should not exceed 10MB.');
      setFile(null);
      return;
    }
    
    setFile(selectedFile);
    setError(null);
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      setUploadProgress(0);
      
      console.log('Uploading file:', file.name, 'Size:', file.size, 'Type:', file.type);
      
      // Create form data
      const formData = new FormData();
      formData.append('resume', file);
      
      // Log form data contents (for debugging)
      console.log('Form data created with file:', file.name);
      
      // Upload and parse resume
      const response = await aiService.parseUploadedResume(formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          console.log('Upload progress:', progress + '%');
          setUploadProgress(progress);
        },
      });
      
      console.log('Upload successful, response:', response);
      setParsedData(response.data);
      
      // Call the callback function if provided
      if (onResumeDataParsed) {
        onResumeDataParsed(response.data);
      }
    } catch (error) {
      console.error('Error uploading and parsing resume:', error);
      let errorMessage = 'Failed to upload and parse resume. Please try again.';
      
      if (error.response) {
        console.error('Server response error:', error.response.status, error.response.data);
        errorMessage = error.response.data?.message || errorMessage;
      } else if (error.request) {
        console.error('No response received from server');
        errorMessage = 'No response received from server. Please check your connection.';
      } else {
        console.error('Request setup error:', error.message);
        errorMessage = `Error setting up request: ${error.message}`;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleUseData = () => {
    if (onResumeDataParsed && parsedData) {
      onResumeDataParsed(parsedData);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4 bg-blue-600 text-white">
        <h2 className="text-xl font-bold">Upload Existing Resume</h2>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-6">
          Upload your existing resume in PDF or DOCX format. Our AI will parse and convert it to an editable format.
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
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              id="resume-file"
              accept=".pdf,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="resume-file"
              className="cursor-pointer flex flex-col items-center justify-center"
            >
              <svg className="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="mt-2 text-sm text-gray-600">
                <span className="font-medium text-blue-600 hover:text-blue-500">
                  Click to upload
                </span>{' '}
                or drag and drop
              </p>
              <p className="mt-1 text-xs text-gray-500">
                PDF or DOCX up to 10MB
              </p>
            </label>
            {file && (
              <div className="mt-4 flex items-center justify-center">
                <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">{file.name}</span>
              </div>
            )}
          </div>
          
          <div>
            <button
              type="button"
              onClick={handleUpload}
              disabled={!file || loading}
              className="w-full btn btn-primary"
            >
              {loading ? (
                <div className="w-full">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {uploadProgress < 100 ? 'Uploading...' : 'Analyzing...'}
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              ) : (
                'Upload and Parse Resume'
              )}
            </button>
          </div>
        </div>
        
        {parsedData && (
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Parsed Resume Data</h3>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4 max-h-96 overflow-y-auto">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">Personal Information</h4>
                  <p className="text-sm text-gray-600">
                    Name: {parsedData.personalInfo?.name || 'Not found'}
                  </p>
                  <p className="text-sm text-gray-600">
                    Email: {parsedData.personalInfo?.email || 'Not found'}
                  </p>
                  <p className="text-sm text-gray-600">
                    Phone: {parsedData.personalInfo?.phone || 'Not found'}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700">Education</h4>
                  {parsedData.education && parsedData.education.length > 0 ? (
                    <ul className="text-sm text-gray-600 list-disc list-inside">
                      {parsedData.education.map((edu, index) => (
                        <li key={index}>
                          {edu.degree} in {edu.fieldOfStudy} from {edu.institution}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-600">No education data found</p>
                  )}
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700">Experience</h4>
                  {parsedData.experience && parsedData.experience.length > 0 ? (
                    <ul className="text-sm text-gray-600 list-disc list-inside">
                      {parsedData.experience.map((exp, index) => (
                        <li key={index}>
                          {exp.position} at {exp.company}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-600">No experience data found</p>
                  )}
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700">Skills</h4>
                  {parsedData.skills && parsedData.skills.length > 0 ? (
                    <p className="text-sm text-gray-600">
                      {parsedData.skills.join(', ')}
                    </p>
                  ) : (
                    <p className="text-sm text-gray-600">No skills data found</p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleUseData}
                className="btn btn-primary"
              >
                Use This Data
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeUploader;
