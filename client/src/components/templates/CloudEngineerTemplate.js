import React from 'react';

/**
 * Cloud Engineer Resume Template
 * A specialized design for cloud engineers highlighting technical skills and cloud certifications
 */
const CloudEngineerTemplate = ({ resume }) => {
  // Helper function to format dates
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="bg-white shadow-lg max-w-4xl mx-auto font-sans">
      {/* Header with cloud-themed styling */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight">{resume.personalInfo?.name}</h1>
          {resume.personalInfo?.title && (
            <p className="text-xl text-blue-100 mt-2 font-light">{resume.personalInfo.title}</p>
          )}
          
          <div className="mt-6 flex flex-wrap text-sm">
            {resume.personalInfo?.email && (
              <div className="mr-6 mb-3 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>{resume.personalInfo.email}</span>
              </div>
            )}
            {resume.personalInfo?.phone && (
              <div className="mr-6 mb-3 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>{resume.personalInfo.phone}</span>
              </div>
            )}
            {resume.personalInfo?.address && (
              <div className="mr-6 mb-3 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{resume.personalInfo.address}</span>
              </div>
            )}
            {resume.personalInfo?.linkedin && (
              <div className="mr-6 mb-3 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-1-.02-2.285-1.39-2.285-1.39 0-1.6 1.087-1.6 2.21v4.253h-2.667V8.5h2.56v1.175h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v3.958zM5.5 7.325a1.55 1.55 0 11-.003-3.1 1.55 1.55 0 01.003 3.1zm1.333 9.013H4.167V8.5h2.666v7.838zM17.5 2h-15A2.5 2.5 0 000 4.5v15A2.5 2.5 0 002.5 22h15a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0017.5 2z" clipRule="evenodd" />
                </svg>
                <span>{resume.personalInfo.linkedin}</span>
              </div>
            )}
            {resume.personalInfo?.github && (
              <div className="mr-6 mb-3 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>{resume.personalInfo.github}</span>
              </div>
            )}
            {resume.personalInfo?.website && (
              <div className="mr-6 mb-3 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M10 4a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 4z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M10 10a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75A.75.75 0 0110 10z" clipRule="evenodd" />
                </svg>
                <span>{resume.personalInfo.website}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto p-8">
        {/* Technical Summary with cloud icon */}
        {resume.summary && (
          <div className="mb-10 relative">
            <div className="absolute top-0 left-0 w-16 h-1 bg-blue-600"></div>
            <h2 className="text-2xl font-bold text-blue-900 pt-4 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
              </svg>
              Technical Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{resume.summary}</p>
          </div>
        )}

        {/* Cloud Skills & Technologies - Highlighted section */}
        {resume.skills && resume.skills.length > 0 && (
          <div className="mb-10 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              Cloud Skills & Technologies
            </h2>
            <div className="flex flex-wrap">
              {resume.skills.map((skill, index) => (
                <span key={index} className="mr-2 mb-2 px-4 py-2 bg-white text-blue-800 border border-blue-200 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Professional Experience */}
        {resume.experience && resume.experience.length > 0 && (
          <div className="mb-10 relative">
            <div className="absolute top-0 left-0 w-16 h-1 bg-blue-600"></div>
            <h2 className="text-2xl font-bold text-blue-900 pt-4 mb-4">Professional Experience</h2>
            <div className="space-y-8">
              {resume.experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-200 pl-4 pb-2">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <h3 className="font-bold text-gray-900 text-xl">{exp.company}</h3>
                    <span className="text-blue-600 font-medium">
                      {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                    </span>
                  </div>
                  <p className="text-lg font-medium text-gray-700 mb-2">{exp.title}{exp.location ? ` | ${exp.location}` : ''}</p>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  
                  {/* Highlight cloud-specific achievements if they exist */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mt-2">
                      <p className="font-medium text-blue-800 mb-1">Key Achievements:</p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Section - Especially relevant for cloud engineers */}
        {resume.projects && resume.projects.length > 0 && (
          <div className="mb-10 relative">
            <div className="absolute top-0 left-0 w-16 h-1 bg-blue-600"></div>
            <h2 className="text-2xl font-bold text-blue-900 pt-4 mb-4">Cloud Projects</h2>
            <div className="space-y-6">
              {resume.projects.map((project, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900">{project.name}</h3>
                  <p className="text-blue-700 font-medium mb-2">{project.technologies}</p>
                  <p className="text-gray-600">{project.description}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-2 inline-block">
                      View Project
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {resume.education && resume.education.length > 0 && (
          <div className="mb-10 relative">
            <div className="absolute top-0 left-0 w-16 h-1 bg-blue-600"></div>
            <h2 className="text-2xl font-bold text-blue-900 pt-4 mb-4">Education</h2>
            <div className="space-y-6">
              {resume.education.map((edu, index) => (
                <div key={index}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                    <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                    <span className="text-blue-600 font-medium">
                      {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium">{edu.school}{edu.location ? `, ${edu.location}` : ''}</p>
                  {edu.description && <p className="text-gray-600 mt-1">{edu.description}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Certifications - Highlighted for cloud engineers */}
          {resume.certifications && resume.certifications.length > 0 && (
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Cloud Certifications
              </h2>
              <ul className="space-y-2">
                {resume.certifications.map((cert, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Additional Technical Skills */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-12 h-1 bg-blue-600"></div>
            <h2 className="text-xl font-bold text-blue-900 pt-4 mb-4">Additional Skills</h2>
            <div className="grid grid-cols-2 gap-2">
              {resume.additionalSkills && resume.additionalSkills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer with subtle branding */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>Cloud Engineer Resume - {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default CloudEngineerTemplate;
