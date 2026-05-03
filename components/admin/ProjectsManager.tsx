// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FiPlus, FiTrash2, FiX } from 'react-icons/fi';
// import axios from 'axios';
// import { apiUrl } from '@/lib/api';

// interface Project {
//   _id?: string;
//   title: string;
//   description: string;
//   category: string;
//   image: string;
// }

// export default function ProjectsManager() {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState<Project>({
//     title: '',
//     description: '',
//     category: 'live',
//     image: '',
//   });

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get(apiUrl('/api/projects'));
//       setProjects(response.data);
//     } catch (error) {
//       console.error('Error fetching projects:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleOpenModal = () => {
//     setFormData({ title: '', description: '', category: 'live', image: '' });
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setFormData({ title: '', description: '', category: 'live', image: '' });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('adminToken');
//       await axios.post(apiUrl('/api/projects'), formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       handleCloseModal();
//       fetchProjects();
//     } catch (error) {
//       console.error('Error saving project:', error);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     if (!window.confirm('Are you sure?')) return;
//     try {
//       const token = localStorage.getItem('adminToken');
//       await axios.delete(apiUrl(`/api/projects/${id}`), {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       fetchProjects();
//     } catch (error) {
//       console.error('Error deleting project:', error);
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
//           <h2 className="text-3xl font-bold text-lightGray">Projects Manager</h2>
//           <p className="text-lightGray/60">Add or remove projects</p>
//         </div>
//         <button
//           type="button"
//           onClick={handleOpenModal}
//           className="flex items-center gap-2 px-6 py-3 bg-gradient-gold text-dark font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all"
//         >
//           <FiPlus /> Add Project
//         </button>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.1 }}
//         className="bg-dark border border-gold/20 rounded-lg overflow-hidden"
//       >
//         <table className="w-full">
//           <thead>
//             <tr className="border-b border-gold/20 bg-darkGray">
//               <th className="px-6 py-4 text-left text-gold font-bold">Title</th>
//               <th className="px-6 py-4 text-left text-gold font-bold">Category</th>
//               <th className="px-6 py-4 text-left text-gold font-bold">Description</th>
//               <th className="px-6 py-4 text-center text-gold font-bold">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {projects.map((project) => (
//               <tr key={project._id} className="border-b border-gold/10 hover:bg-darkGray transition-colors">
//                 <td className="px-6 py-4 text-lightGray">{project.title}</td>
//                 <td className="px-6 py-4">
//                   <span className="px-3 py-1 bg-gold/30 text-gold text-xs font-bold rounded-full capitalize">
//                     {project.category}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 text-lightGray/70 text-sm truncate max-w-xs">{project.description}</td>
//                 <td className="px-6 py-4">
//                   <div className="flex justify-center">
//                     <button
//                       type="button"
//                       title="Delete Project"
//                       onClick={() => handleDelete(project._id || '')}
//                       className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
//                     >
//                       <FiTrash2 size={18} />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </motion.div>

//       {isModalOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={handleCloseModal}
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//             onClick={(e) => e.stopPropagation()}
//             className="bg-dark rounded-lg overflow-hidden max-w-2xl w-full border border-gold/30 max-h-96 overflow-y-auto"
//           >
//             <div className="flex justify-between items-center p-6 border-b border-gold/20">
//               <h3 className="text-2xl font-bold text-lightGray">Add New Project</h3>
//               <button type="button" title="Close Modal" onClick={handleCloseModal} className="text-gold hover:text-gold/80">
//                 <FiX size={24} />
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className="p-6 space-y-6">
//               <div>
//                 <label className="block text-lightGray font-semibold mb-2">Title</label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 bg-darkGray border border-gold/30 rounded-lg text-lightGray focus:outline-none focus:border-gold"
//                   placeholder="Project title"
//                 />
//               </div>

//               <div>
//                 <label className="block text-lightGray font-semibold mb-2">Description</label>
//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   required
//                   rows={3}
//                   className="w-full px-4 py-2 bg-darkGray border border-gold/30 rounded-lg text-lightGray focus:outline-none focus:border-gold resize-none"
//                   placeholder="Project description"
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-lightGray font-semibold mb-2">Category</label>
//                   <select
//                     title="Project Category"
//                     name="category"
//                     value={formData.category}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 bg-darkGray border border-gold/30 rounded-lg text-lightGray focus:outline-none focus:border-gold"
//                   >
//                     <option value="live">Live</option>
//                     <option value="upcoming">Upcoming</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-lightGray font-semibold mb-2">Image URL</label>
//                   <input
//                     type="url"
//                     name="image"
//                     value={formData.image}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 bg-darkGray border border-gold/30 rounded-lg text-lightGray focus:outline-none focus:border-gold"
//                     placeholder="Image URL"
//                   />
//                 </div>
//               </div>

//               <div className="flex gap-4 pt-4">
//                 <button
//                   type="submit"
//                   className="flex-1 px-6 py-2 bg-gradient-gold text-dark font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all"
//                 >
//                   Add Project
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
import { FiPlus, FiTrash2, FiX, FiFilm, FiRefreshCw, FiUpload, FiLink, FiImage } from 'react-icons/fi';
import axios from 'axios';
import { apiUrl } from '@/lib/api';

interface Project {
  _id?: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

const EMPTY_FORM: Project = { title: '', description: '', category: 'live', image: '' };
type ImageMode = 'upload' | 'url';

export default function ProjectsManager() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState<Project>(EMPTY_FORM);
  const [imageMode, setImageMode] = useState<ImageMode>('upload');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { fetchProjects(); }, []);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleDropZone = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file || !file.type.startsWith('image/')) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const token = localStorage.getItem('adminToken');

      if (imageMode === 'upload' && imageFile) {
        // Send as multipart/form-data with the file
        const fd = new FormData();
        fd.append('title', formData.title);
        fd.append('description', formData.description);
        fd.append('category', formData.category);
        fd.append('image', imageFile);
        await axios.post(apiUrl('/api/projects'), fd, {
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
        });
      } else {
        // Send as JSON with image URL
        await axios.post(apiUrl('/api/projects'), formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      handleCloseModal();
      fetchProjects();
    } catch (error) {
      console.error('Error saving project:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this project?')) return;
    setDeletingId(id);
    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(apiUrl(`/api/projects/${id}`), {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
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
          <h2 className="text-2xl sm:text-3xl font-bold text-lightGray leading-tight">Projects</h2>
          <p className="text-lightGray/50 text-sm mt-0.5">Manage your catalogue</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={fetchProjects}
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
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-20 rounded-xl bg-dark border border-gold/10 animate-pulse" />
          ))}
        </div>
      ) : projects.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center gap-4 py-20 text-center bg-dark border border-gold/15 rounded-xl"
        >
          <FiFilm className="text-gold/30 text-4xl" />
          <div>
            <p className="text-lightGray font-semibold">No projects yet</p>
            <p className="text-lightGray/40 text-sm mt-1">Tap Add to create your first one</p>
          </div>
        </motion.div>
      ) : (
        <>
          {/* ── Desktop table — hidden on small screens ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="hidden md:block bg-dark border border-gold/20 rounded-xl overflow-hidden"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-gold/20 bg-darkGray">
                  <th className="px-5 py-3.5 text-left text-gold text-sm font-bold">Title</th>
                  <th className="px-5 py-3.5 text-left text-gold text-sm font-bold">Category</th>
                  <th className="px-5 py-3.5 text-left text-gold text-sm font-bold">Description</th>
                  <th className="px-5 py-3.5 text-center text-gold text-sm font-bold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project._id} className="border-b border-gold/10 hover:bg-darkGray/60 transition-colors">
                    <td className="px-5 py-4 text-lightGray font-medium">{project.title}</td>
                    <td className="px-5 py-4">
                      <CategoryBadge category={project.category} />
                    </td>
                    <td className="px-5 py-4 text-lightGray/60 text-sm truncate max-w-xs">{project.description}</td>
                    <td className="px-5 py-4">
                      <div className="flex justify-center">
                        <DeleteButton
                          onClick={() => handleDelete(project._id || '')}
                          loading={deletingId === project._id}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* ── Mobile card list — hidden on md+ ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="md:hidden space-y-3"
          >
            {projects.map((project, i) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="bg-dark border border-gold/20 rounded-xl p-4 flex items-start gap-3"
              >
                {/* Category dot */}
                <span className={`mt-1 shrink-0 w-2.5 h-2.5 rounded-full ${project.category === 'live' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-lightGray font-semibold text-sm truncate">{project.title}</span>
                    <CategoryBadge category={project.category} />
                  </div>
                  {project.description && (
                    <p className="text-lightGray/50 text-xs mt-1 line-clamp-2">{project.description}</p>
                  )}
                </div>
                <DeleteButton
                  onClick={() => handleDelete(project._id || '')}
                  loading={deletingId === project._id}
                />
              </motion.div>
            ))}
          </motion.div>

          <p className="text-lightGray/30 text-xs text-center">{projects.length} project{projects.length !== 1 ? 's' : ''} total</p>
        </>
      )}

      {/* ── Modal ── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4"
          >
            {/* Bottom sheet on mobile, centered modal on sm+ */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-dark w-full sm:max-w-lg sm:rounded-xl border-t border-gold/30 sm:border rounded-t-2xl overflow-hidden"
            >
              {/* Drag handle (mobile only) */}
              <div className="flex justify-center pt-3 pb-1 sm:hidden">
                <div className="w-10 h-1 rounded-full bg-gold/20" />
              </div>

              {/* Modal header */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-gold/20">
                <h3 className="text-lg font-bold text-lightGray">Add New Project</h3>
                <button type="button" onClick={handleCloseModal} className="p-1.5 text-lightGray/50 hover:text-gold transition-colors rounded-lg">
                  <FiX size={20} />
                </button>
              </div>

              {/* Form — scrollable if content overflows on small screens */}
              <form onSubmit={handleSubmit} className="p-5 space-y-4 overflow-y-auto max-h-[75vh] sm:max-h-none">
                <Field label="Title">
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    autoFocus
                    className="input-field"
                    placeholder="Project title"
                  />
                </Field>

                <Field label="Description">
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="input-field resize-none"
                    placeholder="Short description"
                  />
                </Field>

                {/* Category */}
                <Field label="Category">
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="live">Live</option>
                    <option value="upcoming">Upcoming</option>
                  </select>
                </Field>

                {/* Image — tab toggle between Upload and URL */}
                <div>
                  <label className="block text-lightGray/80 text-sm font-semibold mb-2">Image</label>

                  {/* Toggle tabs */}
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
                      {/* Drop zone */}
                      <div
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleDropZone}
                        onClick={() => fileInputRef.current?.click()}
                        className="cursor-pointer border-2 border-dashed border-gold/25 hover:border-gold/50 rounded-xl transition-colors bg-darkGray/50"
                      >
                        {imagePreview ? (
                          <div className="relative">
                            <img
                              src={imagePreview}
                              alt="Preview"
                              className="w-full h-40 object-cover rounded-xl"
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
                          <div className="flex flex-col items-center justify-center gap-2 py-8 px-4 text-center">
                            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                              <FiImage className="text-gold/60 text-lg" />
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
                      required={imageMode === 'url'}
                      className="input-field"
                      placeholder="https://example.com/image.jpg"
                    />
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-gold text-dark font-bold rounded-lg hover:shadow-lg hover:shadow-gold/40 active:scale-95 transition-all disabled:opacity-60"
                  >
                    {isSaving ? (
                      <><FiRefreshCw className="animate-spin" /> Saving…</>
                    ) : (
                      <><FiPlus /> Add Project</>
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

      {/* ── Shared input styles injected via a style tag ── */}
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

/* ── Small reusable pieces ── */

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-lightGray/80 text-sm font-semibold mb-1.5">{label}</label>
      {children}
    </div>
  );
}

function CategoryBadge({ category }: { category: string }) {
  const isLive = category === 'live';
  return (
    <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${
      isLive ? 'bg-emerald-500/15 text-emerald-400' : 'bg-amber-500/15 text-amber-400'
    }`}>
      {category}
    </span>
  );
}

function DeleteButton({ onClick, loading }: { onClick: () => void; loading: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className="shrink-0 p-2 bg-red-500/15 text-red-400 rounded-lg hover:bg-red-500/25 active:scale-95 transition-all disabled:opacity-40"
      aria-label="Delete project"
    >
      {loading ? <FiRefreshCw size={16} className="animate-spin" /> : <FiTrash2 size={16} />}
    </button>
  );
}