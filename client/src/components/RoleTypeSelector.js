import React, { useState } from 'react';

/**
 * Component for selecting role type and seniority level when creating a resume
 * This allows users to choose their IT role and experience level to get appropriate pre-filled content
 * and matching templates
 */
const RoleTypeSelector = ({ selectedRole, onChange }) => {
  const [expandedRole, setExpandedRole] = useState(null);
  
  // Cloud Engineer icon
  const cloudIcon = (
    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  );
  
  // Platform Engineer icon
  const platformIcon = (
    <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  );
  
  // DevOps Engineer icon
  const devopsIcon = (
    <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );
  
  // Infrastructure Engineer icon
  const infrastructureIcon = (
    <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  );
  
  // Main role types
  const roleTypes = [
    { 
      id: 'cloudEngineer', 
      name: 'Cloud Engineer', 
      description: 'Focuses on designing, implementing, and managing cloud infrastructure and services',
      icon: cloudIcon,
      seniorityLevels: [
        {
          id: 'cloud-engineer-junior',
          name: 'Junior Cloud Engineer',
          description: 'Entry-level position focusing on cloud fundamentals and basic implementations',
          templateId: 'cloud-engineer-junior'
        },
        {
          id: 'cloud-engineer-mid',
          name: 'Mid-Level Cloud Engineer',
          description: 'Experienced in implementing and managing cloud solutions with several years of experience',
          templateId: 'cloud-engineer-mid'
        },
        {
          id: 'cloud-engineer-senior',
          name: 'Senior Cloud Engineer',
          description: 'Advanced expertise in cloud architecture, strategy, and leading cloud initiatives',
          templateId: 'cloud-engineer-senior'
        }
      ]
    },
    { 
      id: 'platformEngineer', 
      name: 'Platform Engineer', 
      description: 'Builds and maintains the platforms that enable developers to deploy and run applications',
      icon: platformIcon,
      seniorityLevels: [
        {
          id: 'platform-engineer-junior',
          name: 'Junior Platform Engineer',
          description: 'Entry-level position focusing on infrastructure basics and automation fundamentals',
          templateId: 'platform-engineer-junior'
        },
        {
          id: 'platform-engineer-mid',
          name: 'Mid-Level Platform Engineer',
          description: 'Experienced in building and maintaining platform solutions with several years of experience',
          templateId: 'platform-engineer-mid'
        },
        {
          id: 'platform-engineer-senior',
          name: 'Senior Platform Engineer',
          description: 'Advanced expertise in platform architecture, strategy, and leading platform initiatives',
          templateId: 'platform-engineer-senior'
        }
      ]
    },
    { 
      id: 'devopsEngineer', 
      name: 'DevOps Engineer', 
      description: 'Specializes in implementing CI/CD pipelines, automation, and bridging development and operations',
      icon: devopsIcon
    },
    { 
      id: 'infrastructureEngineer', 
      name: 'Infrastructure Engineer', 
      description: 'Designs, builds, and maintains the core infrastructure that supports applications and services',
      icon: infrastructureIcon
    }
  ];

  const handleRoleClick = (roleId) => {
    // If the role has seniority levels, expand it instead of selecting it directly
    const role = roleTypes.find(r => r.id === roleId);
    if (role && role.seniorityLevels) {
      setExpandedRole(expandedRole === roleId ? null : roleId);
    } else {
      // For roles without seniority levels, select them directly
      onChange(roleId);
      setExpandedRole(null);
    }
  };
  
  const handleSeniorityClick = (seniorityId) => {
    onChange(seniorityId);
    setExpandedRole(null);
  };
  
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Select Your Role</h2>
      <div className="grid grid-cols-1 gap-4">
        {roleTypes.map((role) => (
          <div key={role.id} className="border rounded-lg overflow-hidden transition-all">
            <div
              className={`p-4 cursor-pointer transition-all ${
                (selectedRole === role.id || expandedRole === role.id || 
                 (role.seniorityLevels && role.seniorityLevels.some(s => selectedRole === s.id)))
                  ? 'border-l-4 border-l-blue-500 bg-blue-50'
                  : 'border-l-4 border-l-transparent hover:border-l-blue-300 hover:bg-blue-50'
              }`}
              onClick={() => handleRoleClick(role.id)}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {role.icon}
                </div>
                <div className="ml-4 flex-grow">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{role.name}</h3>
                    {role.seniorityLevels && (
                      <svg
                        className={`w-5 h-5 text-blue-500 transition-transform ${expandedRole === role.id ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{role.description}</p>
                </div>
              </div>
            </div>
            
            {/* Seniority levels dropdown */}
            {role.seniorityLevels && expandedRole === role.id && (
              <div className="bg-gray-50 border-t border-gray-200 divide-y divide-gray-200">
                {role.seniorityLevels.map((seniority) => (
                  <div
                    key={seniority.id}
                    className={`p-3 pl-16 cursor-pointer transition-all ${
                      selectedRole === seniority.id
                        ? 'bg-blue-100'
                        : 'hover:bg-blue-50'
                    }`}
                    onClick={() => handleSeniorityClick(seniority.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-800">{seniority.name}</h4>
                        <p className="text-sm text-gray-500">{seniority.description}</p>
                      </div>
                      {selectedRole === seniority.id && (
                        <svg
                          className="w-5 h-5 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleTypeSelector;
