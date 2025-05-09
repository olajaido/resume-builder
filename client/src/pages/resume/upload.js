import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ResumeUploader from '@/components/ResumeUploader';
import { useAuth } from '@/context/AuthContext';

export default function UploadResumePage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [parsedData, setParsedData] = useState(null);

  // Redirect to login if not authenticated
  if (typeof window !== 'undefined' && !isAuthenticated()) {
    router.push('/login');
    return null;
  }

  const handleResumeDataParsed = (data) => {
    setParsedData(data);
    // After successful parsing, redirect to the resume editor with the parsed data
    router.push({
      pathname: '/resume/create',
      query: { data: JSON.stringify(data) },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Upload Resume | AI Resume Builder</title>
        <meta name="description" content="Upload your existing resume for AI analysis and improvement" />
      </Head>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Upload Your Resume</h1>
          <p className="mt-2 text-lg text-gray-600">
            Upload your existing resume and our AI will parse it into an editable format.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <ResumeUploader onResumeDataParsed={handleResumeDataParsed} />
        </div>
      </main>
    </div>
  );
}
