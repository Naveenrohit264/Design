import React from 'react';
import { BookOpen, Clock, Star, Users } from 'lucide-react';

const courses = [
  {
    title: 'UI/UX Design Mastery',
    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '12 weeks',
    rating: 4.8,
    students: 2500,
    price: '$299'
  },
  {
    title: 'Full Stack Development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '24 weeks',
    rating: 4.9,
    students: 3200,
    price: '$499'
  },
  {
    title: 'Data Science & AI',
    image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '16 weeks',
    rating: 4.7,
    students: 1800,
    price: '$399'
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-black to-black" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              Featured Courses
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Master the most in-demand skills with our industry-leading courses
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-black border border-yellow-500/20 rounded-xl overflow-hidden hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="relative h-48">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-yellow-500 transition-colors">
                  {course.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-yellow-500" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    {course.rating}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1 text-yellow-500" />
                    {course.students}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-yellow-500">{course.price}</span>
                  <button className="px-4 py-2 bg-yellow-500/10 text-yellow-500 rounded-lg hover:bg-yellow-500/20 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;