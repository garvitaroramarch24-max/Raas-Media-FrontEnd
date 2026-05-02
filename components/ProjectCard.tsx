'use client';

import { motion } from 'framer-motion';
import { FiEye } from 'react-icons/fi';
import { useState } from 'react';
import ProjectModal from './ProjectModal';
import type { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-lg cursor-pointer h-80"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/0 via-dark/50 to-dark/90 group-hover:from-dark/20 group-hover:to-dark/80 transition-all duration-300" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 transform group-hover:translate-y-0 transition-all duration-300">
          {/* Category Badge */}
          <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-gold/30 text-gold text-xs font-bold rounded-full capitalize">
              {project.category === 'live' ? 'Live Project' : 'Upcoming'}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-lightGray mb-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-lightGray/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.description}
          </p>

          {/* View Button */}
          <button className="flex items-center gap-2 text-gold font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FiEye /> View Details
          </button>
        </div>
      </motion.div>

      {/* Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        project={project}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
