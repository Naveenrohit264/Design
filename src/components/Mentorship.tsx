import React from 'react';
import { MessageSquare, Video, Calendar, Users } from 'lucide-react';

const Mentorship = () => {
  return (
    <section id="mentorship" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-500/5 to-black" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              Personalized Mentorship
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Connect with industry experts and accelerate your learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="bg-black border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all duration-300">
              <MessageSquare className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Chat Support</h3>
              <p className="text-gray-400">
                Get instant help from mentors through our modern chat interface
              </p>
            </div>
            <div className="bg-black border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all duration-300">
              <Video className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">1:1 Video Sessions</h3>
              <p className="text-gray-400">
                Schedule personal video calls for in-depth guidance
              </p>
            </div>
            <div className="bg-black border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all duration-300">
              <Calendar className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-400">
                Book sessions at your convenience with our easy scheduling system
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Mentorship"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-black/80 border border-yellow-500/20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-yellow-500 mr-2" />
                      <span className="text-white">500+ Expert Mentors</span>
                    </div>
                    <button className="px-4 py-2 bg-yellow-500/10 text-yellow-500 rounded-lg hover:bg-yellow-500/20 transition-colors">
                      Find a Mentor
                    </button>
                  </div>
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-black bg-yellow-500/20"
                      />
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-black bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                      +99
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;