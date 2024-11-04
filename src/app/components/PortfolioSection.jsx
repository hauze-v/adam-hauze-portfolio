import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';

const PortfolioSection = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className='mb-20'>
      <div className="mb-10">
        <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          As a frontend developer with degrees in both App Dev and Cybersecurity, I blend software development with security-first thinking. My work focuses on translating complex design requirements into clean, maintainable code using <span className="text-teal-500">Angular</span> and <span className="text-teal-500">React</span>, always with an emphasis on the end-user experience.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          The projects below showcase my software development journey - from Vanilla JS through my first framework <span className="text-teal-500">React</span>, to establishing expertise in <span className="text-teal-500">Angular</span>, to now expanding into UI/UX design while implementing full-stack applications with <span className="text-teal-500">Firebase</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default PortfolioSection