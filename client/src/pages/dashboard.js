import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import { resumeService, authService } from '@/services/api';
import Link from 'next/link';

export default function Dashboard() {
  const [resumes, setResumes] = useState([]);
  const [recentUploads, setRecentUploads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploadsLoading, setUploadsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uploadsError, setUploadsError] = useState(null);
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated() && !loading) {
      router.push('/login');
      return;
    }

    // Fetch user's resumes
    const fetchResumes = async () => {
      try {
        setLoading(true);
        const response = await resumeService.getResumes();
        setResumes(response.data || []);
      } catch (error) {
        console.error('Error fetching resumes:', error);
        setError('Failed to load your resumes. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    
    // Fetch user's recent uploads
    const fetchRecentUploads = async () => {
      try {
        setUploadsLoading(true);
        const response = await authService.getRecentUploads();
        setRecentUploads(response.recentUploads || []);
      } catch (error) {
        console.error('Error fetching recent uploads:', error);
        setUploadsError('Failed to load your recent uploads.');
      } finally {
        setUploadsLoading(false);
      }
    };

    if (isAuthenticated()) {
      fetchResumes();
      fetchRecentUploads();
    }
  }, [isAuthenticated, router]);

  const handleCreateNewResume = () => {
    router.push('/resume/new');
  };

  const handleDeleteResume = async (id) => {
    if (window.confirm('Are you sure you want to delete this resume?')) {
      try {
        await resumeService.deleteResume(id);
        // Update the resumes list after deletion
        setResumes(resumes.filter(resume => resume._id !== id));
      } catch (error) {
        console.error('Error deleting resume:', error);
        setError('Failed to delete the resume. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Dashboard - AI Resume Builder</title>
        <meta name="description" content="Manage your resumes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">AI Resume Builder</h1>
          <div className="flex items-center space-x-4">
            {user && (
              <span className="text-gray-700">Welcome, {user.name}</span>
            )}
            <button
              onClick={logout}
              className="text-gray-600 hover:text-gray-900"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">My Resumes</h2>
          <button
            onClick={handleCreateNewResume}
            className="btn btn-primary"
          >
            Create New Resume
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        ) : resumes.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No resumes yet</h3>
            <p className="text-gray-600 mb-4">
              Create your first resume to get started with AI-powered resume building.
            </p>
            <button
              onClick={handleCreateNewResume}
              className="btn btn-primary"
            >
              Create Your First Resume
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumes.map((resume) => (
              <div key={resume._id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{resume.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Template: {resume.template}
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    Last updated: {new Date(resume.updatedAt).toLocaleDateString()}
                  </p>
                  <div className="flex justify-between">
                    <Link
                      href={`/resume/${resume._id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Edit Resume
                    </Link>
                    <button
                      onClick={() => handleDeleteResume(resume._id)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-3 flex justify-between">
                  <Link
                    href={`/resume/${resume._id}/preview`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Preview
                  </Link>
                  <Link
                    href={`/resume/${resume._id}/download`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Download
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Recent Uploads Section */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Uploads</h3>
          {uploadsLoading ? (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : uploadsError ? (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{uploadsError}</p>
                </div>
              </div>
            </div>
          ) : recentUploads.length === 0 ? (
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <p className="text-gray-600">No recent uploads found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentUploads.map((upload) => (
                <div key={upload.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="p-6">
                    <h4 className="text-lg font-medium text-gray-900 mb-2">{upload.fileName}</h4>
                    <p className="text-gray-500 text-sm mb-4">
                      Uploaded: {new Date(upload.uploadDate).toLocaleDateString()}
                    </p>
                    <div className="flex space-x-4">
                      <Link
                        href={{
                          pathname: '/resume/create',
                          query: { data: JSON.stringify(upload.resumeData) }
                        }}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        Create Resume
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Upload Resume Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Existing Resume</h3>
          <p className="text-gray-600 mb-4">
            Have an existing resume? Upload it and our AI will parse and convert it to an editable format.
          </p>
          <Link
            href="/resume/upload"
            className="btn btn-outline"
          >
            Upload Resume
          </Link>
        </div>
      </main>

      <footer className="bg-white border-t mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AI Resume Builder. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
