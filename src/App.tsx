import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Internships from './components/Internships';
import Mentorship from './components/Mentorship';
import Assessments from './components/Assessments';
import Reviews from './components/Reviews';
import Rewards from './components/Rewards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Courses />
        <Internships />
        <Mentorship />
        <Assessments />
        <Reviews />
        <Rewards />
      </main>
      <Footer />
    </div>
  );
}

export default App;