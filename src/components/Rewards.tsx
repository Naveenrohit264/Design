import React from 'react';
import { Gift, Award, Crown, Shield } from 'lucide-react';

const Rewards = () => {
  return (
    <section id="rewards" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-500/5 to-black" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              Rewards & Certifications
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Earn rewards and industry-recognized certifications as you progress
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Rewards Progress */}
          <div className="bg-black border border-yellow-500/20 rounded-xl p-8 hover:border-yellow-500/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-semibold">Your Rewards</h3>
              <div className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-yellow-500" />
                <span className="text-yellow-500 font-semibold">2,500 points</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Progress to next reward</span>
                  <span className="text-yellow-500">75%</span>
                </div>
                <div className="h-2 bg-yellow-500/10 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-yellow-500 to-yellow-400" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-yellow-500/10 rounded-lg">
                  <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <span className="text-sm text-gray-400">5 Badges</span>
                </div>
                <div className="text-center p-4 bg-yellow-500/10 rounded-lg">
                  <Crown className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <span className="text-sm text-gray-400">Level 12</span>
                </div>
                <div className="text-center p-4 bg-yellow-500/10 rounded-lg">
                  <Shield className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <span className="text-sm text-gray-400">3 Certs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <div className="bg-black border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">UI/UX Design Professional</h3>
                  <p className="text-gray-400 text-sm">Advanced Certification</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Certificate"
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Course Progress</span>
                  <span className="text-yellow-500">85%</span>
                </div>
                <div className="h-2 bg-yellow-500/10 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-yellow-500 to-yellow-400" />
                </div>
              </div>
            </div>

            <div className="bg-black border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">Full Stack Development</h3>
                  <p className="text-gray-400 text-sm">Expert Certification</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Certificate"
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Course Progress</span>
                  <span className="text-yellow-500">60%</span>
                </div>
                <div className="h-2 bg-yellow-500/10 rounded-full overflow-hidden">
                  <div className="h-full w-[60%] bg-gradient-to-r from-yellow-500 to-yellow-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;