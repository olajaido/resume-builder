import React from 'react';

/**
 * Executive Resume Template
 * An elegant design for senior professionals and executives
 */
const ExecutiveTemplate = ({ resume }) => {
  // Helper function to format dates
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="bg-white shadow-lg max-w-4xl mx-auto font-serif">
      {/* Header with elegant styling */}
      <div className="bg-indigo-900 text-white p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight">{resume.personalInfo?.name}</h1>
          {resume.personalInfo?.title && (
            <p className="text-xl text-indigo-200 mt-2 font-light">{resume.personalInfo.title}</p>
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

      {/* Main content with elegant spacing and typography */}
      <div className="max-w-3xl mx-auto p-8">
        {/* Executive Summary with decorative border */}
        {resume.summary && (
          <div className="mb-10 relative">
            <div className="absolute top-0 left-0 w-16 h-1 bg-indigo-600"></div>
            <h2 className="text-2xl font-bold text-indigo-900 pt-4 mb-4">Executive Summary</h2>
            <p className="text-gray-700 leading-relaxed text-justify">{resume.summary}</p>
          </div>
        )}

        {/* Professional Experience */}
        {resume.experience && resume.experience.length > 0 && (
          <div className="mb-10 relative">
            <div className="absolute top-0 left-0 w-16 h-1 bg-indigo-600"></div>
            <h2 className="text-2xl font-bold text-indigo-900 pt-4 mb-4">Professional Experience</h2>
            <div className="space-y-8">
              {resume.experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <h3 className="font-bold text-gray-900 text-xl">{exp.company}</h3>
                    <span className="text-indigo-600 font-medium">
                      {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                    </span>
                  </div>
                  <p className="text-lg font-medium text-gray-700 mb-2">{exp.title}{exp.location ? ` | ${exp.location}` : ''}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {resume.education && resume.education.length > 0 && (
          <div className="mb-10 relative">
            <div className="absolute top-0 left-0 w-16 h-1 bg-indigo-600"></div>
            <h2 className="text-2xl font-bold text-indigo-900 pt-4 mb-4">Education</h2>
            <div className="space-y-6">
              {resume.education.map((edu, index) => (
                <div key={index}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                    <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                    <span className="text-indigo-600 font-medium">
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
          {/* Core Competencies */}
          {resume.skills && resume.skills.length > 0 && (
            <div className="relative">
              <div className="absolute top-0 left-0 w-12 h-1 bg-indigo-600"></div>
              <h2 className="text-xl font-bold text-indigo-900 pt-4 mb-4">Core Competencies</h2>
              <div className="flex flex-wrap">
                {resume.skills.map((skill, index) => (
                  <span key={index} className="mr-2 mb-2 px-4 py-2 bg-indigo-50 text-indigo-800 border border-indigo-200 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Certifications & Affiliations */}
          {resume.certifications && resume.certifications.length > 0 && (
            <div className="relative">
              <div className="absolute top-0 left-0 w-12 h-1 bg-indigo-600"></div>
              <h2 className="text-xl font-bold text-indigo-900 pt-4 mb-4">Certifications & Affiliations</h2>
              <ul className="space-y-2">
                {resume.certifications.map((cert, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Languages */}
          {resume.languages && resume.languages.length > 0 && (
            <div className="relative">
              <div className="absolute top-0 left-0 w-12 h-1 bg-indigo-600"></div>
              <h2 className="text-xl font-bold text-indigo-900 pt-4 mb-4">Languages</h2>
              <ul className="space-y-2">
                {resume.languages.map((language, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    {language.language} - {language.proficiency}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer with subtle branding */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>Confidential - {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveTemplate;
