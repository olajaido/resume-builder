import React from 'react';

/**
 * Template Thumbnail Component
 * Creates a visual representation of a resume template for the selection page
 */
const TemplateThumbnail = ({ templateId, color, name }) => {
  // Map template IDs to their color schemes
  const colorSchemes = {
    modern: {
      primary: 'bg-blue-600',
      secondary: 'bg-blue-100',
      text: 'text-blue-800',
      accent: 'border-blue-500'
    },
    professional: {
      primary: 'bg-gray-800',
      secondary: 'bg-gray-100',
      text: 'text-gray-800',
      accent: 'border-gray-500'
    },
    creative: {
      primary: 'bg-purple-700',
      secondary: 'bg-purple-100',
      text: 'text-purple-800',
      accent: 'border-purple-500'
    },
    minimal: {
      primary: 'bg-green-600',
      secondary: 'bg-green-50',
      text: 'text-green-800',
      accent: 'border-green-500'
    },
    executive: {
      primary: 'bg-indigo-900',
      secondary: 'bg-indigo-50',
      text: 'text-indigo-800',
      accent: 'border-indigo-500'
    }
  };

  const scheme = colorSchemes[templateId] || colorSchemes.modern;

  // Render different thumbnail layouts based on template ID
  const renderThumbnail = () => {
    switch (templateId) {
      case 'modern':
        return (
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className={`${scheme.primary} text-white p-3 flex-shrink-0`}>
              <div className="h-3 w-24 bg-white rounded-sm mb-2"></div>
              <div className="flex">
                <div className="h-2 w-16 bg-white bg-opacity-70 rounded-sm mr-2"></div>
                <div className="h-2 w-16 bg-white bg-opacity-70 rounded-sm"></div>
              </div>
            </div>
            {/* Content */}
            <div className="flex flex-1">
              {/* Sidebar */}
              <div className={`${scheme.secondary} p-2 w-1/3`}>
                <div className="h-2 w-12 bg-gray-400 rounded-sm mb-2"></div>
                <div className="h-2 w-16 bg-gray-400 rounded-sm mb-4"></div>
                <div className="flex flex-wrap">
                  <div className={`h-2 w-8 ${scheme.primary} rounded-full m-1`}></div>
                  <div className={`h-2 w-10 ${scheme.primary} rounded-full m-1`}></div>
                  <div className={`h-2 w-6 ${scheme.primary} rounded-full m-1`}></div>
                </div>
              </div>
              {/* Main content */}
              <div className="p-2 w-2/3">
                <div className="h-2 w-20 bg-gray-400 rounded-sm mb-2"></div>
                <div className="h-2 w-full bg-gray-200 rounded-sm mb-3"></div>
                <div className="h-2 w-full bg-gray-200 rounded-sm mb-3"></div>
                <div className="h-2 w-3/4 bg-gray-200 rounded-sm mb-4"></div>
                
                <div className="h-2 w-20 bg-gray-400 rounded-sm mb-2"></div>
                <div className="h-2 w-full bg-gray-200 rounded-sm mb-1"></div>
                <div className="h-2 w-full bg-gray-200 rounded-sm mb-1"></div>
                <div className="h-2 w-3/4 bg-gray-200 rounded-sm"></div>
              </div>
            </div>
          </div>
        );
      
      case 'professional':
        return (
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="text-center p-3 border-b border-gray-300">
              <div className="h-3 w-32 bg-gray-700 rounded-sm mx-auto mb-2"></div>
              <div className="flex justify-center">
                <div className="h-2 w-12 bg-gray-400 rounded-sm mx-1"></div>
                <div className="h-2 w-12 bg-gray-400 rounded-sm mx-1"></div>
                <div className="h-2 w-12 bg-gray-400 rounded-sm mx-1"></div>
              </div>
            </div>
            {/* Content */}
            <div className="p-3">
              <div className="h-2 w-24 bg-gray-700 rounded-sm mb-2"></div>
              <div className="h-2 w-full bg-gray-200 rounded-sm mb-1"></div>
              <div className="h-2 w-full bg-gray-200 rounded-sm mb-1"></div>
              <div className="h-2 w-3/4 bg-gray-200 rounded-sm mb-3"></div>
              
              <div className="h-2 w-24 bg-gray-700 rounded-sm mb-2"></div>
              <div className="flex justify-between mb-1">
                <div className="h-2 w-20 bg-gray-500 rounded-sm"></div>
                <div className="h-2 w-16 bg-gray-300 rounded-sm"></div>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-sm mb-1"></div>
              <div className="h-2 w-full bg-gray-200 rounded-sm mb-3"></div>
              
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="h-2 w-16 bg-gray-700 rounded-sm mb-2"></div>
                  <div className="h-2 w-full bg-gray-200 rounded-sm mb-1"></div>
                </div>
                <div>
                  <div className="h-2 w-16 bg-gray-700 rounded-sm mb-2"></div>
                  <div className="h-2 w-full bg-gray-200 rounded-sm mb-1"></div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'creative':
        return (
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className={`${scheme.primary} text-white p-3 flex-shrink-0`}>
              <div className="flex">
                <div className="h-8 w-8 rounded-full bg-white mr-3"></div>
                <div>
                  <div className="h-3 w-24 bg-white rounded-sm mb-1"></div>
                  <div className="h-2 w-16 bg-white bg-opacity-60 rounded-sm"></div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="p-3">
              <div className={`h-2 w-20 ${scheme.text} rounded-sm mb-2 ${scheme.accent} border-l-2 pl-2`}></div>
              <div className="h-2 w-full bg-gray-200 rounded-sm mb-1"></div>
              <div className="h-2 w-full bg-gray-200 rounded-sm mb-3"></div>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <div className={`h-2 w-20 ${scheme.text} rounded-sm mb-2`}></div>
                  <div className="pl-4 border-l border-purple-200">
                    <div className="h-2 w-full bg-gray-200 rounded-sm mb-1"></div>
                    <div className="h-2 w-full bg-gray-200 rounded-sm mb-1"></div>
                  </div>
                </div>
                <div>
                  <div className={`h-2 w-12 ${scheme.text} rounded-sm mb-2`}></div>
                  <div className={`p-1 ${scheme.secondary} rounded`}>
                    <div className="h-2 w-full bg-purple-300 rounded-full mb-1"></div>
                    <div className="h-2 w-3/4 bg-purple-300 rounded-full mb-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'minimal':
        return (
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="text-center p-3">
              <div className="h-3 w-28 bg-gray-700 rounded-sm mx-auto mb-2"></div>
              <div className="flex justify-center">
                <div className="h-2 w-10 bg-gray-400 rounded-sm mx-1"></div>
                <div className="h-2 w-10 bg-gray-400 rounded-sm mx-1"></div>
                <div className="h-2 w-10 bg-gray-400 rounded-sm mx-1"></div>
              </div>
            </div>
            {/* Divider */}
            <div className="border-t border-gray-200 mx-3"></div>
            {/* Content */}
            <div className="p-3">
              <div className="h-2 w-16 bg-gray-700 uppercase rounded-sm mb-2"></div>
              <div className="h-2 w-full bg-gray-200 rounded-sm mb-1"></div>
              <div className="h-2 w-full bg-gray-200 rounded-sm mb-3"></div>
              
              <div className="h-2 w-16 bg-gray-700 uppercase rounded-sm mb-2"></div>
              <div className="flex justify-between mb-1">
                <div className="h-2 w-20 bg-gray-600 rounded-sm"></div>
                <div className="h-2 w-12 bg-gray-300 rounded-sm"></div>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-sm mb-3"></div>
              
              <div className="flex flex-wrap mt-2">
                <div className="h-2 w-10 bg-gray-200 rounded-full m-1"></div>
                <div className="h-2 w-14 bg-gray-200 rounded-full m-1"></div>
                <div className="h-2 w-8 bg-gray-200 rounded-full m-1"></div>
              </div>
            </div>
          </div>
        );
      
      case 'executive':
        return (
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className={`${scheme.primary} text-white p-3 flex-shrink-0`}>
              <div className="h-3 w-32 bg-white rounded-sm mb-2"></div>
              <div className="h-2 w-24 bg-white bg-opacity-60 rounded-sm mb-2"></div>
              <div className="flex">
                <div className="h-2 w-12 bg-white bg-opacity-80 rounded-sm mr-2"></div>
                <div className="h-2 w-12 bg-white bg-opacity-80 rounded-sm"></div>
              </div>
            </div>
            {/* Content */}
            <div className="p-3">
              <div className="relative mb-3">
                <div className={`absolute top-0 left-0 w-4 h-0.5 ${scheme.primary}`}></div>
                <div className="h-2 w-28 bg-indigo-900 rounded-sm mb-2 pt-1"></div>
                <div className="h-2 w-full bg-gray-200 rounded-sm mb-1"></div>
                <div className="h-2 w-full bg-gray-200 rounded-sm"></div>
              </div>
              
              <div className="relative mb-3">
                <div className={`absolute top-0 left-0 w-4 h-0.5 ${scheme.primary}`}></div>
                <div className="h-2 w-28 bg-indigo-900 rounded-sm mb-2 pt-1"></div>
                <div className="flex justify-between mb-1">
                  <div className="h-2 w-20 bg-indigo-900 rounded-sm"></div>
                  <div className="h-2 w-12 bg-indigo-300 rounded-sm"></div>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-sm"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="relative">
                  <div className={`absolute top-0 left-0 w-3 h-0.5 ${scheme.primary}`}></div>
                  <div className="h-2 w-20 bg-indigo-900 rounded-sm mb-2 pt-1"></div>
                  <div className="flex flex-wrap">
                    <div className={`h-2 w-12 ${scheme.secondary} border ${scheme.accent} rounded m-0.5`}></div>
                    <div className={`h-2 w-10 ${scheme.secondary} border ${scheme.accent} rounded m-0.5`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="h-full flex items-center justify-center">
            <div className={`text-2xl font-bold ${scheme.text}`}>{name}</div>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full bg-white shadow-inner overflow-hidden">
      {renderThumbnail()}
    </div>
  );
};

export default TemplateThumbnail;
