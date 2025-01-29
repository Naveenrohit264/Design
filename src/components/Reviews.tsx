import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Johnson',
    role: 'UI/UX Designer',
    company: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    review: 'The mentorship program completely transformed my career. The personalized guidance and real-world projects helped me land my dream job.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Full Stack Developer',
    company: 'StartupX',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    review: 'Exceptional course content and amazing support from mentors. The hands-on projects really helped solidify my understanding.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Data Scientist',
    company: 'AI Solutions',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    review: 'The AI and Data Science course was exactly what I needed to transition into tech. The curriculum is current and industry-relevant.',
    rating: 5
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-500/5 to-black" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              Student Success Stories
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from our graduates who transformed their careers through our platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-black border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-white">{review.name}</h3>
                  <p className="text-gray-400 text-sm">{review.role}</p>
                  <p className="text-yellow-500 text-sm">{review.company}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{review.review}</p>
              <div className="flex items-center gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-4">
          <button className="p-2 rounded-full border border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
            <ChevronLeft className="w-6 h-6 text-yellow-500" />
          </button>
          <button className="p-2 rounded-full border border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
            <ChevronRight className="w-6 h-6 text-yellow-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;