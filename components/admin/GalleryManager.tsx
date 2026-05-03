// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FiPlus, FiTrash2, FiX } from 'react-icons/fi';
// import axios from 'axios';
// import { apiUrl } from '@/lib/api';

// interface GalleryItem {
//   _id?: string;
//   image: string;
//   alt?: string;
// }

// export default function GalleryManager() {
//   const [items, setItems] = useState<GalleryItem[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState<GalleryItem>({ image: '', alt: '' });

//   useEffect(() => {
//     fetchGallery();
//   }, []);

//   const fetchGallery = async () => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get(apiUrl('/api/gallery'));
//       setItems(response.data);
//     } catch (error) {
//       console.error('Error fetching gallery:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setFormData({ image: '', alt: '' });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('adminToken');
//       await axios.post(apiUrl('/api/gallery'), formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       handleCloseModal();
//       fetchGallery();
//     } catch (error) {
//       console.error('Error adding gallery image:', error);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     if (!window.confirm('Remove this image from the gallery?')) return;
//     try {
//       const token = localStorage.getItem('adminToken');
//       await axios.delete(apiUrl(`/api/gallery/${id}`), {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       fetchGallery();
//     } catch (error) {
//       console.error('Error deleting gallery image:', error);
//     }
//   };

//   if (isLoading) {
//     return <div className="text-center text-gold">Loading...</div>;
//   }

//   return (
//     <div className="space-y-8">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="flex justify-between items-center"
//       >
//         <div>
//           <h2 className="text-3xl font-bold text-lightGray">Gallery</h2>
//           <p className="text-lightGray/60">Add images shown on the homepage gallery section</p>
//         </div>
//         <button
//           type="button"
//           onClick={() => setIsModalOpen(true)}
//           className="flex items-center gap-2 px-6 py-3 bg-gradient-gold text-dark font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all"
//         >
//           <FiPlus /> Add image
//         </button>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.1 }}
//         className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
//       >
//         {items.length === 0 && (
//           <p className="text-lightGray/60 col-span-full text-center py-12 border border-gold/20 rounded-lg">
//             No gallery images yet. Use &quot;Add image&quot; to upload.
//           </p>
//         )}
//         {items.map((item) => (
//           <div
//             key={item._id}
//             className="bg-dark border border-gold/20 rounded-lg overflow-hidden group relative"
//           >
//             <div className="aspect-[4/3] relative bg-darkGray">
//               <img
//                 src={item.image}
//                 alt={item.alt || 'Gallery'}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-4 flex justify-end">
//               <button
//                 type="button"
//                 title="Remove image"
//                 onClick={() => handleDelete(item._id || '')}
//                 className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
//               >
//                 <FiTrash2 size={18} />
//               </button>
//             </div>
//           </div>
//         ))}
//       </motion.div>

//       {isModalOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           onClick={handleCloseModal}
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             onClick={(e) => e.stopPropagation()}
//             className="bg-dark rounded-lg overflow-hidden max-w-lg w-full border border-gold/30"
//           >
//             <div className="flex justify-between items-center p-6 border-b border-gold/20">
//               <h3 className="text-2xl font-bold text-lightGray">Add gallery image</h3>
//               <button type="button" title="Close" onClick={handleCloseModal} className="text-gold hover:text-gold/80">
//                 <FiX size={24} />
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className="p-6 space-y-6">
//               <div>
//                 <label className="block text-lightGray font-semibold mb-2">Image URL</label>
//                 <input
//                   type="url"
//                   name="image"
//                   value={formData.image}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 bg-darkGray border border-gold/30 rounded-lg text-lightGray focus:outline-none focus:border-gold"
//                   placeholder="https://..."
//                 />
//               </div>

//               <div>
//                 <label className="block text-lightGray font-semibold mb-2">Alt text (optional)</label>
//                 <input
//                   type="text"
//                   name="alt"
//                   value={formData.alt}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 bg-darkGray border border-gold/30 rounded-lg text-lightGray focus:outline-none focus:border-gold"
//                   placeholder="Short description for accessibility"
//                 />
//               </div>

//               <div className="flex gap-4 pt-2">
//                 <button
//                   type="submit"
//                   className="flex-1 px-6 py-2 bg-gradient-gold text-dark font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all"
//                 >
//                   Add image
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleCloseModal}
//                   className="flex-1 px-6 py-2 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold/10 transition-all"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// }
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiTrash2, FiX, FiImage, FiRefreshCw, FiUpload, FiLink } from 'react-icons/fi';
import axios from 'axios';
import { apiUrl } from '@/lib/api';

interface GalleryItem {
  _id?: string;
  image?: string;
  alt?: string;
}

const EMPTY_FORM: GalleryItem = { image: '', alt: '' };
type ImageMode = 'upload' | 'url';

export default function GalleryManager() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState<GalleryItem>(EMPTY_FORM);
  const [imageMode, setImageMode] = useState<ImageMode>('upload');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { fetchGallery(); }, []);

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

  const handleOpenModal = () => {
    setFormData(EMPTY_FORM);
    setImageFile(null);
    setImagePreview(null);
    setImageMode('upload');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData(EMPTY_FORM);
    setImageFile(null);
    setImagePreview(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file || !file.type.startsWith('image/')) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const token = localStorage.getItem('adminToken');

      if (imageMode === 'upload' && imageFile) {
        const fd = new FormData();
        fd.append('image', imageFile);
        if (formData.alt) fd.append('alt', formData.alt);
        await axios.post(apiUrl('/api/gallery'), fd, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post(apiUrl('/api/gallery'), formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      handleCloseModal();
      fetchGallery();
    } catch (error) {
      console.error('Error adding gallery image:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Remove this image from the gallery?')) return;
    setDeletingId(id);
    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(apiUrl(`/api/gallery/${id}`), {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchGallery();
    } catch (error) {
      console.error('Error deleting gallery image:', error);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-darkest px-4 py-6 sm:px-6 lg:px-8 space-y-6">

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-start justify-between gap-3"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-lightGray leading-tight">Gallery</h2>
          <p className="text-lightGray/50 text-sm mt-0.5">Images shown on the homepage</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={fetchGallery}
            disabled={isLoading}
            className="flex items-center gap-1.5 text-xs font-semibold text-gold border border-gold/30 rounded-lg px-3 py-2 bg-gold/5 active:bg-gold/10 transition-colors disabled:opacity-40"
            aria-label="Refresh"
          >
            <FiRefreshCw className={`text-sm ${isLoading ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>
          <button
            type="button"
            onClick={handleOpenModal}
            className="flex items-center gap-1.5 px-3 sm:px-5 py-2 bg-gradient-gold text-dark text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-gold/40 active:scale-95 transition-all"
          >
            <FiPlus className="text-base" />
            <span>Add</span>
          </button>
        </div>
      </motion.div>

      {/* ── Loading skeletons ── */}
      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-[4/3] rounded-xl bg-dark border border-gold/10 animate-pulse" />
          ))}
        </div>
      ) : items.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center gap-4 py-24 text-center bg-dark border border-gold/15 rounded-xl"
        >
          <FiImage className="text-gold/30 text-4xl" />
          <div>
            <p className="text-lightGray font-semibold">No images yet</p>
            <p className="text-lightGray/40 text-sm mt-1">Tap Add to upload your first image</p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
        >
          {items.map((item, i) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 + i * 0.04 }}
              className="relative group bg-dark border border-gold/20 rounded-xl overflow-hidden"
            >
              <div className="aspect-[4/3] bg-darkGray">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.alt || 'Gallery image'}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-darkGray to-darkest">
                    <FiImage className="text-3xl text-gold/20" aria-hidden />
                  </div>
                )}
              </div>

              {/* Overlay with delete — always visible on mobile, hover on desktop */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end justify-end p-2">
                <button
                  type="button"
                  onClick={() => handleDelete(item._id || '')}
                  disabled={deletingId === item._id}
                  className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity p-2 bg-red-500/80 text-white rounded-lg active:scale-95 disabled:opacity-40"
                  aria-label="Delete image"
                >
                  {deletingId === item._id
                    ? <FiRefreshCw size={15} className="animate-spin" />
                    : <FiTrash2 size={15} />
                  }
                </button>
              </div>

              {/* Alt text caption if present */}
              {item.alt && (
                <div className="px-3 py-2 bg-dark border-t border-gold/10">
                  <p className="text-lightGray/50 text-xs truncate">{item.alt}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}

      {!isLoading && items.length > 0 && (
        <p className="text-lightGray/30 text-xs text-center">{items.length} image{items.length !== 1 ? 's' : ''} in gallery</p>
      )}

      {/* ── Modal / Bottom sheet ── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-dark w-full sm:max-w-lg sm:rounded-xl border-t border-gold/30 sm:border rounded-t-2xl overflow-hidden"
            >
              {/* Drag handle — mobile only */}
              <div className="flex justify-center pt-3 pb-1 sm:hidden">
                <div className="w-10 h-1 rounded-full bg-gold/20" />
              </div>

              {/* Header */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-gold/20">
                <h3 className="text-lg font-bold text-lightGray">Add gallery image</h3>
                <button type="button" onClick={handleCloseModal} className="p-1.5 text-lightGray/50 hover:text-gold transition-colors rounded-lg">
                  <FiX size={20} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-5 space-y-4 overflow-y-auto max-h-[80vh] sm:max-h-none">

                {/* Image source toggle */}
                <div>
                  <label className="block text-lightGray/80 text-sm font-semibold mb-2">Image</label>

                  <div className="flex rounded-lg overflow-hidden border border-gold/20 mb-3 w-fit">
                    {(['upload', 'url'] as ImageMode[]).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => { setImageMode(mode); setImageFile(null); setImagePreview(null); }}
                        className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold transition-colors ${
                          imageMode === mode
                            ? 'bg-gold text-dark'
                            : 'text-lightGray/50 hover:text-lightGray bg-darkGray'
                        }`}
                      >
                        {mode === 'upload' ? <FiUpload size={12} /> : <FiLink size={12} />}
                        {mode === 'upload' ? 'Upload file' : 'Paste URL'}
                      </button>
                    ))}
                  </div>

                  {imageMode === 'upload' ? (
                    <div>
                      <div
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                        className="cursor-pointer border-2 border-dashed border-gold/25 hover:border-gold/50 rounded-xl transition-colors bg-darkGray/50"
                      >
                        {imagePreview ? (
                          <div className="relative">
                            <img
                              src={imagePreview}
                              alt="Preview"
                              className="w-full h-48 object-cover rounded-xl"
                            />
                            <button
                              type="button"
                              onClick={(e) => { e.stopPropagation(); setImageFile(null); setImagePreview(null); }}
                              className="absolute top-2 right-2 p-1.5 bg-black/60 text-white rounded-full hover:bg-black/80 transition-colors"
                            >
                              <FiX size={14} />
                            </button>
                            <div className="absolute bottom-2 left-3 text-white/70 text-xs truncate max-w-[80%] bg-black/40 px-2 py-0.5 rounded-full">
                              {imageFile?.name}
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center gap-2 py-10 px-4 text-center">
                            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                              <FiImage className="text-gold/60 text-xl" />
                            </div>
                            <div>
                              <p className="text-lightGray/70 text-sm font-medium">Tap to choose or drag & drop</p>
                              <p className="text-lightGray/30 text-xs mt-0.5">PNG, JPG, WebP up to 10 MB</p>
                            </div>
                          </div>
                        )}
                      </div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </div>
                  ) : (
                    <input
                      type="url"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="https://example.com/image.jpg"
                    />
                  )}
                </div>

                {/* Alt text */}
                <div>
                  <label className="block text-lightGray/80 text-sm font-semibold mb-1.5">
                    Alt text <span className="text-lightGray/30 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="alt"
                    value={formData.alt}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Short description for accessibility"
                  />
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-gold text-dark font-bold rounded-lg hover:shadow-lg hover:shadow-gold/40 active:scale-95 transition-all disabled:opacity-50"
                  >
                    {isSaving ? (
                      <><FiRefreshCw className="animate-spin" /> Uploading…</>
                    ) : (
                      <><FiPlus /> Add image</>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 px-5 py-3 border border-gold/40 text-gold font-bold rounded-lg hover:bg-gold/10 active:scale-95 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .input-field {
          width: 100%;
          padding: 0.6rem 0.875rem;
          background: var(--color-darkGray, #1a1a1a);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 0.5rem;
          color: var(--color-lightGray, #e5e5e5);
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.15s;
        }
        .input-field:focus {
          border-color: rgba(212, 175, 55, 0.8);
        }
      `}</style>
    </div>
  );
}
