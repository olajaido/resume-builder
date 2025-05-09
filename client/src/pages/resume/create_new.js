import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import { aiService } from '@/services/api';
import { FiEdit2, FiPlus, FiTrash2, FiCheck, FiX } from 'react-icons/fi';
import { BsMagic } from 'react-icons/bs';

export default function CreateResumePage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const { template, data } = router.query;
  const [activeTab, setActiveTab] = useState('content');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationTarget, setGenerationTarget] = useState(null);
  const [showGuidance, setShowGuidance] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
      linkedin: '',
      website: ''
    },
    summary: '',
    experience: [
      {
        title: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: ''
      }
    ],
    education: [
      {
        degree: '',
        school: '',
        location: '',
        startDate: '',
        endDate: '',
        description: ''
      }
    ],
    skills: [''],
    certifications: [''],
    languages: [''],
    projects: [
      {
        title: '',
        description: '',
        link: '',
        technologies: ''
      }
    ]
  });

  // Redirect to login if not authenticated
  useEffect(() => {
    if (typeof window !== 'undefined' && !isAuthenticated()) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  // Load parsed data from uploaded resume if available
  useEffect(() => {
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setResumeData(prevData => ({
          ...prevData,
          ...parsedData
        }));
      } catch (error) {
        console.error('Error parsing resume data:', error);
      }
    }
  }, [data]);

  // Handle template selection
  useEffect(() => {
    if (template) {
      console.log(`Selected template: ${template}`);
      // Here you would load any template-specific settings
    }
  }, [template]);

  // AI Generation Functions
  const generateWithAI = async (target) => {
    setIsGenerating(true);
    setGenerationTarget(target);
    
    try {
      let aiPrompt = '';
      
      if (target === 'summary') {
        const { name } = resumeData.personalInfo;
        const skills = resumeData.skills.filter(skill => skill.trim() !== '').join(', ');
        
        aiPrompt = `Generate a professional summary for a resume with the following details:
        Name: ${name || 'Not specified'}
        Skills: ${skills || 'Not specified'}
        The summary should be concise (3-4 sentences), professional, and highlight key strengths and value proposition.`;
      } else if (target === 'experience') {
        const { title, company } = resumeData.experience[currentSection] || {};
        
        aiPrompt = `Generate 3-4 bullet points describing achievements and responsibilities for the following job position:
        Job Title: ${title || 'Not specified'}
        Company: ${company || 'Not specified'}
        Each bullet point should start with a strong action verb and include specific achievements with metrics where possible.`;
      }
      
      // Mock API call for now - replace with actual API call
      console.log('Generating with AI:', aiPrompt);
      // const response = await aiService.generateText(aiPrompt);
      
      // Mock response
      const mockResponse = {
        data: {
          text: target === 'summary' 
            ? 'Experienced professional with expertise in web development and project management. Skilled in JavaScript, React, and Node.js, with a proven track record of delivering high-quality applications on time and within budget. Passionate about creating user-friendly interfaces and optimizing application performance.'
            : '• Implemented CI/CD pipelines using GitHub Actions, resulting in a 70% reduction in deployment time and enabling 20+ daily releases.\n• Containerized legacy applications using Docker, improving scalability and reducing operational costs by 40%.\n• Led the migration to a microservices architecture, enhancing system reliability and reducing downtime by 60%.'
        }
      };
      
      if (target === 'summary') {
        setResumeData({
          ...resumeData,
          summary: mockResponse.data.text
        });
      } else if (target === 'experience' && currentSection !== null) {
        const newExperience = [...resumeData.experience];
        newExperience[currentSection] = {
          ...newExperience[currentSection],
          description: mockResponse.data.text
        };
        
        setResumeData({
          ...resumeData,
          experience: newExperience
        });
      }
    } catch (error) {
      console.error(`Error generating ${target} with AI:`, error);
      alert(`Failed to generate content. Please try again.`);
    } finally {
      setIsGenerating(false);
      setGenerationTarget(null);
    }
  };

  const handleInputChange = (section, index, field, value) => {
    if (section === 'personalInfo') {
      setResumeData({
        ...resumeData,
        personalInfo: {
          ...resumeData.personalInfo,
          [field]: value
        }
      });
    } else if (Array.isArray(resumeData[section])) {
      const newArray = [...resumeData[section]];
      if (typeof newArray[index] === 'object') {
        newArray[index] = {
          ...newArray[index],
          [field]: value
        };
      } else {
        newArray[index] = value;
      }
      setResumeData({
        ...resumeData,
        [section]: newArray
      });
    } else {
      setResumeData({
        ...resumeData,
        [section]: value
      });
    }
  };

  const addItem = (section) => {
    if (section === 'experience') {
      setResumeData({
        ...resumeData,
        experience: [
          ...resumeData.experience,
          {
            title: '',
            company: '',
            location: '',
            startDate: '',
            endDate: '',
            current: false,
            description: ''
          }
        ]
      });
    } else if (section === 'education') {
      setResumeData({
        ...resumeData,
        education: [
          ...resumeData.education,
          {
            degree: '',
            school: '',
            location: '',
            startDate: '',
            endDate: '',
            description: ''
          }
        ]
      });
    } else if (section === 'projects') {
      setResumeData({
        ...resumeData,
        projects: [
          ...resumeData.projects,
          {
            title: '',
            description: '',
            link: '',
            technologies: ''
          }
        ]
      });
    } else if (['skills', 'certifications', 'languages'].includes(section)) {
      setResumeData({
        ...resumeData,
        [section]: [...resumeData[section], '']
      });
    }
  };

  const removeItem = (section, index) => {
    const newArray = [...resumeData[section]];
    newArray.splice(index, 1);
    setResumeData({
      ...resumeData,
      [section]: newArray
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Save resume data to backend
    try {
      // API call to save resume would go here
      console.log('Resume data saved:', resumeData);
      router.push('/dashboard');
    } catch (error) {
      console.error('Error saving resume:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Create Resume | AI Resume Builder</title>
        <meta name="description" content="Create your professional resume" />
      </Head>

      {/* Navigation tabs */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Create Your Resume</h1>
              {template && (
                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {template} template
                </span>
              )}
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('content')}
                className={`px-3 py-2 text-sm font-medium rounded-md ${activeTab === 'content' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Content Editor
              </button>
              <button
                onClick={() => setActiveTab('design')}
                className={`px-3 py-2 text-sm font-medium rounded-md ${activeTab === 'design' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Design
              </button>
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-2 text-sm font-medium rounded-md ${activeTab === 'preview' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Preview
              </button>
              <button
                onClick={() => setShowGuidance(!showGuidance)}
                className={`px-3 py-2 text-sm font-medium rounded-md ${showGuidance ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Guidance
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 relative">
        <div className="flex space-x-6">
          <div className={`flex-1 ${showGuidance ? 'w-2/3' : 'w-full'}`}>
            {activeTab === 'content' && (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        value={resumeData.personalInfo.name}
                        onChange={(e) => handleInputChange('personalInfo', null, 'name', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={resumeData.personalInfo.email}
                        onChange={(e) => handleInputChange('personalInfo', null, 'email', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        value={resumeData.personalInfo.phone}
                        onChange={(e) => handleInputChange('personalInfo', null, 'phone', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                      <input
                        type="text"
                        id="address"
                        value={resumeData.personalInfo.address}
                        onChange={(e) => handleInputChange('personalInfo', null, 'address', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">LinkedIn</label>
                      <input
                        type="text"
                        id="linkedin"
                        value={resumeData.personalInfo.linkedin}
                        onChange={(e) => handleInputChange('personalInfo', null, 'linkedin', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
                      <input
                        type="text"
                        id="website"
                        value={resumeData.personalInfo.website}
                        onChange={(e) => handleInputChange('personalInfo', null, 'website', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">Professional Summary</h2>
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentSection('summary');
                        generateWithAI('summary');
                      }}
                      disabled={isGenerating}
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isGenerating && generationTarget === 'summary' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Generating...
                        </>
                      ) : (
                        <>
                          <BsMagic className="mr-2" />
                          Generate with AI
                        </>
                      )}
                    </button>
                  </div>
                  <div className="relative">
                    <textarea
                      value={resumeData.summary}
                      onChange={(e) => handleInputChange('summary', null, null, e.target.value)}
                      rows={4}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Write a compelling summary of your professional background and key strengths..."
                      onFocus={() => setCurrentSection('summary')}
                    />
                    {showGuidance && currentSection === 'summary' && (
                      <div className="absolute top-2 right-2 bg-blue-50 text-blue-800 text-xs rounded px-2 py-1">
                        <span className="font-medium">Pro tip:</span> Keep your summary concise (3-4 sentences) and impactful.
                      </div>
                    )}
                  </div>
                </div>

                {/* Work Experience */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">Work Experience</h2>
                    <button
                      type="button"
                      onClick={() => addItem('experience')}
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <FiPlus className="mr-1" /> Add Experience
                    </button>
                  </div>
                  
                  {resumeData.experience.map((exp, index) => (
                    <div key={index} className="mb-6 p-4 border border-gray-200 rounded-md">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-medium text-gray-900">Position {index + 1}</h3>
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => removeItem('experience', index)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <FiTrash2 />
                          </button>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Job Title</label>
                          <input
                            type="text"
                            value={exp.title}
                            onChange={(e) => handleInputChange('experience', index, 'title', e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Company</label>
                          <input
                            type="text"
                            value={exp.company}
                            onChange={(e) => handleInputChange('experience', index, 'company', e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Location</label>
                          <input
                            type="text"
                            value={exp.location}
                            onChange={(e) => handleInputChange('experience', index, 'location', e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Start Date</label>
                            <input
                              type="month"
                              value={exp.startDate}
                              onChange={(e) => handleInputChange('experience', index, 'startDate', e.target.value)}
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">End Date</label>
                            <input
                              type="month"
                              value={exp.endDate}
                              onChange={(e) => handleInputChange('experience', index, 'endDate', e.target.value)}
                              disabled={exp.current}
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                            />
                          </div>
                        </div>
                        <div className="md:col-span-2">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id={`current-${index}`}
                              checked={exp.current}
                              onChange={(e) => handleInputChange('experience', index, 'current', e.target.checked)}
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor={`current-${index}`} className="ml-2 block text-sm text-gray-700">
                              I currently work here
                            </label>
                          </div>
                        </div>
                        <div className="md:col-span-2">
                          <div className="flex justify-between items-center">
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <button
                              type="button"
                              onClick={() => {
                                setCurrentSection(index);
                                generateWithAI('experience');
                              }}
                              disabled={isGenerating || !exp.title || !exp.company}
                              className="inline-flex items-center px-2 py-1 text-xs font-medium rounded text-blue-700 bg-blue-50 hover:bg-blue-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {isGenerating && generationTarget === 'experience' && currentSection === index ? (
                                <>
                                  <svg className="animate-spin -ml-1 mr-1 h-3 w-3 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                  Generating...
                                </>
                              ) : (
                                <>
                                  <BsMagic className="mr-1" />
                                  Generate with AI
                                </>
                              )}
                            </button>
                          </div>
                          <textarea
                            value={exp.description}
                            onChange={(e) => handleInputChange('experience', index, 'description', e.target.value)}
                            rows={3}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Describe your responsibilities and achievements..."
                            onFocus={() => setCurrentSection(index)}
                          />
                          {showGuidance && currentSection === index && (
                            <div className="mt-1 text-xs text-gray-500">
                              <span className="font-medium">Pro tip:</span> Use bullet points starting with action verbs. Include metrics where possible.
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save Resume
                  </button>
                </div>
              </form>
            )}
            
            {activeTab === 'design' && (
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Design Options</h2>
                <p className="text-gray-600">Customize the look and feel of your resume.</p>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-md p-4 cursor-pointer hover:border-blue-500 transition-colors">
                    <div className="h-40 bg-blue-50 flex items-center justify-center mb-2">
                      <span className="text-blue-600 font-medium">Modern</span>
                    </div>
                    <p className="text-sm text-gray-600">Clean, modern design with a sidebar</p>
                  </div>
                  <div className="border border-gray-200 rounded-md p-4 cursor-pointer hover:border-blue-500 transition-colors">
                    <div className="h-40 bg-gray-50 flex items-center justify-center mb-2">
                      <span className="text-gray-600 font-medium">Professional</span>
                    </div>
                    <p className="text-sm text-gray-600">Traditional layout for corporate roles</p>
                  </div>
                  <div className="border border-gray-200 rounded-md p-4 cursor-pointer hover:border-blue-500 transition-colors">
                    <div className="h-40 bg-purple-50 flex items-center justify-center mb-2">
                      <span className="text-purple-600 font-medium">Creative</span>
                    </div>
                    <p className="text-sm text-gray-600">Bold design for creative professionals</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'preview' && (
              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Resume Preview</h2>
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Export PDF
                  </button>
                </div>
                <div className="border border-gray-200 rounded-md p-8 min-h-[800px] bg-white">
                  <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">{resumeData.personalInfo.name || 'Your Name'}</h1>
                    <div className="flex justify-center space-x-4 text-sm text-gray-600 mt-2">
                      {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email}</span>}
                      {resumeData.personalInfo.phone && <span>{resumeData.personalInfo.phone}</span>}
                      {resumeData.personalInfo.location && <span>{resumeData.personalInfo.location}</span>}
                    </div>
                  </div>
                  
                  {resumeData.summary && (
                    <div className="mb-6">
                      <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-2">Professional Summary</h2>
                      <p className="text-gray-700">{resumeData.summary}</p>
                    </div>
                  )}
                  
                  {resumeData.experience.length > 0 && resumeData.experience[0].title && (
                    <div className="mb-6">
                      <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-2">Experience</h2>
                      {resumeData.experience.map((exp, index) => (
                        <div key={index} className="mb-4">
                          <div className="flex justify-between">
                            <h3 className="font-medium text-gray-900">{exp.title}</h3>
                            <span className="text-gray-600 text-sm">
                              {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                              {' - '}
                              {exp.current ? 'Present' : (exp.endDate && new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }))}
                            </span>
                          </div>
                          <p className="text-gray-700">{exp.company}{exp.location && `, ${exp.location}`}</p>
                          <div className="mt-2 text-gray-600 whitespace-pre-line">{exp.description}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {/* Guidance Panel */}
          {showGuidance && (
            <div className="w-1/3 bg-white shadow-md rounded-lg p-6 sticky top-24 h-fit max-h-[calc(100vh-120px)] overflow-y-auto">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Guidance</h3>
              
              {currentSection === 'summary' && (
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-800">Professional Summary Tips</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    <li>Keep it concise - 3-4 sentences is ideal</li>
                    <li>Highlight your most relevant skills and experiences</li>
                    <li>Include your years of experience and key achievements</li>
                    <li>Tailor it to the job you're applying for</li>
                    <li>Use strong action verbs and industry keywords</li>
                  </ul>
                </div>
              )}
              
              {typeof currentSection === 'number' && (
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-800">Work Experience Tips</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    <li>Use bullet points to highlight achievements</li>
                    <li>Start each bullet with a strong action verb</li>
                    <li>Include metrics and specific results when possible</li>
                    <li>Focus on accomplishments rather than responsibilities</li>
                    <li>Keep descriptions concise and impactful</li>
                  </ul>
                  <div className="bg-yellow-50 p-3 rounded-md">
                    <h5 className="font-medium text-yellow-800 text-sm">Example Action Verbs</h5>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {['Achieved', 'Implemented', 'Developed', 'Led', 'Increased', 'Reduced', 'Managed', 'Created', 'Designed', 'Improved'].map((verb) => (
                        <span key={verb} className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">{verb}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {!currentSection && (
                <div className="text-sm text-gray-600">
                  <p className="mb-3">Select a section to see specific guidance and tips.</p>
                  <p>Use the "Generate with AI" buttons to quickly create professional content for your resume.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
