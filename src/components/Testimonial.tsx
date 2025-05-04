import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section className="py-24 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-500 rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-red-500 text-lg font-semibold mb-6">OUR PHILOSOPHY</h2>
          <div className="relative">
            <div className="absolute -left-8 -top-8 text-gray-700 opacity-20 text-6xl">"</div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-8 leading-relaxed">
              In the world of code, we are not just building applications;
              we are crafting experiences, solving problems, and shaping the future.
              <span className="text-red-500">Every line of code is a step towards evolution.</span>
            </blockquote>
            <div className="absolute -right-8 -bottom-8 text-gray-700 opacity-20 text-6xl">"</div>
          </div>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
          <div className="text-gray-300">
            <p className="font-semibold">The Codex Team</p>
            <p className="text-sm text-gray-400">Building better tomorrow, one commit at a time</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;