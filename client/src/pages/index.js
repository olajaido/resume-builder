import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Head>
        <title>AI Resume Builder - Create Professional Resumes</title>
        <meta name="description" content="Build professional resumes with AI assistance, import existing resumes, and get personalized improvement suggestions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">AI Resume Builder</h1>
          </div>
          <nav className="flex space-x-4">
            {isAuthenticated() ? (
              <Link href="/dashboard" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Dashboard
              </Link>
            ) : (
              <div className="flex space-x-4">
                <Link href="/login" className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                  Login
                </Link>
                <Link href="/register" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Sign Up
                </Link>
              </div>
            )}
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Build Your Perfect Resume with AI Assistance
                </h2>
                <p className="mt-6 text-xl text-gray-600">
                  Create professional resumes, get AI-powered suggestions, and stand out from the competition. Upload existing resumes for analysis and improvement.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={() => router.push(isAuthenticated() ? '/dashboard' : '/register')}
                    className="btn btn-primary text-lg px-8 py-3"
                  >
                    Get Started
                  </button>
                  <button
                    onClick={() => router.push('/features')}
                    className="btn btn-outline text-lg px-8 py-3"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg blur opacity-25"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-xl">
                  <img
                    src="/resume-preview.png"
                    alt="Resume Preview"
                    className="w-full rounded-md shadow-md"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/600x800?text=Resume+Preview";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Powerful Features</h2>
              <p className="mt-4 text-xl text-gray-600">Everything you need to create the perfect resume</p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">AI-Powered Suggestions</h3>
                <p className="mt-4 text-gray-600">
                  Get intelligent suggestions to improve your resume based on your target job description and industry standards.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">Resume Import</h3>
                <p className="mt-4 text-gray-600">
                  Upload your existing resume in PDF or Word format and our AI will parse and convert it to an editable format.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">Multiple Templates</h3>
                <p className="mt-4 text-gray-600">
                  Choose from a variety of professional templates and customize them to match your personal style.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-600 rounded-2xl shadow-xl overflow-hidden">
              <div className="px-6 py-12 md:p-12 md:flex md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white md:text-3xl">
                    Ready to build your professional resume?
                  </h2>
                  <p className="mt-3 text-blue-100 max-w-3xl">
                    Join thousands of job seekers who have successfully landed their dream jobs with our AI-powered resume builder.
                  </p>
                </div>
                <div className="mt-8 md:mt-0">
                  <button
                    onClick={() => router.push(isAuthenticated() ? '/dashboard' : '/register')}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50"
                  >
                    Get Started Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold">AI Resume Builder</h3>
              <p className="mt-4 text-gray-300">
                Building professional resumes with AI assistance to help you land your dream job.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-gray-300 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-300 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-300 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-300 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} AI Resume Builder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
