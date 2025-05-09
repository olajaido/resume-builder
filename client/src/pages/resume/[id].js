import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { resumeService } from '@/services/api';
import { useAuth } from '@/context/AuthContext';
import ResumeEditor from '@/components/ResumeEditor';
import ResumePreview from '@/components/ResumePreview';

export default function ResumePage() {
  const router = useRouter();
  const { id } = router.query;
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeView, setActiveView] = useState('edit'); // 'edit' or 'preview'
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }

    // Fetch resume data if ID is available
    if (id) {
      fetchResume();
    }
  }, [id, isAuthenticated, router]);

  const fetchResume = async () => {
    try {
      setLoading(true);
      const response = await resumeService.getResume(id);
      
      if (response.data) {
        setResume(response.data);
      } else {
        setError('Resume not found');
      }
    } catch (err) {
      console.error('Error fetching resume:', err);
      setError('Failed to load resume. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (updatedResume) => {
    try {
      setLoading(true);
      await resumeService.updateResume(id, updatedResume);
      setResume(updatedResume);
      alert('Resume saved successfully!');
    } catch (err) {
      console.error('Error saving resume:', err);
      alert('Failed to save resume. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-gray-700 mb-6">{error}</p>
        <Link href="/dashboard" className="btn btn-primary">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  if (!resume) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Resume Not Found</h1>
        <p className="text-gray-700 mb-6">The resume you're looking for doesn't exist or you don't have permission to view it.</p>
        <Link href="/dashboard" className="btn btn-primary">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{resume.title} - AI Resume Builder</title>
        <meta name="description" content="Edit your resume" />
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">AI Resume Builder</h1>
          <Link href="/dashboard" className="text-blue-600 hover:text-blue-800">
            Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">{resume.title}</h2>
          <p className="text-sm text-gray-500">Template: {resume.template}</p>
        </div>

        <div className="mb-6">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveView('edit')}
              className={`px-4 py-2 rounded-md ${
                activeView === 'edit'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Edit
            </button>
            <button
              onClick={() => setActiveView('preview')}
              className={`px-4 py-2 rounded-md ${
                activeView === 'preview'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Preview
            </button>
          </div>
        </div>

        {activeView === 'edit' ? (
          <ResumeEditor resumeId={id} onSave={handleSave} />
        ) : (
          <ResumePreview resume={resume} template={resume.template} />
        )}
      </main>
    </div>
  );
}
