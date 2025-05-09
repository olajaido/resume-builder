import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import TemplateThumbnail from '@/components/templates/TemplateThumbnail';

// Template data with detailed descriptions
const resumeTemplates = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'A clean, contemporary design with a sidebar for skills and contact information. Perfect for tech, design, and forward-thinking industries.',
    features: ['Two-column layout', 'Sidebar for skills and contact info', 'Clean typography', 'Accent color highlights'],
    color: 'blue',
    bestFor: 'Technology, Design, Marketing, Startups',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'A traditional layout with a formal structure perfect for conservative industries and experienced professionals.',
    features: ['Classic formatting', 'Structured sections', 'Formal typography', 'Balanced white space'],
    color: 'gray',
    bestFor: 'Finance, Law, Healthcare, Government',
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'A bold, eye-catching design that stands out for creative professionals and showcases personality.',
    features: ['Distinctive header', 'Visual skill indicators', 'Timeline elements', 'Accent colors'],
    color: 'purple',
    bestFor: 'Graphic Design, Arts, Media, Entertainment',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'A clean, minimalist design focusing on content with subtle styling. Perfect for letting your experience speak for itself.',
    features: ['Understated design', 'Clean typography', 'Ample white space', 'Subtle separators'],
    color: 'green',
    bestFor: 'Academia, Research, Writing, Consulting',
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'An elegant, sophisticated design for senior professionals and executives that conveys authority and experience.',
    features: ['Distinctive header', 'Elegant typography', 'Structured layout', 'Professional color scheme'],
    color: 'indigo',
    bestFor: 'Executive Leadership, Senior Management, Board Positions',
  },
];

export default function TemplatesPage() {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [previewTemplate, setPreviewTemplate] = useState('modern');
  const [showFeatures, setShowFeatures] = useState(false);

  // Check authentication status on mount
  useEffect(() => {
    if (!isAuthenticated && typeof window !== 'undefined') {
      // Store the intended destination for after login
      sessionStorage.setItem('redirectAfterLogin', '/templates');
      router.push('/login?redirect=templates');
    }
  }, [isAuthenticated, router]);

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
    
    // Redirect to resume creation page with selected template
    router.push({
      pathname: '/resume/create',
      query: { template: templateId },
    });
  };
  
  const handleTemplatePreview = (templateId) => {
    setPreviewTemplate(templateId);
    setShowFeatures(true);
  };

  // If not authenticated, show loading state
  if (!isAuthenticated && typeof window !== 'undefined') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading templates...</p>
        </div>
      </div>
    );
  }

  // Get the current template being previewed
  const currentTemplate = resumeTemplates.find(t => t.id === previewTemplate) || resumeTemplates[0];
  const colorClasses = {
    blue: 'bg-blue-600 hover:bg-blue-700 text-blue-600 border-blue-600',
    gray: 'bg-gray-700 hover:bg-gray-800 text-gray-700 border-gray-700',
    purple: 'bg-purple-600 hover:bg-purple-700 text-purple-600 border-purple-600',
    green: 'bg-green-600 hover:bg-green-700 text-green-600 border-green-600',
    indigo: 'bg-indigo-600 hover:bg-indigo-700 text-indigo-600 border-indigo-600',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Resume Templates | AI Resume Builder</title>
        <meta name="description" content="Choose from our professional resume templates" />
      </Head>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Resume Templates</h1>
          <p className="mt-2 text-lg text-gray-600">
            Choose a professional template to create your standout resume
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Template Preview - Left Side */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900">{currentTemplate.name} Template</h2>
              <p className="mt-2 text-gray-600">{currentTemplate.description}</p>
            </div>
            
            <div className="p-6">
              {/* Template Preview */}
              <div className="aspect-w-8 aspect-h-11 border border-gray-200 rounded-md overflow-hidden mb-6">
                <div className="w-full h-full">
                  <TemplateThumbnail 
                    templateId={currentTemplate.id} 
                    color={currentTemplate.color} 
                    name={currentTemplate.name} 
                  />
                </div>
              </div>
              
              {/* Features and Best For */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {currentTemplate.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Best For</h3>
                  <p className="text-gray-600">{currentTemplate.bestFor}</p>
                  
                  <div className="mt-6">
                    <button
                      onClick={() => handleTemplateSelect(currentTemplate.id)}
                      className={`w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${colorClasses[currentTemplate.color].split(' ').slice(0, 2).join(' ')} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${currentTemplate.color}-500`}
                    >
                      Use This Template
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Template Options - Right Side */}
          <div className="space-y-4">
            {resumeTemplates.map((template) => (
              <div 
                key={template.id}
                className={`bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border-2 ${template.id === previewTemplate ? `border-${template.color}-500` : 'border-transparent'} cursor-pointer`}
                onClick={() => handleTemplatePreview(template.id)}
              >
                <div className="flex items-center p-4">
                  <div className="w-24 h-24 flex-shrink-0 mr-4 overflow-hidden rounded border border-gray-200">
                    <TemplateThumbnail 
                      templateId={template.id} 
                      color={template.color} 
                      name={template.name} 
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{template.name}</h3>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">{template.description}</p>
                    <div className="mt-2">
                      {template.id === previewTemplate ? (
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${template.color}-100 text-${template.color}-800`}>
                          Currently Previewing
                        </span>
                      ) : (
                        <span className="text-sm text-gray-500">Click to preview</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="bg-blue-50 rounded-lg p-4 mt-6">
              <h3 className="text-lg font-medium text-blue-800 mb-2">Need Help Choosing?</h3>
              <p className="text-sm text-blue-600 mb-3">Our AI can analyze your experience and career goals to recommend the best template for you.</p>
              <button 
                className="text-sm text-blue-700 font-medium hover:text-blue-800 flex items-center"
                onClick={() => alert('AI recommendation feature coming soon!')}
              >
                <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Get AI Recommendation
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
