'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import { apiUrl } from '@/lib/api';
import type { Project } from '@/lib/types';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  const liveCount = useMemo(
    () => projects.filter((p) => p.category === 'live').length,
    [projects]
  );
  const upcomingCount = useMemo(
    () => projects.filter((p) => p.category === 'upcoming').length,
    [projects]
  );

  useEffect(() => {
    if (activeCategory === 'live' && liveCount === 0) setActiveCategory('all');
    else if (activeCategory === 'upcoming' && upcomingCount === 0) setActiveCategory('all');
  }, [activeCategory, liveCount, upcomingCount]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      setLoadError(false);
      try {
        const { data } = await axios.get<Project[]>(apiUrl('/api/projects'));
        if (!cancelled) setProjects(Array.isArray(data) ? data : []);
      } catch {
        if (!cancelled) {
          setProjects([]);
          setLoadError(true);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-lightGray mb-4">
            Our <span className="text-gold">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {(['all', 'live', 'upcoming'] as const).map((category) => {
            const emptyLive = category === 'live' && liveCount === 0;
            const emptyUpcoming = category === 'upcoming' && upcomingCount === 0;
            const disabled = emptyLive || emptyUpcoming;
            const label =
              category === 'all' ? 'All Projects' : category === 'live' ? 'Live Projects' : 'Upcoming';
            const title = emptyLive
              ? 'No live projects yet'
              : emptyUpcoming
                ? 'No upcoming projects yet'
                : undefined;

            return (
              <button
                key={category}
                type="button"
                title={title}
                disabled={disabled}
                onClick={() => {
                  if (!disabled) setActiveCategory(category);
                }}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 capitalize ${
                  disabled
                    ? 'cursor-not-allowed border-2 border-gold/15 text-lightGray/35 bg-dark/40'
                    : activeCategory === category
                      ? 'bg-gradient-gold text-dark shadow-lg shadow-gold/50'
                      : 'border-2 border-gold text-gold hover:bg-gold/10'
                }`}
              >
                {label}
              </button>
            );
          })}
        </motion.div>

        {isLoading && (
          <div className="flex justify-center py-20">
            <div className="text-center">
              <div className="spinner mb-4 mx-auto" />
              <p className="text-lightGray/70">Loading projects…</p>
            </div>
          </div>
        )}

        {!isLoading && loadError && (
          <p className="text-center text-red-400 py-12">
            Could not load projects. Check that the API is running and try again.
          </p>
        )}

        {!isLoading && !loadError && filteredProjects.length === 0 && (
          <p className="text-center text-lightGray/60 py-16 border border-gold/20 rounded-lg">
            No projects in this category yet. Add them from the admin panel.
          </p>
        )}

        {!isLoading && !loadError && filteredProjects.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project._id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
