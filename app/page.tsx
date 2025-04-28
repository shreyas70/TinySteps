'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block animate-bounce-slow">
                  <span className="inline-block px-4 py-1 mb-2 text-sm font-semibold bg-purple-100 text-purple-800 rounded-full">
                    🚀 Join thousands building better habits
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                  Build Better Habits,
                  <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text"> One Tiny Step</span> at a Time
                </h1>
                <p className="text-base text-gray-600 mb-3 leading-relaxed">
                  Track your habits, stay motivated, and achieve your goals with our intuitive habit tracking system.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Link 
                    href="/signup" 
                    className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-5 py-2 rounded-full text-base font-semibold hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Get Started Free
                  </Link>
                  <Link
                    href="#features"
                    className="text-gray-600 px-5 py-2 rounded-full text-base font-semibold hover:text-purple-600 transition-colors border-2 border-gray-200 hover:border-purple-200"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="relative w-full h-[250px] md:h-[300px]">
                  <Image
                    src="/images/hero.svg"
                    alt="Habit Tracking Calendar"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Left Column - Illustration and Title */}
            <div className="w-full md:w-1/2">
              <div className="text-center md:text-left mb-4">
                <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text inline-block">
                  Why Choose TinySteps?
                </h2>
                <p className="text-gray-600 text-sm">Everything you need to build lasting habits</p>
              </div>
              
              {/* Tasks Illustration */}
              <div className="relative w-full h-[250px] mt-4">
                <Image
                  src="/images/tasks.svg"
                  alt="Person completing tasks"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="w-full md:w-1/2 grid gap-3">
              {/* Habit Management */}
              <div className="bg-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-full -mr-8 -mt-8"></div>
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-2">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold mb-1">Habit Management</h3>
                  <p className="text-gray-600 text-sm">Create, customize, and schedule your habits with ease.</p>
                </div>
              </div>

              {/* Smart Tracking */}
              <div className="bg-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-green-50 rounded-bl-full -mr-8 -mt-8"></div>
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-2">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold mb-1">Smart Tracking</h3>
                  <p className="text-gray-600 text-sm">Monitor your daily progress with streak counters and visualizations.</p>
                </div>
              </div>

              {/* Gamified Experience */}
              <div className="bg-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-orange-50 rounded-bl-full -mr-8 -mt-8"></div>
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center mb-2">
                    <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold mb-1">Gamified Experience</h3>
                  <p className="text-gray-600 text-sm">Stay motivated with points, achievements, and level progression.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl p-4 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
            <div className="relative">
              <h2 className="text-xl font-bold mb-2 text-white">Ready to Transform Your Habits?</h2>
              <p className="text-sm mb-3 text-purple-100 max-w-2xl mx-auto">Join thousands of users who are already building better habits with TinySteps.</p>
              <Link 
                href="/signup" 
                className="inline-block bg-white text-purple-600 px-5 py-2 rounded-full text-base font-semibold hover:bg-purple-50 transition-colors transform hover:scale-105"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 