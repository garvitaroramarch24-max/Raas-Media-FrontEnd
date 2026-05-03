// 'use client';

// import { motion } from 'framer-motion';

// const pillars = [
//   { number: '30+', label: 'Years of combined experience' },
//   { number: '500+', label: 'Episodes directed' },
//   { number: '100+', label: 'TVCs produced' },
//   { number: '5+', label: 'OTT platforms' },
// ];

// const focusAreas = [
//   { icon: '◈', label: 'Film & OTT' },
//   { icon: '◈', label: 'Commercials' },
//   { icon: '◈', label: 'Corporate films' },
//   { icon: '◈', label: 'End-to-end production' },
//   { icon: '◈', label: 'AI & Virtual Production' },
// ];

// export default function About() {
//   return (
//     <section id="about" className="relative py-24 md:py-36 bg-dark border-b border-gold/10 overflow-hidden">

//       {/* Background decorative elements */}
//       <div className="pointer-events-none absolute inset-0 z-0">
//         {/* Large faint circle top-right */}
//         <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-gold/5" />
//         <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-gold/5" />
//         {/* Vertical gold line accent left */}
//         <div className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
//         {/* Diagonal text watermark */}
//         <div
//           className="absolute bottom-20 right-0 text-[120px] font-black text-gold/[0.03] leading-none select-none"
//           style={{ writingMode: 'vertical-rl', letterSpacing: '0.1em' }}
//         >
//           RAAS
//         </div>
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* ── Section label + headline ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="mb-16 md:mb-20"
//         >
//           <div className="flex items-center gap-4 mb-6">
//             <div className="h-px w-10 bg-gold/60" />
//             <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase">About Us</p>
//           </div>

//           <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end">
//             <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-lightGray leading-[1.0] tracking-tight">
//               <span className="text-gold">RAAS</span> Media<br />
//               <span className="text-lightGray/40 font-light italic text-4xl sm:text-5xl md:text-6xl">
//                 &amp; Entertainment
//               </span>
//             </h2>
//             <p className="text-lightGray/50 text-sm max-w-[220px] leading-relaxed hidden lg:block border-l border-gold/20 pl-5">
//               Strategic Content Creation Across Film, OTT & Commercial Platforms
//             </p>
//           </div>
//         </motion.div>

//         {/* ── Stats row ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/10 rounded-2xl overflow-hidden mb-16 md:mb-20 border border-gold/10"
//         >
//           {pillars.map((p, i) => (
//             <div key={i} className="bg-dark px-6 py-7 md:px-8 md:py-8 group hover:bg-[#1a1610] transition-colors duration-300">
//               <div className="text-3xl md:text-4xl font-black text-gold mb-1 tabular-nums">{p.number}</div>
//               <div className="text-xs text-lightGray/45 uppercase tracking-wider leading-snug">{p.label}</div>
//             </div>
//           ))}
//         </motion.div>

//         {/* ── Main content: asymmetric editorial grid ── */}
//         <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start mb-16 md:mb-20">

//           {/* Left: stacked paragraphs with pull-quote */}
//           <motion.div
//             initial={{ opacity: 0, x: -24 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.75 }}
//             viewport={{ once: true }}
//             className="space-y-0"
//           >
//             {/* Opening para */}
//             <p className="text-lightGray/80 text-base md:text-lg leading-[1.9] mb-6">
//               <strong className="text-lightGray font-semibold">RAAS Media & Entertainment</strong> is a
//               forward-thinking, Mumbai-based production company specializing in Web Shows, OTT Content, Vertical
//               Micro Dramas, Feature Films, Television Commercials, and Corporate Films. Founded by seasoned
//               industry professionals{' '}
//               <strong className="text-lightGray font-semibold">Sanjiv Chadha</strong>,{' '}
//               <strong className="text-lightGray font-semibold">Rajat Vyas</strong>,{' '}
//               <strong className="text-lightGray font-semibold">Amit Behl</strong>, and{' '}
//               <strong className="text-lightGray font-semibold">Ashish Behl</strong>.
//             </p>

//             {/* Pull quote */}
//             <blockquote className="border-l-2 border-gold pl-6 py-2 my-8">
//               <p className="text-lightGray/90 text-xl md:text-2xl font-light italic leading-relaxed">
//                 "Compelling, scalable, and market-relevant visual content that resonates across both digital and
//                 traditional media."
//               </p>
//             </blockquote>

//             <p className="text-lightGray/60 text-sm md:text-base leading-[1.9] mb-4">
//               Our core leadership team brings over three decades of multi-vertical experience across television,
//               advertising, feature films, and digital entertainment — complemented by a robust internal ecosystem of
//               directors, writers, cinematographers, and creative strategists.
//             </p>

//             <p className="teaxt-lightGray/60 text-sm md:text-base leading-[1.9]">
//               RAAS maintains a sharp focus on creative innovation, cost efficiency, and technological integration,
//               making us a reliable content partner for broadcasters, OTT platforms, global brands, and agencies alike.
//               From concept development and scripting to full-fledged production and post-production — all under one roof.
//             </p>
//           </motion.div>

//           {/* Right: image + future tech card stacked */}
//           <motion.div
//             initial={{ opacity: 0, x: 24 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.75 }}
//             viewport={{ once: true }}
//             className="space-y-5"
//           >
//             {/* Image */}
//             <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-gold/20 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
//               <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-gold/5 z-10 pointer-events-none" />
//               <img
//                 src="/images/ig-logo.png"
//                 alt="RAAS Media production"
//                 className="w-full h-full object-cover"
//               />
//               {/* Corner decoration */}
//               <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/50 z-20" />
//               <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold/50 z-20" />
//             </div>

//             {/* Future tech card */}
//             <div className="rounded-2xl border border-gold/15 bg-[#111009]/80 p-6 backdrop-blur-sm">
//               <p className="text-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-3">Future-ready</p>
//               <p className="text-lightGray/70 text-sm leading-relaxed">
//                 Venturing into <span className="text-lightGray">AI, Virtual Production, Animation, Gaming & VFX</span> —
//                 expanding storytelling capabilities while delivering cost-effective, scalable content solutions.
//               </p>
//             </div>
//           </motion.div>

//         </div>

//         {/* ── Focus areas ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="border-t border-gold/10 pt-10"
//         >
//           <p className="text-lightGray/30 text-[10px] tracking-[0.3em] uppercase mb-5">What we do</p>
//           <div className="flex flex-wrap gap-3">
//             {focusAreas.map(({ icon, label }) => (
//               <div
//                 key={label}
//                 className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/15 bg-gold/5 hover:bg-gold/10 hover:border-gold/35 transition-all duration-300 cursor-default"
//               >
//                 <span className="text-gold/40 group-hover:text-gold text-xs transition-colors duration-300">{icon}</span>
//                 <span className="text-sm font-medium text-lightGray/70 group-hover:text-lightGray transition-colors duration-300">{label}</span>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';

const pillars = [
  { number: '30+', label: 'Years of combined experience' },
  { number: '500+', label: 'Episodes directed' },
  { number: '100+', label: 'TVCs produced' },
  { number: '5+', label: 'OTT platforms' },
];

const focusAreas = [
  { icon: '◈', label: 'Film & OTT' },
  { icon: '◈', label: 'Commercials' },
  { icon: '◈', label: 'Corporate films' },
  { icon: '◈', label: 'End-to-end production' },
  { icon: '◈', label: 'AI & Virtual Production' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 bg-dark border-b border-gold/10 overflow-hidden">

      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-gold/5" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-gold/5" />
        <div className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
        <div
          className="absolute bottom-20 right-0 text-[120px] font-black text-gold/[0.03] leading-none select-none"
          style={{ writingMode: 'vertical-rl', letterSpacing: '0.1em' }}
        >
          RAAS
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-gold/60" />
            <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase">About Us</p>
          </div>

          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-lightGray leading-[1.0] tracking-tight">
              <span className="text-gold">RAAS</span> Media<br />
              <span className="text-lightGray/40 font-light italic text-4xl sm:text-5xl md:text-6xl">
                &amp; Entertainment
              </span>
            </h2>
            <p className="text-lightGray/50 text-sm max-w-[220px] leading-relaxed hidden lg:block border-l border-gold/20 pl-5">
              Strategic Content Creation Across Film, OTT & Commercial Platforms
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/10 rounded-2xl overflow-hidden mb-16 md:mb-20 border border-gold/10"
        >
          {pillars.map((p, i) => (
            <div key={i} className="bg-dark px-6 py-7 md:px-8 md:py-8 hover:bg-[#1a1610] transition">
              <div className="text-3xl md:text-4xl font-black text-gold mb-1">{p.number}</div>
              <div className="text-xs text-lightGray/45 uppercase tracking-wider">{p.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-[1fr_560px] gap-12 lg:gap-16 items-start mb-16 md:mb-20">

          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
          >
            <p className="text-lightGray/80 text-base md:text-lg leading-[1.9] mb-6">
              <strong className="text-lightGray">RAAS Media & Entertainment</strong> is a forward-thinking,
              Mumbai-based production company specializing in Web Shows, OTT Content, Vertical Micro Dramas,
              Feature Films, Television Commercials, and Corporate Films. Founded by{' '}
              <strong>Sanjiv Chadha</strong>, <strong>Rajat Vyas</strong>,{' '}
              <strong>Amit Behl</strong>, and <strong>Ashish Behl</strong>.
            </p>

            <blockquote className="border-l-2 border-gold pl-6 py-2 my-8">
              <p className="text-lightGray/90 text-xl md:text-2xl italic">
                "Compelling, scalable, and market-relevant visual content that resonates across digital and traditional media."
              </p>
            </blockquote>

            <p className="text-lightGray/60 text-sm md:text-base leading-[1.9] mb-4">
              Our leadership team brings decades of experience across television, advertising, films, and digital entertainment.
            </p>

            <p className="text-lightGray/60 text-sm md:text-base leading-[1.9]">
              From concept to post-production, we deliver end-to-end content solutions for brands, broadcasters, and OTT platforms.
            </p>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-gold/20 bg-black">
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-gold/5 z-10" />
              
              <img
                src="/images/ig-logo.png"
                alt="RAAS Media"
                className="w-full h-full object-contain p-6 transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/50" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold/50" />
            </div>

            <div className="rounded-2xl border border-gold/15 bg-[#111009]/80 p-6">
              <p className="text-gold text-xs uppercase mb-2">Future-ready</p>
              <p className="text-lightGray/70 text-sm">
                Expanding into AI, Virtual Production, Animation, Gaming & VFX.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Focus */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gold/10 pt-10"
        >
          <p className="text-lightGray/30 text-xs uppercase mb-5">What we do</p>

          <div className="flex flex-wrap gap-3">
            {focusAreas.map((f) => (
              <div key={f.label} className="px-5 py-2 rounded-full border border-gold/20 text-sm text-lightGray/70 hover:bg-gold/10 transition">
                {f.label}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}