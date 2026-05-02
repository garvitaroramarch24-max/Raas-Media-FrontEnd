'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiTrash2, FiX } from 'react-icons/fi';
import axios from 'axios';
import { apiUrl } from '@/lib/api';

interface Project {
  _id?: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export default function ProjectsManager() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Project>({
    title: '',
    description: '',
    category: 'live',
    image: '',
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(apiUrl('/api/projects'));
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenModal = () => {
    setFormData({ title: '', description: '', category: 'live', image: '' });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ title: '', description: '', category: 'live', image: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('adminToken');
      await axios.post(apiUrl('/api/projects'), formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      handleCloseModal();
      fetchProjects();
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure?')) return;
    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(apiUrl(`/api/projects/${id}`), {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  if (isLoading) {
    return <div className="text-center text-gold">Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center"
      >
        <div>
          <h2 className="text-3xl font-bold text-lightGray">Projects Manager</h2>
          <p className="text-lightGray/60">Add or remove projects</p>
        </div>
        <button
          type="button"
          onClick={handleOpenModal}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-gold text-dark font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all"
        >
          <FiPlus /> Add Project
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-dark border border-gold/20 rounded-lg overflow-hidden"
      >
        <table className="w-full">
          <thead>
            <tr className="border-b border-gold/20 bg-darkGray">
              <th className="px-6 py-4 text-left text-gold font-bold">Title</th>
              <th className="px-6 py-4 text-left text-gold font-bold">Category</th>
              <th className="px-6 py-4 text-left text-gold font-bold">Description</th>
              <th className="px-6 py-4 text-center text-gold font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project._id} className="border-b border-gold/10 hover:bg-darkGray transition-colors">
                <td className="px-6 py-4 text-lightGray">{project.title}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-gold/30 text-gold text-xs font-bold rounded-full capitalize">
                    {project.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-lightGray/70 text-sm truncate max-w-xs">{project.description}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center">
                    <button
                      type="button"
                      title="Delete Project"
                      onClick={() => handleDelete(project._id || '')}
                      className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-dark rounded-lg overflow-hidden max-w-2xl w-full border border-gold/30 max-h-96 overflow-y-auto"
          >
            <div className="flex justify-between items-center p-6 border-b border-gold/20">
              <h3 className="text-2xl font-bold text-lightGray">Add New Project</h3>
              <button type="button" title="Close Modal" onClick={handleCloseModal} className="text-gold hover:text-gold/80">
                <FiX size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-lightGray font-semibold mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-darkGray border border-gold/30 rounded-lg text-lightGray focus:outline-none focus:border-gold"
                  placeholder="Project title"
                />
              </div>

              <div>
                <label className="block text-lightGray font-semibold mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 bg-darkGray border border-gold/30 rounded-lg text-lightGray focus:outline-none focus:border-gold resize-none"
                  placeholder="Project description"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-lightGray font-semibold mb-2">Category</label>
                  <select
                    title="Project Category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-darkGray border border-gold/30 rounded-lg text-lightGray focus:outline-none focus:border-gold"
                  >
                    <option value="live">Live</option>
                    <option value="upcoming">Upcoming</option>
                  </select>
                </div>

                <div>
                  <label className="block text-lightGray font-semibold mb-2">Image URL</label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-darkGray border border-gold/30 rounded-lg text-lightGray focus:outline-none focus:border-gold"
                    placeholder="Image URL"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-2 bg-gradient-gold text-dark font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all"
                >
                  Add Project
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-6 py-2 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold/10 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
