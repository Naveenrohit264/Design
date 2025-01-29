import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black flex items-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-black to-black" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMiAyaDJ2MkgyeiIgZmlsbD0icmdiYSgyNTUsIDIzNSwgNTksIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-white">Master Your Future with </span>
              <span className="bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
                AI-Powered Learning
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl">
              Transform your career with cutting-edge courses, personalized mentorship, and AI-driven tools designed for your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg text-black font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 flex items-center justify-center group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-yellow-500/30 rounded-lg text-yellow-500 hover:bg-yellow-500/10 transition-colors flex items-center justify-center">
                <Sparkles className="mr-2 w-5 h-5" />
                Explore Courses
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Students learning"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            {/* Stats */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-yellow-500/10 backdrop-blur-xl rounded-xl p-6 border border-yellow-500/20">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500">500+</div>
                  <div className="text-sm text-gray-400">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500">50k+</div>
                  <div className="text-sm text-gray-400">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500">100+</div>
                  <div className="text-sm text-gray-400">Mentors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;