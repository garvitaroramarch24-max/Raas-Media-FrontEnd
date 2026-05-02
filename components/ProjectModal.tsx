'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import type { Project } from '@/lib/types';

interface ProjectModalProps {
  isOpen: boolean;
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ isOpen, project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-dark rounded-lg overflow-hidden max-w-2xl w-full border border-gold/30"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-gold text-dark rounded-full hover:bg-gold/80 transition-colors"
            >
              <FiX size={24} />
            </button>

            {/* Image */}
            <div className="relative h-96 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-dark/0 to-dark/80" />
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-lightGray">
                  {project.title}
                </h2>
                <span className="px-4 py-2 bg-gold/30 text-gold font-bold rounded-full text-sm capitalize">
                  {project.category === 'live' ? 'Live Project' : 'Upcoming'}
                </span>
              </div>

              <p className="text-lightGray/80 text-lg mb-6">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-gold/20">
                <div>
                  <p className="text-gold text-sm font-semibold mb-2">Status</p>
                  <p className="text-lightGray capitalize">
                    {project.category === 'live' ? 'Active' : 'In Development'}
                  </p>
                </div>
                <div>
                  <p className="text-gold text-sm font-semibold mb-2">Category</p>
                  <p className="text-lightGray capitalize">{project.category}</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full px-6 py-3 bg-gradient-gold text-dark font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
