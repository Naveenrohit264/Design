import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              EduGlow
            </span>
            <p className="text-gray-400">
              Empowering careers through AI-driven education and mentorship
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Mentorship</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest courses and offers</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-yellow-500/5 border border-yellow-500/20 rounded-l-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-500/40 flex-grow"
              />
              <button className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 px-4 py-2 rounded-r-lg hover:bg-yellow-500/20 transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-500/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 EduGlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;