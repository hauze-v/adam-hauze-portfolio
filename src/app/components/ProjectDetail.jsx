import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ProjectDetail = ({ project, onClose }) => {
  useEffect(() => {
    // Disable scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    };
  };

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 backdrop bg-black/50 z-50 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="min-h-screen py-8 px-4 flex items-center justify-center" onClick={handleBackdropClick}>
        <div className="w-[80%] max-w-7xl bg-gray-100 dark:bg-gray-800 rounded-lg p-8 md:p-16 relative" onClick={e => e.stopPropagation()}>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-4">
              {project.name}
            </h2>
            <p className="text-lg md:text-xl text-teal-500 dark:text-teal-400 ">
              Hosted on: {project.hosting}
            </p>
          </div>

          {/* Main Image */}
          <div className="mb-8">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <div className="relative aspect-video w-full">
                <Image
                  src={project.bgImage}
                  alt="Main project screenshot"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </a>
          </div>

          {/* Case Study */}
          <div className="w-[80%] mx-auto space-y-8">
            {/* Description */}
            <div>
              <h3 className='text-lg text-gray-900 dark:text-white mb-2'>Description:</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {project.caseStudy}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row justify-center gap-4 my-12">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-teal-500 border-2 border-teal-500 rounded-md hover:bg-teal-500 hover:text-white transition-colors duration-300 text-center"
              >
                View Live
              </a>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-teal-500 border-2 border-teal-500 rounded-md hover:bg-teal-500 hover:text-white transition-colors duration-300 text-center"
                >
                  See the code
                </a>
              )}
            </div>

            <div>
              <h3 className='text-lg text-gray-900 dark:text-white mb-2'>Technical Details:</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {project.logic}
              </p>
            </div>
          </div>

          {/* Screenshot Gallery */}
          <div className="mt-12 space-y-8">
            {project.screenshots.map((screenshot, index) => (
              <a
                key={index}
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-video w-full">
                  <Image
                    src={screenshot}
                    alt={`Project screenshot ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail