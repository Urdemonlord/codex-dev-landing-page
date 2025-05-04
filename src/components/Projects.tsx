import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, category, image }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 transition-all hover:border-red-600 group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-2 py-1 rounded">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <button className="text-red-500 hover:text-red-400 font-medium transition-colors duration-300 flex items-center">
          View Project
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "EduTech Platform",
      description: "An interactive learning platform for computer science students with real-time code evaluation.",
      category: "Web App",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Health Tracker",
      description: "A comprehensive health monitoring app with personalized insights and recommendations.",
      category: "Mobile App",
      image: "https://images.pexels.com/photos/4482890/pexels-photo-4482890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Smart Home Dashboard",
      description: "Centralized control system for managing all your smart home devices in one place.",
      category: "IoT",
      image: "https://images.pexels.com/photos/7054528/pexels-photo-7054528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Showcasing our latest and most innovative digital solutions. 
            Each project represents our commitment to excellence and cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              category={project.category}
              image={project.image}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-block px-8 py-3 border border-red-600 text-white font-medium rounded hover:bg-red-600 transition-colors duration-300">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;