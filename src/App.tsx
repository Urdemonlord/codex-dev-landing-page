import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Projects from './components/Projects';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Team />
        <Projects />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;