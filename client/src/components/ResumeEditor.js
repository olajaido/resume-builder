import { useState, useEffect } from 'react';
import { resumeService } from '@/services/api';

const ResumeEditor = ({ resumeId, onSave }) => {
  const [resume, setResume] = useState(null);
  const [activeSection, setActiveSection] = useState('personal');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        setLoading(true);
        const response = await resumeService.getResume(resumeId);
        setResume(response.data);
      } catch (error) {
        console.error('Error fetching resume:', error);
        setError('Failed to load resume. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (resumeId) {
      fetchResume();
    }
  }, [resumeId]);

  const handleSave = async () => {
    try {
      setSaving(true);
      await resumeService.updateResume(resumeId, resume);
      if (onSave) onSave(resume);
    } catch (error) {
      console.error('Error saving resume:', error);
      setError('Failed to save resume. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setResume({
      ...resume,
      personalInfo: {
        ...resume.personalInfo,
        [name]: value,
      },
    });
  };

  const handleAddEducation = () => {
    setResume({
      ...resume,
      education: [
        ...resume.education,
        {
          institution: '',
          degree: '',
          fieldOfStudy: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
    });
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...resume.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value,
    };
    setResume({
      ...resume,
      education: updatedEducation,
    });
  };

  const handleRemoveEducation = (index) => {
    setResume({
      ...resume,
      education: resume.education.filter((_, i) => i !== index),
    });
  };

  const handleAddExperience = () => {
    setResume({
      ...resume,
      experience: [
        ...resume.experience,
        {
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          description: '',
          achievements: [],
        },
      ],
    });
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...resume.experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [field]: value,
    };
    setResume({
      ...resume,
      experience: updatedExperience,
    });
  };

  const handleRemoveExperience = (index) => {
    setResume({
      ...resume,
      experience: resume.experience.filter((_, i) => i !== index),
    });
  };

  const handleSkillsChange = (e) => {
    const skillsText = e.target.value;
    const skillsArray = skillsText.split(',').map(skill => skill.trim()).filter(Boolean);
    setResume({
      ...resume,
      skills: skillsArray,
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4">
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
    );
  }

  if (!resume) {
    return <div>No resume data found.</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4 bg-blue-600 text-white flex justify-between items-center">
        <h2 className="text-xl font-bold">Edit Resume</h2>
        <button
          onClick={handleSave}
          disabled={saving}
          className="btn bg-white text-blue-600 hover:bg-blue-50"
        >
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      <div className="flex border-b">
        <div className="w-1/4 bg-gray-50 p-4 border-r">
          <nav className="space-y-1">
            <button
              className={`w-full text-left px-3 py-2 rounded-md ${activeSection === 'personal' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setActiveSection('personal')}
            >
              Personal Info
            </button>
            <button
              className={`w-full text-left px-3 py-2 rounded-md ${activeSection === 'education' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setActiveSection('education')}
            >
              Education
            </button>
            <button
              className={`w-full text-left px-3 py-2 rounded-md ${activeSection === 'experience' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setActiveSection('experience')}
            >
              Experience
            </button>
            <button
              className={`w-full text-left px-3 py-2 rounded-md ${activeSection === 'skills' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setActiveSection('skills')}
            >
              Skills
            </button>
          </nav>
        </div>

        <div className="w-3/4 p-6">
          {/* Personal Info Section */}
          {activeSection === 'personal' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={resume.personalInfo.name || ''}
                    onChange={handlePersonalInfoChange}
                    className="input"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={resume.personalInfo.email || ''}
                    onChange={handlePersonalInfoChange}
                    className="input"
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
                    value={resume.personalInfo.phone || ''}
                    onChange={handlePersonalInfoChange}
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
                    value={resume.personalInfo.address || ''}
                    onChange={handlePersonalInfoChange}
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
                  rows={4}
                  value={resume.personalInfo.summary || ''}
                  onChange={handlePersonalInfoChange}
                  className="input"
                ></textarea>
              </div>
            </div>
          )}

          {/* Education Section */}
          {activeSection === 'education' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Education</h3>
                <button
                  type="button"
                  onClick={handleAddEducation}
                  className="btn btn-outline text-sm"
                >
                  Add Education
                </button>
              </div>
              
              {resume.education && resume.education.length > 0 ? (
                <div className="space-y-6">
                  {resume.education.map((edu, index) => (
                    <div key={index} className="border rounded-md p-4 relative">
                      <button
                        type="button"
                        onClick={() => handleRemoveEducation(index)}
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Institution
                          </label>
                          <input
                            type="text"
                            value={edu.institution || ''}
                            onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                            className="input"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Degree
                          </label>
                          <input
                            type="text"
                            value={edu.degree || ''}
                            onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                            className="input"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Field of Study
                          </label>
                          <input
                            type="text"
                            value={edu.fieldOfStudy || ''}
                            onChange={(e) => handleEducationChange(index, 'fieldOfStudy', e.target.value)}
                            className="input"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Start Date
                            </label>
                            <input
                              type="date"
                              value={edu.startDate ? new Date(edu.startDate).toISOString().split('T')[0] : ''}
                              onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
                              className="input"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              End Date
                            </label>
                            <input
                              type="date"
                              value={edu.endDate ? new Date(edu.endDate).toISOString().split('T')[0] : ''}
                              onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Description
                        </label>
                        <textarea
                          rows={3}
                          value={edu.description || ''}
                          onChange={(e) => handleEducationChange(index, 'description', e.target.value)}
                          className="input"
                        ></textarea>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-md">
                  <p className="text-gray-500">No education entries yet.</p>
                  <button
                    type="button"
                    onClick={handleAddEducation}
                    className="mt-2 btn btn-outline text-sm"
                  >
                    Add Education
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Experience Section */}
          {activeSection === 'experience' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Experience</h3>
                <button
                  type="button"
                  onClick={handleAddExperience}
                  className="btn btn-outline text-sm"
                >
                  Add Experience
                </button>
              </div>
              
              {resume.experience && resume.experience.length > 0 ? (
                <div className="space-y-6">
                  {resume.experience.map((exp, index) => (
                    <div key={index} className="border rounded-md p-4 relative">
                      <button
                        type="button"
                        onClick={() => handleRemoveExperience(index)}
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Company
                          </label>
                          <input
                            type="text"
                            value={exp.company || ''}
                            onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                            className="input"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Position
                          </label>
                          <input
                            type="text"
                            value={exp.position || ''}
                            onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                            className="input"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Start Date
                            </label>
                            <input
                              type="date"
                              value={exp.startDate ? new Date(exp.startDate).toISOString().split('T')[0] : ''}
                              onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                              className="input"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              End Date
                            </label>
                            <input
                              type="date"
                              value={exp.endDate ? new Date(exp.endDate).toISOString().split('T')[0] : ''}
                              onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Description
                        </label>
                        <textarea
                          rows={3}
                          value={exp.description || ''}
                          onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                          className="input"
                        ></textarea>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-md">
                  <p className="text-gray-500">No experience entries yet.</p>
                  <button
                    type="button"
                    onClick={handleAddExperience}
                    className="mt-2 btn btn-outline text-sm"
                  >
                    Add Experience
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Skills Section */}
          {activeSection === 'skills' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Skills</h3>
              
              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
                  Skills (comma separated)
                </label>
                <textarea
                  id="skills"
                  rows={4}
                  value={resume.skills ? resume.skills.join(', ') : ''}
                  onChange={handleSkillsChange}
                  placeholder="e.g., JavaScript, React, Node.js, Project Management"
                  className="input"
                ></textarea>
                <p className="mt-1 text-sm text-gray-500">
                  Enter your skills separated by commas.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeEditor;
