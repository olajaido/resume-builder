import React, { useState, useEffect } from 'react';
import { resumeTemplateService } from '@/services/api';
import RoleTypeSelector from './RoleTypeSelector';
import ExperienceLevelSelector from './ExperienceLevelSelector';

/**
 * Component for selecting role-specific resume templates
 * Allows users to select their role and experience level to get pre-filled content
 */
const ResumeTemplateSelector = ({ onTemplateContentSelected, onCancel }) => {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [availableRoles, setAvailableRoles] = useState([]);
  const [availableLevels, setAvailableLevels] = useState({});

  // Fetch available roles and levels on component mount
  useEffect(() => {
    const fetchRolesAndLevels = async () => {
      try {
        setIsLoading(true);
        const response = await resumeTemplateService.getAvailableRolesAndLevels();
        if (response.success) {
          setAvailableRoles(response.data.roles);
          setAvailableLevels(response.data.rolesWithLevels);
        }
      } catch (error) {
        console.error('Error fetching roles and levels:', error);
        setError('Failed to load available roles and experience levels');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRolesAndLevels();
  }, []);

  // Handle role selection
  const handleRoleChange = (role) => {
    setSelectedRole(role);
    // Reset level when role changes
    setSelectedLevel('');
  };

  // Handle experience level selection
  const handleLevelChange = (level) => {
    setSelectedLevel(level);
  };

  // Handle template content selection
  const handleSelectContent = async () => {
    if (!selectedRole || !selectedLevel) {
      setError('Please select both a role and experience level');
      return;
    }

    try {
      setIsLoading(true);
      const response = await resumeTemplateService.getResumeTemplateContent(selectedRole, selectedLevel);
      if (response.success) {
        onTemplateContentSelected(response.data);
      } else {
        setError('Failed to load template content');
      }
    } catch (error) {
      console.error('Error fetching template content:', error);
      setError('Failed to load template content');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Select Resume Template Content</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <RoleTypeSelector selectedRole={selectedRole} onChange={handleRoleChange} />
      
      {selectedRole && (
        <ExperienceLevelSelector selectedLevel={selectedLevel} onChange={handleLevelChange} />
      )}

      <div className="flex justify-end mt-6 space-x-4">
        <button
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={handleSelectContent}
          disabled={!selectedRole || !selectedLevel || isLoading}
          className={`px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white ${
            !selectedRole || !selectedLevel || isLoading
              ? 'bg-blue-300 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isLoading ? 'Loading...' : 'Use This Template'}
        </button>
      </div>
    </div>
  );
};

export default ResumeTemplateSelector;
