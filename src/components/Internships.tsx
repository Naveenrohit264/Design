import React from 'react';
import { Briefcase, Building2, MapPin, DollarSign } from 'lucide-react';

const internships = [
  {
    title: 'UI/UX Design Intern',
    company: 'TechCorp Inc.',
    location: 'Remote',
    stipend: '$1000/month',
    duration: '6 months',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Frontend Developer Intern',
    company: 'WebSolutions Ltd.',
    location: 'Hybrid',
    stipend: '$1200/month',
    duration: '3 months',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Data Science Intern',
    company: 'AI Innovations',
    location: 'On-site',
    stipend: '$1500/month',
    duration: '4 months',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const Internships = () => {
  return (
    <section id="internships" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-500/5 to-black" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              Featured Internships
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Kickstart your career with hands-on experience at top companies
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship, index) => (
            <div key={index} className="bg-black border border-yellow-500/20 rounded-xl overflow-hidden hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="relative h-48">
                <img src={internship.image} alt={internship.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-yellow-500 transition-colors">
                  {internship.title}
                </h3>
                <div className="space-y-2 text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Building2 className="w-4 h-4 mr-2 text-yellow-500" />
                    {internship.company}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-yellow-500" />
                    {internship.location}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-2 text-yellow-500" />
                    {internship.stipend}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-2 text-yellow-500" />
                    {internship.duration}
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-yellow-500/10 text-yellow-500 rounded-lg hover:bg-yellow-500/20 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;