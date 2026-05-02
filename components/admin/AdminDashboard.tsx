'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FiFilm, FiImage, FiZap, FiClock } from 'react-icons/fi';
import { apiUrl } from '@/lib/api';
import type { GalleryItem, Project } from '@/lib/types';

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [galleryCount, setGalleryCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      setError(false);
      try {
        const [projectsRes, galleryRes] = await Promise.all([
          axios.get<Project[]>(apiUrl('/api/projects')),
          axios.get<GalleryItem[]>(apiUrl('/api/gallery')),
        ]);
        if (cancelled) return;
        setProjects(Array.isArray(projectsRes.data) ? projectsRes.data : []);
        setGalleryCount(Array.isArray(galleryRes.data) ? galleryRes.data.length : 0);
      } catch {
        if (!cancelled) {
          setProjects([]);
          setGalleryCount(0);
          setError(true);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const total = projects.length;
  const live = projects.filter((p) => p.category === 'live').length;
  const upcoming = projects.filter((p) => p.category === 'upcoming').length;

  const stats = [
    { icon: FiFilm, label: 'Total projects', value: total, color: 'from-gold to-yellow-600' },
    { icon: FiZap, label: 'Live', value: live, color: 'from-emerald-600 to-green-700' },
    { icon: FiClock, label: 'Upcoming', value: upcoming, color: 'from-amber-600 to-orange-700' },
    { icon: FiImage, label: 'Gallery images', value: galleryCount, color: 'from-blue-600 to-indigo-700' },
  ];

  const preview = projects.slice(0, 5);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-lightGray mb-2">Dashboard</h2>
        <p className="text-lightGray/60">Counts from your catalogue and public gallery</p>
      </motion.div>

      {error && (
        <p className="text-red-400 text-sm border border-red-500/30 rounded-lg px-4 py-3 bg-red-500/10">
          Could not load stats. Ensure the backend is running and try refreshing.
        </p>
      )}

      {isLoading ? (
        <div className="flex justify-center py-16">
          <div className="text-center">
            <div className="spinner mb-4 mx-auto" />
            <p className="text-lightGray/60">Loading dashboard…</p>
          </div>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-dark border border-gold/20 rounded-lg p-6 hover:border-gold/50 transition-colors group"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="text-white text-xl" />
                  </div>
                  <p className="text-lightGray/60 text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gold">{stat.value}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-dark border border-gold/20 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-lightGray mb-6">Quick summary</h3>
            <div className="space-y-4">
              <p className="text-lightGray/70">
                Total projects: <span className="text-gold font-bold">{total}</span>
              </p>
              <p className="text-lightGray/70">
                Live: <span className="text-gold font-bold">{live}</span>
              </p>
              <p className="text-lightGray/70">
                Upcoming: <span className="text-gold font-bold">{upcoming}</span>
              </p>
              <p className="text-lightGray/70">
                Gallery images on the site: <span className="text-gold font-bold">{galleryCount}</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="bg-dark border border-gold/20 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-lightGray mb-6">Projects in catalogue</h3>
            {preview.length === 0 ? (
              <p className="text-lightGray/60">No projects yet. Add some under the Projects tab.</p>
            ) : (
              <ul className="space-y-3">
                {preview.map((p) => (
                  <li
                    key={p._id}
                    className="flex items-center justify-between gap-4 p-4 bg-darkGray rounded-lg border border-gold/10"
                  >
                    <span className="text-lightGray font-medium truncate">{p.title}</span>
                    <span className="text-gold text-xs font-bold uppercase shrink-0 capitalize">{p.category}</span>
                  </li>
                ))}
              </ul>
            )}
            {projects.length > 5 && (
              <p className="text-lightGray/50 text-sm mt-4">Showing 5 of {projects.length}. Manage all in Projects.</p>
            )}
          </motion.div>
        </>
      )}
    </div>
  );
}
