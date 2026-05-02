'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiTrash2, FiX } from 'react-icons/fi';
import axios from 'axios';
import { apiUrl } from '@/lib/api';

interface GalleryItem {
  _id?: string;
  image: string;
  alt?: string;
}

export default function GalleryManager() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<GalleryItem>({ image: '', alt: '' });

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(apiUrl('/api/gallery'));
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching gallery:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ image: '', alt: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('adminToken');
      await axios.post(apiUrl('/api/gallery'), formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      handleCloseModal();
      fetchGallery();
    } catch (error) {
      console.error('Error adding gallery image:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Remove this image from the gallery?')) return;
    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(apiUrl(`/api/gallery/${id}`), {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchGallery();
    } catch (error) {
      console.error('Error deleting gallery image:', error);
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
          <h2 className="text-3xl font-bold text-lightGray">Gallery</h2>
          <p className="text-lightGray/60">Add images shown on the homepage gallery section</p>
        </div>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-gold text-dark font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all"
        >
          <FiPlus /> Add image
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {items.length === 0 && (
          <p className="text-lightGray/60 col-span-full text-center py-12 border border-gold/20 rounded-lg">
            No gallery images yet. Use &quot;Add image&quot; to upload.
          </p>
        )}
        {items.map((item) => (
          <div
            key={item._id}
            className="bg-dark border border-gold/20 rounded-lg overflow-hidden group relative"
          >
            <div className="aspect-[4/3] relative bg-darkGray">
              <img
                src={item.image}
                alt={item.alt || 'Gallery'}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex justify-end">
              <button
                type="button"
                title="Remove image"
                onClick={() => handleDelete(item._id || '')}
                className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
              >
                <FiTrash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </motion.div>

      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleCloseModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-dark rounded-lg overflow-hidden max-w-lg w-full border border-gold/30"
          >
            <div className="flex justify-between items-center p-6 border-b border-gold/20">
              <h3 className="text-2xl font-bold text-lightGray">Add gallery image</h3>
              <button type="button" title="Close" onClick={handleCloseModal} className="text-gold hover:text-gold/80">
                <FiX size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-lightGray font-semibold mb-2">Image URL</label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-darkGray border border-gold/30 rounded-lg text-lightGray focus:outline-none focus:border-gold"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-lightGray font-semibold mb-2">Alt text (optional)</label>
                <input
                  type="text"
                  name="alt"
                  value={formData.alt}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-darkGray border border-gold/30 rounded-lg text-lightGray focus:outline-none focus:border-gold"
                  placeholder="Short description for accessibility"
                />
              </div>

              <div className="flex gap-4 pt-2">
                <button
                  type="submit"
                  className="flex-1 px-6 py-2 bg-gradient-gold text-dark font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all"
                >
                  Add image
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
