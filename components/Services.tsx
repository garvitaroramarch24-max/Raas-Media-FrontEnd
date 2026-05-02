// 'use client';

// import { motion } from 'framer-motion';
// import { FiCamera, FiVideo, FiEdit3 } from 'react-icons/fi';

// const services = [
//   {
//     icon: FiCamera,
//     title: 'Pre-Production',
//     description: 'Comprehensive planning, scriptwriting, storyboarding, and location scouting for perfect execution.',
//   },
//   {
//     icon: FiVideo,
//     title: 'Production',
//     description: 'Professional filming with high-end equipment and experienced crew ensuring cinematic quality.',
//   },
//   {
//     icon: FiEdit3,
//     title: 'Post-Production',
//     description: 'Expert editing, color grading, sound design, and VFX to bring your vision to life.',
//   },
// ];

// export default function Services() {
//   return (
//     <section id="services" className="py-20 bg-gradient-dark">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold text-lightGray mb-4">
//             Our <span className="text-gold">Services</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((service, index) => {
//             const Icon = service.icon;
//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10 }}
//                 className="group p-8 bg-dark border border-gold/20 rounded-lg hover:border-gold/50 transition-all duration-300 cursor-pointer"
//               >
//                 {/* Icon */}
//                 <div className="mb-6 p-4 w-16 h-16 bg-gradient-gold/20 rounded-lg group-hover:bg-gradient-gold/40 transition-colors flex items-center justify-center">
//                   <Icon className="text-gold text-2xl" />
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-2xl font-bold text-lightGray mb-4">
//                   {service.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-lightGray/70 leading-relaxed">
//                   {service.description}
//                 </p>

//                 {/* Hover Line */}
//                 <div className="mt-6 h-1 bg-gradient-gold rounded-full w-0 group-hover:w-full transition-all duration-300" />
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import { motion } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Pre-Production',
    tagline: 'Where every frame begins',
    description:
      'Comprehensive planning, scriptwriting, storyboarding, and location scouting — turning raw concepts into production-ready blueprints.',
    pillars: ['Scripting', 'Storyboarding', 'Location scouting', 'Casting'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="5" width="16" height="20" rx="1.5" stroke="#c9a227" strokeWidth="1.3"/>
        <path d="M7 10h8M7 14h6M7 18h4" stroke="#c9a227" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="21" cy="9" r="4" stroke="#c9a227" strokeWidth="1.3"/>
        <path d="M21 7v2l1 1" stroke="#c9a227" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Production',
    tagline: 'Cinematic precision, every take',
    description:
      'Professional filming with high-end equipment and an experienced crew — delivering broadcast-ready footage with cinematic quality.',
    pillars: ['Direction', 'Cinematography', 'Live sets', 'Multi-cam'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="8" width="17" height="13" rx="1.5" stroke="#c9a227" strokeWidth="1.3"/>
        <path d="M19 11.5l7-3.5v12l-7-3.5V11.5z" stroke="#c9a227" strokeWidth="1.3" strokeLinejoin="round"/>
        <circle cx="9" cy="14" r="2.5" stroke="#c9a227" strokeWidth="1.3"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Post-Production',
    tagline: 'Where stories find their soul',
    description:
      'Expert editing, colour grading, sound design, and VFX — every cut and grade calibrated to bring your vision fully to life.',
    pillars: ['Editing', 'Colour grading', 'Sound design', 'VFX'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 14h6l3-8 4 16 3-8h4" stroke="#c9a227" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'OTT & Web Content',
    tagline: 'Built for digital-first audiences',
    description:
      'Vertical micro-dramas, web series, and platform-native content engineered for streaming platforms and digital channels.',
    pillars: ['Web series', 'Micro dramas', 'OTT delivery', 'Digital formats'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="5" width="24" height="16" rx="2" stroke="#c9a227" strokeWidth="1.3"/>
        <path d="M10 21h8M14 21v2" stroke="#c9a227" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M11 10l6 3-6 3V10z" stroke="#c9a227" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Commercials & TVCs',
    tagline: 'Ads that command attention',
    description:
      'High-impact ad films and television commercials for brands, agencies, and direct clients — from 30-second spots to full campaigns.',
    pillars: ['Ad films', 'Brand films', 'Campaign shoots', 'Corporate'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 10h12v8H4z" stroke="#c9a227" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M16 12l8-4v12l-8-4" stroke="#c9a227" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M7 6v2M10 6v2M13 6v2" stroke="#c9a227" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '06',
    title: 'AI & Virtual Production',
    tagline: 'Tomorrow\'s toolkit, today',
    description:
      'Integrating AI, virtual production stages, animation, and VFX to expand creative possibilities and deliver cost-efficient, scalable content.',
    pillars: ['AI integration', 'Virtual sets', 'Animation', 'VFX'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="5" stroke="#c9a227" strokeWidth="1.3"/>
        <path d="M14 3v4M14 21v4M3 14h4M21 14h4" stroke="#c9a227" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M6.22 6.22l2.83 2.83M18.95 18.95l2.83 2.83M6.22 21.78l2.83-2.83M18.95 9.05l2.83-2.83" stroke="#c9a227" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-dark border-t border-gold/10 overflow-hidden">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-gold/6 to-transparent" />
        <div className="absolute top-0 left-[60%] w-px h-full bg-gradient-to-b from-transparent via-gold/4 to-transparent" />
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-gold/5" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-gold/60" />
            <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase">What We Offer</p>
          </div>
          <div className="grid lg:grid-cols-[1fr_auto] items-end gap-6">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-lightGray leading-tight tracking-tight">
              Our{' '}
              <span className="text-gold italic font-light">Services</span>
            </h2>
            <p className="text-lightGray/40 text-sm max-w-[200px] leading-relaxed hidden lg:block border-l border-gold/20 pl-5">
              End-to-end production capabilities across every format and platform
            </p>
          </div>
        </motion.div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/8 rounded-2xl overflow-hidden border border-gold/10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.35) }}
              viewport={{ once: true }}
              className="group relative bg-dark hover:bg-[#141109] transition-colors duration-400 p-7 md:p-8 flex flex-col gap-5 cursor-default"
            >
              {/* Number + icon row */}
              <div className="flex items-start justify-between">
                <span className="text-gold/20 text-4xl font-black tabular-nums leading-none group-hover:text-gold/35 transition-colors duration-300">
                  {service.number}
                </span>
                <div className="w-12 h-12 rounded-xl border border-gold/15 bg-gold/5 flex items-center justify-center group-hover:border-gold/35 group-hover:bg-gold/10 transition-all duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Title + tagline */}
              <div>
                <h3 className="text-lg font-bold text-lightGray mb-1 group-hover:text-white transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gold/50 text-xs italic tracking-wide">{service.tagline}</p>
              </div>

              {/* Description */}
              <p className="text-lightGray/55 text-sm leading-[1.85] flex-1">
                {service.description}
              </p>

              {/* Pillars */}
              <div className="flex flex-wrap gap-2 pt-1">
                {service.pillars.map((p) => (
                  <span
                    key={p}
                    className="text-[10px] font-semibold tracking-wider uppercase text-lightGray/35 border border-gold/10 rounded-full px-2.5 py-1 group-hover:text-gold/60 group-hover:border-gold/20 transition-colors duration-300"
                  >
                    {p}
                  </span>
                ))}
              </div>

              {/* Bottom gold line reveal */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gold/40 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
