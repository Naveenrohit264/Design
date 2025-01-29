import React from 'react';
import { Menu, X, Search, Bell, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm border-b border-yellow-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
                EduGlow
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
                <button onClick={() => scrollToSection('courses')} className="nav-link">Courses</button>
                <button onClick={() => scrollToSection('internships')} className="nav-link">Internships</button>
                <button onClick={() => scrollToSection('mentorship')} className="nav-link">Mentorship</button>
                <button onClick={() => scrollToSection('assessments')} className="nav-link">Assessments</button>
                <button onClick={() => scrollToSection('reviews')} className="nav-link">Reviews</button>
                <button onClick={() => scrollToSection('rewards')} className="nav-link">Rewards</button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-yellow-500/10 transition-colors">
              <Search className="w-5 h-5 text-yellow-500" />
            </button>
            <button className="p-2 rounded-full hover:bg-yellow-500/10 transition-colors">
              <Bell className="w-5 h-5 text-yellow-500" />
            </button>
            <button className="p-2 rounded-full hover:bg-yellow-500/10 transition-colors">
              <User className="w-5 h-5 text-yellow-500" />
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-yellow-500/10 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-yellow-500" />
              ) : (
                <Menu className="w-6 h-6 text-yellow-500" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('home')} className="mobile-nav-link w-full text-left">Home</button>
            <button onClick={() => scrollToSection('courses')} className="mobile-nav-link w-full text-left">Courses</button>
            <button onClick={() => scrollToSection('internships')} className="mobile-nav-link w-full text-left">Internships</button>
            <button onClick={() => scrollToSection('mentorship')} className="mobile-nav-link w-full text-left">Mentorship</button>
            <button onClick={() => scrollToSection('assessments')} className="mobile-nav-link w-full text-left">Assessments</button>
            <button onClick={() => scrollToSection('reviews')} className="mobile-nav-link w-full text-left">Reviews</button>
            <button onClick={() => scrollToSection('rewards')} className="mobile-nav-link w-full text-left">Rewards</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;