// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import axios from 'axios';
// import { apiUrl } from '@/lib/api';

// interface GalleryItem {
//   _id: string;
//   image: string;
//   alt?: string;
// }

// export default function Gallery() {
//   const [galleryImages, setGalleryImages] = useState<GalleryItem[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     let cancelled = false;
//     (async () => {
//       try {
//         const response = await axios.get<GalleryItem[]>(apiUrl('/api/gallery'));
//         if (!cancelled) setGalleryImages(response.data);
//       } catch {
//         if (!cancelled) setGalleryImages([]);
//       } finally {
//         if (!cancelled) setIsLoading(false);
//       }
//     })();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   return (
//     <section className="py-20 bg-gradient-dark">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold text-lightGray mb-4">
//             Gallery & <span className="text-gold">Behind The Scenes</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
//         </motion.div>

//         {isLoading && (
//           <p className="text-center text-lightGray/60 py-12">Loading gallery…</p>
//         )}

//         {!isLoading && galleryImages.length === 0 && (
//           <p className="text-center text-lightGray/50 py-12 max-w-md mx-auto">
//             Gallery images will appear here once they are added from the admin panel.
//           </p>
//         )}

//         {!isLoading && galleryImages.length > 0 && (
//           <div className="grid md:grid-cols- gap-6">
//             {galleryImages.map((image, index) => (
//               <motion.div
//                 key={image._id}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.05 }}
//                 className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
//               >
//                 <img
//                   src={image.image}
//                   alt={image.alt || 'Gallery'}
//                   className="w-full h-full object-contain  group-hover:scale-125 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-dark/0 to-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiImage } from 'react-icons/fi';
import axios from 'axios';
import { apiUrl } from '@/lib/api';

interface GalleryItem {
  _id: string;
  image?: string;
  alt?: string;
}

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const response = await axios.get<GalleryItem[]>(apiUrl('/api/gallery'));
        if (!cancelled) setGalleryImages(response.data);
      } catch {
        if (!cancelled) setGalleryImages([]);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  // Keyboard nav for lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox(i => i !== null ? (i + 1) % galleryImages.length : null);
      if (e.key === 'ArrowLeft') setLightbox(i => i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, galleryImages.length]);

  // Assign grid span classes for a balanced masonry feel
  const spanClass = (i: number) => {
    const pattern = [
      'md:col-span-1 md:row-span-2', // tall
      'md:col-span-1 md:row-span-1', // small
      'md:col-span-1 md:row-span-1', // small
      'md:col-span-2 md:row-span-1', // wide
      'md:col-span-1 md:row-span-1', // small
      'md:col-span-1 md:row-span-1', // small
      'md:col-span-1 md:row-span-1', // small
      'md:col-span-1 md:row-span-2', // tall
    ];
    return pattern[i % pattern.length];
  };

  return (
    <section className="relative py-24 md:py-32 bg-dark border-t border-gold/10 overflow-hidden">

      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full border border-gold/5" />
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full border border-gold/5" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 md:mb-18"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-gold/60" />
            <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Visual Archive</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-5xl sm:text-6xl font-black text-lightGray leading-tight tracking-tight">
              Gallery &<br />
              <span className="text-gold italic font-light text-4xl sm:text-5xl">Behind The Scenes</span>
            </h2>
            {galleryImages.length > 0 && (
              <p className="text-lightGray/30 text-sm tabular-nums">
                {galleryImages.length} frame{galleryImages.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>
        </motion.div>

        {/* Loading skeleton */}
        {isLoading && (
          <div className="grid md:grid-cols-4 gap-3 auto-rows-[140px]">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={`rounded-xl bg-gold/5 animate-pulse ${spanClass(i)}`}
              />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!isLoading && galleryImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-24 border border-dashed border-gold/15 rounded-2xl"
          >
            <div className="text-gold/20 text-6xl mb-4 font-black">✦</div>
            <p className="text-lightGray/30 text-sm tracking-widest uppercase">
              Gallery images will appear here
            </p>
            <p className="text-lightGray/20 text-xs mt-2">Add them from the admin panel</p>
          </motion.div>
        )}

        {/* Masonry grid */}
        {!isLoading && galleryImages.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] gap-3">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.07, 0.4) }}
                viewport={{ once: true }}
                onClick={() => setLightbox(index)}
                className={`relative rounded-xl overflow-hidden group cursor-pointer border border-gold/10 hover:border-gold/35 transition-colors duration-300 ${spanClass(index)}`}
              >
                {image.image ? (
                  <img
                    src={image.image}
                    alt={image.alt || 'Gallery'}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-darkGray to-darkest flex items-center justify-center">
                    <FiImage className="text-4xl text-gold/20" aria-hidden />
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full border border-gold/60 bg-dark/50 backdrop-blur-sm flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 1h4M1 1v4M13 1h-4M13 1v4M1 13h4M1 13v-4M13 13h-4M13 13v-4" stroke="#c9a227" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                {/* Corner accent */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold/0 group-hover:border-gold/50 transition-colors duration-300" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold/0 group-hover:border-gold/50 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full max-h-[85vh] flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative rounded-xl overflow-hidden border border-gold/20 shadow-[0_40px_120px_rgba(0,0,0,0.8)]">
                {galleryImages[lightbox].image ? (
                  <img
                    src={galleryImages[lightbox].image}
                    alt={galleryImages[lightbox].alt || 'Gallery'}
                    className="max-h-[80vh] max-w-full object-contain"
                  />
                ) : (
                  <div className="min-h-[40vh] min-w-[50vw] max-w-full flex items-center justify-center bg-gradient-to-br from-darkGray to-darkest">
                    <FiImage className="text-6xl text-gold/20" aria-hidden />
                  </div>
                )}
                {/* Corner brackets */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-gold/60" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-gold/60" />
              </div>

              {/* Counter */}
              <div className="absolute bottom-[-36px] left-1/2 -translate-x-1/2 text-lightGray/30 text-xs tracking-widest tabular-nums">
                {lightbox + 1} / {galleryImages.length}
              </div>
            </motion.div>

            {/* Prev */}
            <button
              onClick={e => { e.stopPropagation(); setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-gold/20 bg-dark/60 backdrop-blur-sm flex items-center justify-center text-gold hover:border-gold/60 hover:bg-dark/80 transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={e => { e.stopPropagation(); setLightbox((lightbox + 1) % galleryImages.length); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-gold/20 bg-dark/60 backdrop-blur-sm flex items-center justify-center text-gold hover:border-gold/60 hover:bg-dark/80 transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full border border-gold/20 bg-dark/60 backdrop-blur-sm flex items-center justify-center text-lightGray/50 hover:text-gold hover:border-gold/50 transition-all duration-200"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
