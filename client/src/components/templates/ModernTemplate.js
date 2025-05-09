import React from 'react';

/**
 * Modern Resume Template
 * A clean, modern design with a sidebar for skills and contact information
 */
const ModernTemplate = ({ resume }) => {
  // Helper function to format dates
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="bg-white shadow-lg max-w-4xl mx-auto font-sans">
      <div className="flex flex-col md:flex-row">
        {/* Left sidebar */}
        <div className="bg-blue-600 text-white p-6 md:w-1/3">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full bg-white mx-auto mb-4 overflow-hidden">
              {resume.personalInfo?.profileImage ? (
                <img 
                  src={resume.personalInfo.profileImage} 
                  alt={resume.personalInfo.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            <h1 className="text-2xl font-bold text-center">{resume.personalInfo?.name}</h1>
            {resume.personalInfo?.title && (
              <p className="text-blue-200 text-center mt-1">{resume.personalInfo.title}</p>
            )}
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold border-b border-blue-400 pb-2 mb-3">Contact</h2>
            <div className="space-y-2">
              {resume.personalInfo?.email && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-sm">{resume.personalInfo.email}</span>
                </div>
              )}
              {resume.personalInfo?.phone && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm">{resume.personalInfo.phone}</span>
                </div>
              )}
              {resume.personalInfo?.address && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{resume.personalInfo.address}</span>
                </div>
              )}
              {resume.personalInfo?.linkedin && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-1-.02-2.285-1.39-2.285-1.39 0-1.6 1.087-1.6 2.21v4.253h-2.667V8.5h2.56v1.175h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v3.958zM5.5 7.325a1.55 1.55 0 11-.003-3.1 1.55 1.55 0 01.003 3.1zm1.333 9.013H4.167V8.5h2.666v7.838zM17.5 2h-15A2.5 2.5 0 000 4.5v15A2.5 2.5 0 002.5 22h15a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0017.5 2z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{resume.personalInfo.linkedin}</span>
                </div>
              )}
              {resume.personalInfo?.website && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M10 4a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 4z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M10 10a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75A.75.75 0 0110 10z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{resume.personalInfo.website}</span>
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          {resume.skills && resume.skills.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold border-b border-blue-400 pb-2 mb-3">Skills</h2>
              <div className="flex flex-wrap">
                {resume.skills.map((skill, index) => (
                  <span key={index} className="bg-blue-700 rounded-full px-3 py-1 text-sm mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {resume.languages && resume.languages.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold border-b border-blue-400 pb-2 mb-3">Languages</h2>
              <ul className="space-y-1">
                {resume.languages.map((language, index) => (
                  <li key={index} className="text-sm">
                    {language.language} - {language.proficiency}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Main content */}
        <div className="p-6 md:w-2/3">
          {/* Summary */}
          {resume.summary && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-3">
                Professional Summary
              </h2>
              <p className="text-gray-700">{resume.summary}</p>
            </div>
          )}

          {/* Experience */}
          {resume.experience && resume.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-3">
                Work Experience
              </h2>
              <div className="space-y-4">
                {resume.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-4 py-1">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-medium text-gray-800 text-lg">{exp.title}</h3>
                      <span className="text-gray-600 text-sm">
                        {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                      </span>
                    </div>
                    <p className="text-blue-600 font-medium">{exp.company}{exp.location ? `, ${exp.location}` : ''}</p>
                    <p className="text-gray-600 mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {resume.education && resume.education.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-3">
                Education
              </h2>
              <div className="space-y-4">
                {resume.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-4 py-1">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-medium text-gray-800 text-lg">{edu.degree}</h3>
                      <span className="text-gray-600 text-sm">
                        {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                      </span>
                    </div>
                    <p className="text-blue-600 font-medium">{edu.school}{edu.location ? `, ${edu.location}` : ''}</p>
                    {edu.description && <p className="text-gray-600 mt-2">{edu.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {resume.certifications && resume.certifications.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-3">
                Certifications
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                {resume.certifications.map((cert, index) => (
                  <li key={index} className="text-gray-700">{cert}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;
