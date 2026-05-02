// 'use client';

// import { motion } from 'framer-motion';
// import ThreeHero from './ThreeHero';

// function scrollToSection(id: string) {
//   document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
// }

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-dark"
//     >
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse" />
//         <div
//           className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse"
//           style={{ animationDelay: '1.5s' }}
//         />
//         <motion.div
//           className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold/[0.07] blur-[100px]"
//           animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.6, 0.35] }}
//           transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
//         />
//       </div>

//       {/* <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h1 className="sr-only">Raas Media &amp; Entertainment</h1>
//         <ThreeHero />
//         <motion.p
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="text-xl sm:text-2xl font-semibold text-gold tracking-wide mb-3"
//         >
//           We Support You Till The Last
//         </motion.p>
//         <motion.p
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.35, duration: 0.6 }}
//           className="text-lightGray/80 text-base sm:text-lg max-w-2xl mx-auto mb-10"
//         >
//           Premium video production, content creation, and entertainment services
//         </motion.p>
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.6 }}
//           className="flex flex-wrap justify-center gap-4"
//         >
//           <button
//             type="button"
//             onClick={() => scrollToSection('projects')}
//             className="px-8 py-3 rounded-lg font-bold bg-gradient-gold text-dark shadow-lg shadow-gold/30 hover:opacity-95 transition-opacity"
//           >
//             View Projects
//           </button>
//           <button
//             type="button"
//             onClick={() => scrollToSection('contact')}
//             className="px-8 py-3 rounded-lg font-bold border-2 border-gold text-gold hover:bg-gold/10 transition-colors"
//           >
//             Contact Us
//           </button>
//         </motion.div>
//       </div> */}
//       <div className="relative flex justify-center items-center mb-6">
//         <div className="absolute w-80 h-80 bg-gold/20 rounded-full blur-3xl animate-pulse" />
//         <ThreeHero />
//       </div>

//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//       >
//         <div className="text-gold text-3xl">↓</div>
//       </motion.div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';

import FilmIntro from '@/components/FilmIntro';
// export default function Hero() {
//   return (
//     <section className="relative h-screen flex items-center justify-center bg-gradient-dark overflow-hidden">

//       {/* Background glow */}
//       <div className="absolute w-[600px] h-[600px] bg-gold/10 blur-[120px] rounded-full" />

//       {/* Content */}
//       <div className="relative z-10 text-center px-4">

//         {/* Main Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl sm:text-6xl font-bold text-white tracking-wide"
//         >
//           RAAS MEDIA
//         </motion.h1>

//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="text-3xl sm:text-5xl font-semibold text-gold mt-2 tracking-wide"
//         >
//           & ENTERTAINMENT
//         </motion.h2>

//         {/* Tagline */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           className="mt-6 text-lg text-gray-300"
//         >
//           We Support You Till The Last
//         </motion.p>

//       </div>
//     </section>
//   );
// }
export default function Hero() {
  return <FilmIntro />;
}