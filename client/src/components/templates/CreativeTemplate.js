import React from 'react';

/**
 * Creative Resume Template
 * A bold design that stands out for creative professionals
 */
const CreativeTemplate = ({ resume }) => {
  // Helper function to format dates
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="bg-white shadow-lg max-w-4xl mx-auto font-sans">
      {/* Header with background color */}
      <div className="bg-purple-700 text-white p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden">
              {resume.personalInfo?.profileImage ? (
                <img 
                  src={resume.personalInfo.profileImage} 
                  alt={resume.personalInfo.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-purple-800 text-white">
                  <span className="text-4xl font-bold">
                    {resume.personalInfo?.name ? resume.personalInfo.name.charAt(0) : 'U'}
                  </span>
                </div>
              )}
            </div>
          </div>
          
          <div className="md:w-2/3 text-center md:text-left md:pl-8">
            <h1 className="text-4xl font-extrabold tracking-tight">{resume.personalInfo?.name}</h1>
            {resume.personalInfo?.title && (
              <p className="text-xl text-purple-200 mt-2">{resume.personalInfo.title}</p>
            )}
            
            <div className="mt-4 space-y-1">
              {resume.personalInfo?.email && (
                <div className="flex items-center justify-center md:justify-start">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>{resume.personalInfo.email}</span>
                </div>
              )}
              {resume.personalInfo?.phone && (
                <div className="flex items-center justify-center md:justify-start">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>{resume.personalInfo.phone}</span>
                </div>
              )}
              {resume.personalInfo?.website && (
                <div className="flex items-center justify-center md:justify-start">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
      </div>

      {/* Main content with grid layout */}
      <div className="p-8">
        {/* Summary with accent border */}
        {resume.summary && (
          <div className="mb-8 border-l-4 border-purple-500 pl-4">
            <h2 className="text-2xl font-bold text-purple-700 mb-3">About Me</h2>
            <p className="text-gray-700 leading-relaxed">{resume.summary}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="md:col-span-2">
            {/* Experience */}
            {resume.experience && resume.experience.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-purple-700 mb-4">Experience</h2>
                <div className="space-y-6">
                  {resume.experience.map((exp, index) => (
                    <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-purple-200 before:rounded">
                      <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-purple-500 -ml-0.5"></div>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                        <h3 className="font-bold text-gray-800 text-lg">{exp.title}</h3>
                        <span className="text-purple-600 font-medium text-sm">
                          {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                        </span>
                      </div>
                      <p className="text-purple-600 font-medium">{exp.company}{exp.location ? `, ${exp.location}` : ''}</p>
                      <p className="text-gray-600 mt-2">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {resume.education && resume.education.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-purple-700 mb-4">Education</h2>
                <div className="space-y-6">
                  {resume.education.map((edu, index) => (
                    <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-purple-200 before:rounded">
                      <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-purple-500 -ml-0.5"></div>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                        <h3 className="font-bold text-gray-800 text-lg">{edu.degree}</h3>
                        <span className="text-purple-600 font-medium text-sm">
                          {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                        </span>
                      </div>
                      <p className="text-purple-600 font-medium">{edu.school}{edu.location ? `, ${edu.location}` : ''}</p>
                      {edu.description && <p className="text-gray-600 mt-2">{edu.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column */}
          <div>
            {/* Skills */}
            {resume.skills && resume.skills.length > 0 && (
              <div className="mb-8 bg-purple-50 p-4 rounded-lg">
                <h2 className="text-2xl font-bold text-purple-700 mb-3">Skills</h2>
                <div className="space-y-2">
                  {resume.skills.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="ml-2 text-gray-700 min-w-[80px]">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Languages */}
            {resume.languages && resume.languages.length > 0 && (
              <div className="mb-8 bg-purple-50 p-4 rounded-lg">
                <h2 className="text-2xl font-bold text-purple-700 mb-3">Languages</h2>
                <div className="space-y-2">
                  {resume.languages.map((language, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-purple-600 h-2.5 rounded-full" 
                          style={{ 
                            width: language.proficiency === 'Native' ? '100%' : 
                                  language.proficiency === 'Fluent' ? '90%' : 
                                  language.proficiency === 'Advanced' ? '75%' : 
                                  language.proficiency === 'Intermediate' ? '50%' : '25%' 
                          }}
                        ></div>
                      </div>
                      <span className="ml-2 text-gray-700 min-w-[80px]">{language.language}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            {resume.certifications && resume.certifications.length > 0 && (
              <div className="bg-purple-50 p-4 rounded-lg">
                <h2 className="text-2xl font-bold text-purple-700 mb-3">Certifications</h2>
                <ul className="space-y-2">
                  {resume.certifications.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeTemplate;
