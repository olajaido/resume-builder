import React from 'react';

/**
 * Minimal Resume Template
 * A minimalist design focusing on content with subtle styling
 */
const MinimalTemplate = ({ resume }) => {
  // Helper function to format dates
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="bg-white shadow-lg max-w-4xl mx-auto font-sans p-8">
      {/* Header - Simple and clean */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-light text-gray-900 tracking-wide">{resume.personalInfo?.name}</h1>
        {resume.personalInfo?.title && (
          <p className="text-lg text-gray-600 mt-1">{resume.personalInfo.title}</p>
        )}
        
        <div className="flex flex-wrap justify-center mt-3 text-gray-500 text-sm">
          {resume.personalInfo?.email && (
            <div className="mx-3 mb-2">
              <span>{resume.personalInfo.email}</span>
            </div>
          )}
          {resume.personalInfo?.phone && (
            <div className="mx-3 mb-2">
              <span>{resume.personalInfo.phone}</span>
            </div>
          )}
          {resume.personalInfo?.address && (
            <div className="mx-3 mb-2">
              <span>{resume.personalInfo.address}</span>
            </div>
          )}
          {resume.personalInfo?.website && (
            <div className="mx-3 mb-2">
              <span>{resume.personalInfo.website}</span>
            </div>
          )}
          {resume.personalInfo?.linkedin && (
            <div className="mx-3 mb-2">
              <span>{resume.personalInfo.linkedin}</span>
            </div>
          )}
        </div>
      </div>

      {/* Horizontal line separator */}
      <div className="border-t border-gray-200 my-6"></div>

      {/* Summary */}
      {resume.summary && (
        <div className="mb-8">
          <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-3">Profile</h2>
          <p className="text-gray-700 leading-relaxed">{resume.summary}</p>
        </div>
      )}

      {/* Experience */}
      {resume.experience && resume.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-4">Experience</h2>
          <div className="space-y-6">
            {resume.experience.map((exp, index) => (
              <div key={index}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                  <h3 className="font-medium text-gray-900">{exp.title}</h3>
                  <span className="text-gray-500 text-sm">
                    {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                  </span>
                </div>
                <p className="text-gray-600 italic">{exp.company}{exp.location ? `, ${exp.location}` : ''}</p>
                <p className="text-gray-700 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {resume.education && resume.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-4">Education</h2>
          <div className="space-y-6">
            {resume.education.map((edu, index) => (
              <div key={index}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                  <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                  <span className="text-gray-500 text-sm">
                    {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                  </span>
                </div>
                <p className="text-gray-600 italic">{edu.school}{edu.location ? `, ${edu.location}` : ''}</p>
                {edu.description && <p className="text-gray-700 mt-2">{edu.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Two column layout for skills and other sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Skills */}
        {resume.skills && resume.skills.length > 0 && (
          <div>
            <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-3">Skills</h2>
            <div className="flex flex-wrap">
              {resume.skills.map((skill, index) => (
                <span key={index} className="mr-2 mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {resume.languages && resume.languages.length > 0 && (
          <div>
            <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-3">Languages</h2>
            <ul className="space-y-1">
              {resume.languages.map((language, index) => (
                <li key={index} className="text-gray-700">
                  {language.language} - {language.proficiency}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Certifications */}
        {resume.certifications && resume.certifications.length > 0 && (
          <div>
            <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-3">Certifications</h2>
            <ul className="space-y-1">
              {resume.certifications.map((cert, index) => (
                <li key={index} className="text-gray-700">{cert}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer with subtle separator */}
      <div className="border-t border-gray-200 mt-8 pt-4 text-center text-gray-500 text-xs">
        <p>References available upon request</p>
      </div>
    </div>
  );
};

export default MinimalTemplate;
