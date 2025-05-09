import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import { templateService, resumeService } from '@/services/api';
import Link from 'next/link';
import { generateResumeData } from '@/services/resumeTemplateData';
import RoleTypeSelector from '@/components/RoleTypeSelector';
import ResumePreview from '@/components/ResumePreview';
import ResumeCreationEditor from '@/components/ResumeCreationEditor';

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
      } catch (error) {
        console.error('Error fetching templates:', error);
        setError('Failed to load resume templates. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, [isAuthenticated, router]);

  const handleTemplateSelect = (templateName) => {
    console.log('Selected template:', templateName);
    setSelectedTemplate(templateName);
    
    // Update preview resume with the new template
    if (previewResume) {
      setPreviewResume({
        ...previewResume,
        template: templateName
      });
    }
  };
  
  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
    
    // If the role ID includes a seniority level (e.g., cloud-engineer-junior)
    if (roleId.includes('-')) {
      const parts = roleId.split('-');
      if (parts.length >= 3) {
        const roleType = parts[0] + 'Engineer';
        const seniorityLevel = parts[2];
        setSelectedRole(roleType);
        setSelectedSeniority(seniorityLevel);
        // Auto-select the corresponding template
        setSelectedTemplate(roleId);
      }
    }
    
    // Generate pre-populated resume data based on selected role and seniority
    generatePrePopulatedData();
  };
  
  const handleSeniorityChange = (e) => {
    setSelectedSeniority(e.target.value);
    // Update template based on role and seniority
    if (selectedRole) {
      const baseRole = selectedRole.replace('Engineer', '');
      setSelectedTemplate(`${baseRole}-engineer-${e.target.value}`);
    }
    // Generate pre-populated resume data based on selected role and seniority
    generatePrePopulatedData();
  };
  
  const handleCloudProviderChange = (e) => {
    setSelectedCloudProvider(e.target.value);
    // Generate pre-populated resume data based on selected role, seniority, and cloud provider
    generatePrePopulatedData();
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

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  const handleNext = () => {
    if (step === 1 && !selectedTemplate) {
      setError('Please select a template to continue.');
      return;
    }
    
    if (step === 2) {
      if (!resumeTitle.trim()) {
        setError('Please enter a title for your resume.');
        return;
      }
      
      // If a specialized role is selected, generate pre-populated data
      if (selectedRole && (selectedRole === 'cloudEngineer' || selectedRole === 'platformEngineer')) {
        generatePrePopulatedData();
      }
    }
    
    setError(null);
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleCreateResume = async () => {
    try {
      setLoading(true);

      // Validate required fields
      if (!personalInfo.name || !personalInfo.email) {
        setError('Name and email are required fields');
        setLoading(false);
        return;
      }

      // Helper function to ensure resumeData fields exist
      const ensureDataExists = (data, defaultValue) => {
        return data || defaultValue;
      };

      // Helper function to format date fields
      const formatDates = (items) => {
        if (!items || !Array.isArray(items)) return [];
        return items.map(item => {
          const formattedItem = { ...item };
          // Convert date strings to ISO format or null if empty
          if (formattedItem.startDate) {
            formattedItem.startDate = new Date(formattedItem.startDate).toISOString();
          }
          if (formattedItem.endDate) {
            formattedItem.endDate = new Date(formattedItem.endDate).toISOString();
          }
          return formattedItem;
        });
      };

      // Prepare resume data with proper formatting
      const resume = {
        title: resumeTitle || 'My Resume',
        template: selectedTemplate,
        personalInfo: {
          ...personalInfo,
          // Ensure required fields are never empty
          name: personalInfo.name || 'Your Name',
          email: personalInfo.email || 'your.email@example.com',
        },
        summary: ensureDataExists(resumeData?.summary, ''),
        education: formatDates(ensureDataExists(resumeData?.education, [])),
        experience: formatDates(ensureDataExists(resumeData?.experience, [])),
        skills: ensureDataExists(resumeData?.skills, []),
        additionalSkills: ensureDataExists(resumeData?.additionalSkills, []),
        projects: formatDates(ensureDataExists(resumeData?.projects, [])),
        certifications: ensureDataExists(resumeData?.certifications, []),
        languages: ensureDataExists(resumeData?.languages, []),
        interests: []
      };

      console.log('Sending resume data:', JSON.stringify(resume));

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
      setError(`Failed to create resume: ${err.message}`);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Create New Resume - AI Resume Builder</title>
        <meta name="description" content="Create a new resume with AI assistance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">AI Resume Builder</h1>
          <Link href="/dashboard" className="text-blue-600 hover:text-blue-800">
            Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 bg-blue-600 text-white">
            <h2 className="text-xl font-bold">Create New Resume</h2>
          </div>
          
          {/* Progress Steps */}
          <div className="px-6 py-4 border-b">
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                1
              </div>
              <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                2
              </div>
              <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                3
              </div>
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <div className="text-center">Select Template</div>
              <div className="text-center">Resume Details</div>
              <div className="text-center">Personal Information</div>
            </div>
          </div>

          {error && (
            <div className="px-6 py-4 bg-red-50 border-b border-red-100">
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

          <div className="px-6 py-6">
            {/* Step 1: Template Selection */}
            {step === 1 && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Select a Template</h3>
                
                {loading ? (
                  <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                ) : templates.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-600">No templates available. Please try again later.</p>
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
                    <h4 className="font-medium text-gray-900 mb-4">Select Your Role & Experience Level</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Choose your role type and experience level to get a pre-populated resume with relevant skills, experience, and certifications.
                    </p>
                    
                    <RoleTypeSelector 
                      selectedRole={selectedRole} 
                      onChange={handleRoleSelect} 
                    />
                    
                    {(selectedRole === 'cloudEngineer' || selectedRole === 'platformEngineer') && (
                      <div className="mt-6 space-y-6">
                        <div>
                          <label htmlFor="seniorityLevel" className="block text-sm font-medium text-gray-700 mb-1">
                            Experience Level
                          </label>
                          <select
                            id="seniorityLevel"
                            value={selectedSeniority}
                            onChange={handleSeniorityChange}
                            className="input"
                          >
                            <option value="junior">Junior (0-2 years)</option>
                            <option value="mid">Mid-Level (3-5 years)</option>
                            <option value="senior">Senior (6+ years)</option>
                          </select>
                        </div>
                        
                        {selectedRole === 'cloudEngineer' && (
                          <div>
                            <label htmlFor="cloudProvider" className="block text-sm font-medium text-gray-700 mb-1">
                              Preferred Cloud Provider
                            </label>
                            <select
                              id="cloudProvider"
                              value={selectedCloudProvider}
                              onChange={handleCloudProviderChange}
                              className="input"
                            >
                              <option value="aws">Amazon Web Services (AWS)</option>
                              <option value="azure">Microsoft Azure</option>
                              <option value="gcp">Google Cloud Platform (GCP)</option>
                              <option value="multi">Multi-Cloud</option>
                            </select>
                          </div>
                        )}
                        
                        <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="ml-3">
                              <h3 className="text-sm font-medium text-blue-800">Pre-populated Resume Content</h3>
                              <div className="mt-2 text-sm text-blue-700">
                                <p>Your resume will be pre-populated with realistic content based on your selections, including:</p>
                                <ul className="list-disc pl-5 mt-1 space-y-1">
                                  <li>Relevant skills and technologies</li>
                                  <li>Experience entries appropriate for your level</li>
                                  <li>Industry-standard certifications</li>
                                  <li>Sample projects and achievements</li>
                                </ul>
                                <p className="mt-2">You can edit all content after creation to personalize it further.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Edit Resume Content */}
            {step === 3 && (
              <div>
                {/* Resume Preview */}
                {previewResume && (
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Resume Preview</h3>
                    <div className="border rounded-lg overflow-hidden">
                      <ResumePreview resume={previewResume} template={selectedTemplate} />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      This is a preview of your resume with pre-populated content based on your role and seniority selection.
                      Use the editor below to customize all sections of your resume.
                    </p>
                  </div>
                )}
                
                <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Edit Resume Content</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Your resume has been pre-populated with content based on your selected role and seniority level.
                    Use the editor below to customize each section to better reflect your experience and skills.
                  </p>
                  
                  {resumeData && (
                    <ResumeCreationEditor 
                      resumeData={resumeData} 
                      onChange={setResumeData} 
                    />
                  )}
                </div>
                
                <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={personalInfo.name}
                        onChange={handlePersonalInfoChange}
                        placeholder="John Doe"
                        className="input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={personalInfo.email}
                        onChange={handlePersonalInfoChange}
                        placeholder="john.doe@example.com"
                        className="input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={personalInfo.phone}
                        onChange={handlePersonalInfoChange}
                        placeholder="+1 (123) 456-7890"
                        className="input"
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={personalInfo.address}
                        onChange={handlePersonalInfoChange}
                        placeholder="City, State, Country"
                        className="input"
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                        Website
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={personalInfo.website}
                        onChange={handlePersonalInfoChange}
                        placeholder="https://yourwebsite.com"
                        className="input"
                      />
                    </div>
                    <div>
                      <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                        LinkedIn
                      </label>
                      <input
                        type="url"
                        id="linkedin"
                        name="linkedin"
                        value={personalInfo.linkedin}
                        onChange={handlePersonalInfoChange}
                        placeholder="https://linkedin.com/in/username"
                        className="input"
                      />
                    </div>
                    <div>
                      <label htmlFor="github" className="block text-sm font-medium text-gray-700 mb-1">
                        GitHub
                      </label>
                      <input
                        type="url"
                        id="github"
                        name="github"
                        value={personalInfo.github}
                        onChange={handlePersonalInfoChange}
                        placeholder="https://github.com/username"
                        className="input"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">
                      Professional Summary
                    </label>
                    <textarea
                      id="summary"
                      name="summary"
                      value={personalInfo.summary}
                      onChange={handlePersonalInfoChange}
                      rows={4}
                      placeholder="Write a brief summary of your professional background and key qualifications..."
                      className="input"
                    ></textarea>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="px-6 py-4 bg-gray-50 flex justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="btn btn-outline"
              >
                Back
              </button>
            ) : (
              <Link href="/dashboard" className="btn btn-outline">
                Cancel
              </Link>
            )}
            
            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="btn btn-primary"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={handleCreateResume}
                disabled={loading}
                className="btn btn-primary"
              >
                {loading ? 'Creating...' : 'Create Resume'}
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
