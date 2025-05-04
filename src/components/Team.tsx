import React from 'react';
import { Code, Figma, Database, BarChart, Megaphone, Users } from 'lucide-react';

interface TeamRoleProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TeamRole: React.FC<TeamRoleProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center bg-gray-800 rounded-lg p-6 border border-gray-700 transition-all hover:border-gray-600">
      <div className="bg-gray-700 rounded-full p-4 mb-4 text-red-500">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Team Structure</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Our diverse team of talented individuals brings a wide range of skills and expertise to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamRole
            icon={<Users size={24} />}
            title="Product Owner"
            description="Defines product vision, prioritizes features, and ensures the team delivers maximum value."
          />
          <TeamRole
            icon={<Code size={24} />}
            title="Full-Stack Developer"
            description="Builds end-to-end solutions, from server-side logic to client-side interfaces."
          />
          <TeamRole
            icon={<Figma size={24} />}
            title="UI/UX Designer"
            description="Creates intuitive, user-friendly interfaces that enhance the user experience."
          />
          <TeamRole
            icon={<Database size={24} />}
            title="Database Engineer"
            description="Designs and optimizes database structures to ensure data integrity and performance."
          />
          <TeamRole
            icon={<BarChart size={24} />}
            title="Data Scientist"
            description="Analyzes data to extract valuable insights and build predictive models."
          />
          <TeamRole
            icon={<Megaphone size={24} />}
            title="DevOps Engineer"
            description="Streamlines development processes and ensures smooth deployment pipelines."
          />
        </div>
      </div>
    </section>
  );
};

export default Team;