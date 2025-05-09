import React from 'react';

/**
 * Component for selecting experience level when creating a resume
 * This allows users to choose their experience level to get appropriate pre-filled content
 */
const ExperienceLevelSelector = ({ selectedLevel, onChange }) => {
  const experienceLevels = [
    { id: 'junior', name: 'Junior (0-2 years)', description: 'Entry-level positions with basic skills and limited professional experience' },
    { id: 'mid', name: 'Mid-Level (3-5 years)', description: 'Intermediate positions with solid skills and several years of experience' },
    { id: 'senior', name: 'Senior (6-8 years)', description: 'Advanced positions with extensive experience and deep technical expertise' },
    { id: 'lead', name: 'Lead/Manager (8+ years)', description: 'Leadership positions with team management responsibilities and strategic vision' }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Select Your Experience Level</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experienceLevels.map((level) => (
          <div
            key={level.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all ${
              selectedLevel === level.id
                ? 'border-blue-500 bg-blue-50 shadow-md'
                : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
            }`}
            onClick={() => onChange(level.id)}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                <div
                  className={`w-5 h-5 rounded-full border ${
                    selectedLevel === level.id
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  } flex items-center justify-center`}
                >
                  {selectedLevel === level.id && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <div className="ml-3">
                <h3 className="font-medium">{level.name}</h3>
                <p className="text-sm text-gray-500">{level.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceLevelSelector;
