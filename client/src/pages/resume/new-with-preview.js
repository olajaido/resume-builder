import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import { templateService, resumeService } from '@/services/api';
import Link from 'next/link';
import { generateResumeData } from '@/services/resumeTemplateData';
import RoleTypeSelector from '@/components/RoleTypeSelector';
import ResumePreview from '@/components/ResumePreview';

export default function NewResume() {
  const [step, setStep] = useState(1);
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [resumeTitle, setResumeTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedSeniority, setSelectedSeniority] = useState('mid');
  const [selectedCloudProvider, setSelectedCloudProvider] = useState('aws');
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    website: '',
    linkedin: '',
    github: '',
    summary: '',
  });
  const [resumeData, setResumeData] = useState(null);
  const [previewResume, setPreviewResume] = useState(null);
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }

    // Fetch templates
    const fetchTemplates = async () => {
      try {
        setLoading(true);
        const response = await templateService.getTemplates();
        setTemplates(response.data || []);
        // Set default template if available
        if (response.data && response.data.length > 0) {
          const defaultTemplate = response.data.find(t => t.isDefault) || response.data[0];
          setSelectedTemplate(defaultTemplate.name);
        }
      } catch (err) {
        console.error('Error fetching templates:', err);
        setError('Failed to load templates. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, [isAuthenticated, router]);

  const handleTemplateSelect = (templateName) => {
    setSelectedTemplate(templateName);
  };

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    // Reset seniority when role changes
    setSelectedSeniority('mid');
  };

  const handleSeniorityChange = (seniority) => {
    setSelectedSeniority(seniority);
  };

  const handleCloudProviderChange = (provider) => {
    setSelectedCloudProvider(provider);
  };

  const generatePrePopulatedData = () => {
    if (selectedRole && selectedSeniority) {
      // Extract the base role (cloud, platform) from the selectedRole
      let baseRole;
      if (selectedRole === 'cloudEngineer') {
        baseRole = 'cloudEngineer';
      } else if (selectedRole === 'platformEngineer') {
        baseRole = 'platformEngineer';
      } else {
        return; // Don't generate data for other roles yet
      }
      
      // Generate the resume data
      const data = generateResumeData(baseRole, selectedSeniority, selectedCloudProvider);
      setResumeData(data);
      
      // Pre-populate personal info with the generated data
      setPersonalInfo(data.personalInfo);
      
      // Create a preview resume object for the ResumePreview component
      const previewResume = {
        title: resumeTitle || `${data.personalInfo.title} Resume`,
        template: selectedTemplate,
        personalInfo: data.personalInfo,
        summary: data.summary,
        experience: data.experience,
        education: data.education,
        skills: data.skills,
        additionalSkills: data.additionalSkills,
        certifications: data.certifications,
        projects: data.projects,
        languages: data.languages
      };
      
      setPreviewResume(previewResume);
    }
  };

  useEffect(() => {
    // Generate pre-populated data whenever role, seniority, or cloud provider changes
    generatePrePopulatedData();
  }, [selectedRole, selectedSeniority, selectedCloudProvider, selectedTemplate]);

  const handleNextStep = () => {
    if (step === 1 && !selectedTemplate) {
      alert('Please select a template to continue.');
      return;
    }

    if (step === 2 && !resumeTitle) {
      alert('Please enter a resume title to continue.');
      return;
    }

    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleCreateResume = async () => {
    try {
      setLoading(true);

      // Prepare resume data
      const resume = {
        title: resumeTitle,
        template: selectedTemplate,
        personalInfo: resumeData.personalInfo,
        summary: resumeData.summary,
        education: resumeData.education,
        experience: resumeData.experience,
        skills: resumeData.skills,
        additionalSkills: resumeData.additionalSkills,
        projects: resumeData.projects,
        certifications: resumeData.certifications,
        languages: resumeData.languages,
        interests: []
      };

      // Create resume
      const response = await resumeService.createResume(resume);
      
      // Redirect to edit page
      if (response.data && response.data._id) {
        router.push(`/resume/${response.data._id}`);
      } else {
        throw new Error('Resume creation failed');
      }
    } catch (err) {
      console.error('Error creating resume:', err);
      setError('Failed to create resume. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Create New Resume | AI Resume Builder</title>
        <meta name="description" content="Create a new resume with AI assistance" />
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <Link href="/dashboard" className="text-blue-600 hover:text-blue-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Dashboard
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 bg-blue-600 text-white">
            <h1 className="text-2xl font-bold">Create New Resume</h1>
          </div>

          <div className="p-6">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                {error}
              </div>
            )}

            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {[1, 2, 3].map((stepNumber) => (
                  <div key={stepNumber} className="flex-1 relative">
                    <div 
                      className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                        step === stepNumber 
                          ? 'bg-blue-600 text-white' 
                          : step > stepNumber 
                            ? 'bg-green-500 text-white' 
                            : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {step > stepNumber ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        stepNumber
                      )}
                    </div>
                    <div className="text-center mt-2 text-sm">
                      {stepNumber === 1 && 'Select Template'}
                      {stepNumber === 2 && 'Resume Details'}
                      {stepNumber === 3 && 'Review & Create'}
                    </div>
                    {stepNumber < 3 && (
                      <div className={`absolute top-5 w-full ${step > stepNumber ? 'border-t-2 border-green-500' : 'border-t-2 border-gray-200'}`} style={{ left: '50%' }}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step 1: Template Selection */}
            {step === 1 && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Choose a Template</h3>
                
                {loading ? (
                  <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {templates.map((template) => (
                      <div 
                        key={template.name}
                        className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                          selectedTemplate === template.name ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-200 hover:border-blue-300'
                        }`}
                        onClick={() => handleTemplateSelect(template.name)}
                      >
                        <div className="aspect-w-8 aspect-h-11 bg-gray-100">
                          <img 
                            src={template.previewImage || "https://via.placeholder.com/300x400?text=Template+Preview"} 
                            alt={template.displayName}
                            className="object-cover w-full h-full"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "https://via.placeholder.com/300x400?text=Template+Preview";
                            }}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-medium text-gray-900">{template.displayName}</h4>
                          <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Resume Details */}
            {step === 2 && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Resume Details</h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="resumeTitle" className="block text-sm font-medium text-gray-700 mb-1">
                      Resume Title
                    </label>
                    <input
                      type="text"
                      id="resumeTitle"
                      value={resumeTitle}
                      onChange={(e) => setResumeTitle(e.target.value)}
                      placeholder="e.g., Software Developer Resume, Marketing Professional CV"
                      className="input"
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      This title is for your reference only and won't appear on the resume.
                    </p>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="text-md font-medium text-gray-900 mb-3">Select Your Role</h4>
                    <RoleTypeSelector 
                      selectedRole={selectedRole}
                      selectedSeniority={selectedSeniority}
                      selectedCloudProvider={selectedCloudProvider}
                      onRoleChange={handleRoleChange}
                      onSeniorityChange={handleSeniorityChange}
                      onCloudProviderChange={handleCloudProviderChange}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Review & Create */}
            {step === 3 && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Review & Create</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-md font-medium text-gray-900 mb-2">Resume Summary</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Title:</span> {resumeTitle}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Template:</span> {templates.find(t => t.name === selectedTemplate)?.displayName || selectedTemplate}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Role:</span> {selectedRole === 'cloudEngineer' ? 'Cloud Engineer' : 'Platform Engineer'}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Seniority:</span> {selectedSeniority === 'junior' ? 'Junior' : selectedSeniority === 'mid' ? 'Mid-Level' : 'Senior'}
                        </p>
                        {selectedRole === 'cloudEngineer' && (
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Cloud Provider:</span> {selectedCloudProvider.toUpperCase()}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Resume Preview */}
                  {previewResume && (
                    <div className="mt-6">
                      <h4 className="text-md font-medium text-gray-900 mb-2">Resume Preview</h4>
                      <div className="border rounded-lg overflow-hidden">
                        <ResumePreview resume={previewResume} template={selectedTemplate} />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        This is a preview of your resume. You can edit all content after creation.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="btn btn-secondary"
                  disabled={loading}
                >
                  Previous
                </button>
              ) : (
                <div></div>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="btn btn-primary"
                  disabled={loading}
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleCreateResume}
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating...
                    </>
                  ) : (
                    'Create Resume'
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
