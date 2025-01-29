import React from 'react';
import { Brain, Trophy, Target, Award } from 'lucide-react';

const Assessments = () => {
  return (
    <section id="assessments" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-500/5 to-black" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              Skill Assessments & Quizzes
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Test your knowledge and track your progress with our interactive assessments
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Assessment Types */}
          <div className="space-y-6">
            <div className="bg-black border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all duration-300">
              <Brain className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Skill Assessment</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive tests to evaluate your technical skills
              </p>
              <div className="h-2 bg-yellow-500/10 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full" />
              </div>
            </div>

            <div className="bg-black border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all duration-300">
              <Trophy className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Weekly Challenges</h3>
              <p className="text-gray-400 mb-4">
                Compete with peers in coding and design challenges
              </p>
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center"
                  >
                    <Trophy className="w-4 h-4 text-yellow-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quiz Section */}
          <div className="bg-black border border-yellow-500/20 rounded-xl p-8 hover:border-yellow-500/40 transition-all duration-300">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Current Quiz</h3>
                <p className="text-gray-400">JavaScript Fundamentals</p>
              </div>
              <div className="bg-yellow-500/10 px-4 py-2 rounded-lg">
                <span className="text-yellow-500">12:00</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-4 border border-yellow-500/20 rounded-lg">
                <p className="text-white mb-4">What is the output of: console.log(typeof typeof 1)?</p>
                <div className="space-y-3">
                  {['number', 'string', 'undefined', 'object'].map((option, i) => (
                    <button
                      key={i}
                      className="w-full p-3 text-left rounded-lg bg-yellow-500/5 hover:bg-yellow-500/10 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-400">Question 4/10</span>
                </div>
                <button className="px-6 py-2 bg-yellow-500/10 text-yellow-500 rounded-lg hover:bg-yellow-500/20 transition-colors">
                  Next Question
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assessments;