import Image from 'next/image';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project)}
      className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow dark:shadow-none duration-300 bg-white dark:bg-gray-800"
    >
      <div className="p-4 bg-white dark:bg-slate-700 border-b border-gray-200 dark:border-gray-700">
        <h3 className="md:text-xl text-center py-2 font-semibold dark:text-white">{project.name}</h3>
      </div>
      <div className="relative aspect-video">
        <Image
          src={project.bgImage}
          alt={project.name}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default ProjectCard;