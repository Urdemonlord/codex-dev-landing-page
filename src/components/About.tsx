import React from 'react';
import { Code, Lightbulb, Users } from 'lucide-react';

const AboutCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ 
  icon, title, description 
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg transition-transform duration-300 hover:scale-[1.02] border border-gray-700">
      <div className="text-red-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Us</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            We are a team of passionate IT students dedicated to creating innovative digital solutions.
            Our collective expertise spans across various domains of technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AboutCard 
            icon={<Lightbulb size={32} />}
            title="Vision"
            description="To be the bridge between innovative ideas and technological solutions, making high-quality software accessible to all."
          />
          <AboutCard 
            icon={<Code size={32} />}
            title="Mission"
            description="Delivering exceptional digital experiences through code that is clean, efficient, and cutting-edge while fostering continuous learning."
          />
          <AboutCard 
            icon={<Users size={32} />}
            title="Values"
            description="Collaboration, innovation, integrity, and a relentless pursuit of excellence in everything we build and deliver."
          />
        </div>
      </div>
    </section>
  );
};

export default About;