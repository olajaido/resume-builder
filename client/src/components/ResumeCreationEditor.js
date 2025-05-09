import { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

const ResumeCreationEditor = ({ resumeData, onChange }) => {
  const [activeTab, setActiveTab] = useState('summary');

  const handleSummaryChange = (e) => {
    onChange({ ...resumeData, summary: e.target.value });
  };

  // Experience handlers
  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...resumeData.experience];
    updatedExperience[index] = { ...updatedExperience[index], [field]: value };
    onChange({ ...resumeData, experience: updatedExperience });
  };

  const handleAddExperience = () => {
    const newExperience = {
      company: '',
      title: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      achievements: []
    };
    onChange({ ...resumeData, experience: [...resumeData.experience, newExperience] });
  };

  const handleRemoveExperience = (index) => {
    onChange({
      ...resumeData,
      experience: resumeData.experience.filter((_, i) => i !== index)
    });
  };

  // Education handlers
  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation[index] = { ...updatedEducation[index], [field]: value };
    onChange({ ...resumeData, education: updatedEducation });
  };

  const handleAddEducation = () => {
    const newEducation = {
      school: '',
      degree: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    };
    onChange({ ...resumeData, education: [...resumeData.education, newEducation] });
  };

  const handleRemoveEducation = (index) => {
    onChange({
      ...resumeData,
      education: resumeData.education.filter((_, i) => i !== index)
    });
  };

  // Skills handlers
  const handleSkillsChange = (e) => {
    const skills = e.target.value.split(',').map(skill => skill.trim());
    onChange({ ...resumeData, skills });
  };

  // Additional Skills handlers
  const handleAdditionalSkillsChange = (e) => {
    const additionalSkills = e.target.value.split(',').map(skill => skill.trim());
    onChange({ ...resumeData, additionalSkills });
  };

  // Projects handlers
  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...resumeData.projects];
    updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    onChange({ ...resumeData, projects: updatedProjects });
  };

  const handleAddProject = () => {
    const newProject = {
      name: '',
      description: '',
      technologies: '',
      link: '',
      startDate: '',
      endDate: ''
    };
    onChange({ ...resumeData, projects: [...resumeData.projects, newProject] });
  };

  const handleRemoveProject = (index) => {
    onChange({
      ...resumeData,
      projects: resumeData.projects.filter((_, i) => i !== index)
    });
  };

  // Certifications handlers
  const handleCertificationsChange = (e) => {
    const certifications = e.target.value.split(',').map(cert => cert.trim());
    onChange({ ...resumeData, certifications });
  };

  return (
    <div className="mt-6">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {['summary', 'experience', 'education', 'skills', 'projects', 'certifications'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      <div className="py-6">
        {/* Summary Section */}
        {activeTab === 'summary' && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Professional Summary</h3>
            <textarea
              value={resumeData.summary || ''}
              onChange={handleSummaryChange}
              rows={6}
              className="input w-full"
              placeholder="Write a brief summary of your professional background and key qualifications..."
            />
          </div>
        )}

        {/* Experience Section */}
        {activeTab === 'experience' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Work Experience</h3>
              <button
                type="button"
                onClick={handleAddExperience}
                className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                <FaPlus className="mr-1" /> Add Experience
              </button>
            </div>
            
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-6 p-4 border rounded-lg bg-gray-50">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">Experience #{index + 1}</h4>
                  <button
                    type="button"
                    onClick={() => handleRemoveExperience(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </div>
                
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
                      Job Title
                    </label>
                    <input
                      type="text"
                      value={exp.title || ''}
                      onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                      className="input"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      value={exp.location || ''}
                      onChange={(e) => handleExperienceChange(index, 'location', e.target.value)}
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
                        value={exp.startDate || ''}
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
                        value={exp.endDate || ''}
                        onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                        className="input"
                        disabled={exp.current}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={exp.current || false}
                      onChange={(e) => handleExperienceChange(index, 'current', e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">I currently work here</span>
                  </label>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={exp.description || ''}
                    onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                    rows={4}
                    className="input w-full"
                    placeholder="Describe your responsibilities and achievements..."
                  />
                </div>
              </div>
            ))}
            
            {resumeData.experience.length === 0 && (
              <p className="text-gray-500 text-center py-4">No experience entries yet. Click "Add Experience" to add your work history.</p>
            )}
          </div>
        )}

        {/* Education Section */}
        {activeTab === 'education' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Education</h3>
              <button
                type="button"
                onClick={handleAddEducation}
                className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                <FaPlus className="mr-1" /> Add Education
              </button>
            </div>
            
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-6 p-4 border rounded-lg bg-gray-50">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">Education #{index + 1}</h4>
                  <button
                    type="button"
                    onClick={() => handleRemoveEducation(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      School
                    </label>
                    <input
                      type="text"
                      value={edu.school || ''}
                      onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
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
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      value={edu.location || ''}
                      onChange={(e) => handleEducationChange(index, 'location', e.target.value)}
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
                        value={edu.startDate || ''}
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
                        value={edu.endDate || ''}
                        onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
                        className="input"
                        disabled={edu.current}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={edu.current || false}
                      onChange={(e) => handleEducationChange(index, 'current', e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">I am currently studying here</span>
                  </label>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={edu.description || ''}
                    onChange={(e) => handleEducationChange(index, 'description', e.target.value)}
                    rows={3}
                    className="input w-full"
                    placeholder="Additional details about your education..."
                  />
                </div>
              </div>
            ))}
            
            {resumeData.education.length === 0 && (
              <p className="text-gray-500 text-center py-4">No education entries yet. Click "Add Education" to add your educational background.</p>
            )}
          </div>
        )}

        {/* Skills Section */}
        {activeTab === 'skills' && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Skills</h3>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Technical Skills
              </label>
              <textarea
                value={resumeData.skills ? resumeData.skills.join(', ') : ''}
                onChange={handleSkillsChange}
                rows={4}
                className="input w-full"
                placeholder="Enter skills separated by commas (e.g., JavaScript, React, Node.js)"
              />
              <p className="mt-1 text-sm text-gray-500">
                Enter your technical skills separated by commas.
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Skills
              </label>
              <textarea
                value={resumeData.additionalSkills ? resumeData.additionalSkills.join(', ') : ''}
                onChange={handleAdditionalSkillsChange}
                rows={4}
                className="input w-full"
                placeholder="Enter additional skills separated by commas (e.g., Project Management, Team Leadership)"
              />
              <p className="mt-1 text-sm text-gray-500">
                Enter your soft skills, methodologies, or other relevant skills separated by commas.
              </p>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeTab === 'projects' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Projects</h3>
              <button
                type="button"
                onClick={handleAddProject}
                className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                <FaPlus className="mr-1" /> Add Project
              </button>
            </div>
            
            {resumeData.projects.map((project, index) => (
              <div key={index} className="mb-6 p-4 border rounded-lg bg-gray-50">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">Project #{index + 1}</h4>
                  <button
                    type="button"
                    onClick={() => handleRemoveProject(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Project Name
                    </label>
                    <input
                      type="text"
                      value={project.name || ''}
                      onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Project Link
                    </label>
                    <input
                      type="url"
                      value={project.link || ''}
                      onChange={(e) => handleProjectChange(index, 'link', e.target.value)}
                      className="input"
                      placeholder="https://..."
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Technologies Used
                  </label>
                  <input
                    type="text"
                    value={project.technologies || ''}
                    onChange={(e) => handleProjectChange(index, 'technologies', e.target.value)}
                    className="input w-full"
                    placeholder="e.g., React, Node.js, MongoDB"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Description
                  </label>
                  <textarea
                    value={project.description || ''}
                    onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                    rows={3}
                    className="input w-full"
                    placeholder="Describe the project, your role, and achievements..."
                  />
                </div>
              </div>
            ))}
            
            {resumeData.projects.length === 0 && (
              <p className="text-gray-500 text-center py-4">No projects yet. Click "Add Project" to showcase your work.</p>
            )}
          </div>
        )}

        {/* Certifications Section */}
        {activeTab === 'certifications' && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Certifications</h3>
            <textarea
              value={resumeData.certifications ? resumeData.certifications.join(', ') : ''}
              onChange={handleCertificationsChange}
              rows={4}
              className="input w-full"
              placeholder="Enter certifications separated by commas (e.g., AWS Certified Solutions Architect, Google Cloud Professional)"
            />
            <p className="mt-1 text-sm text-gray-500">
              Enter your certifications and credentials separated by commas.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeCreationEditor;
