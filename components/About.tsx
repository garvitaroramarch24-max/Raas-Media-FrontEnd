// 'use client';

// import { motion } from 'framer-motion';

// export default function About() {
//   return (
//     <section id="about" className="py-20 md:py-28 bg-dark border-b border-gold/10">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-center mb-14 md:mb-16"
//         >
//           <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">About Us</p>
//           <h2 className="text-4xl sm:text-5xl font-bold text-lightGray mb-4">
//             <span className="text-gold">RAAS Media</span> & Entertainment
//           </h2>
//           <p className="text-lg sm:text-xl text-lightGray/90 max-w-3xl mx-auto leading-relaxed font-medium">
//             Strategic Content Creation Across Film, OTT & Commercial Platforms
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-[minmax(280px,1fr)_minmax(320px,1.15fr)] gap-10 lg:gap-14 items-start mb-14">
//           <motion.div
//             initial={{ opacity: 0, x: -28 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.75 }}
//             viewport={{ once: true }}
//             className="relative rounded-xl overflow-hidden border border-gold/25 aspect-[4/5] max-h-[520px] lg:max-h-none lg:min-h-[320px]"
//           >
//             <div className="absolute inset-0 bg-gradient-to-br from-gold/15 to-transparent z-10 pointer-events-none" />
//             <img
//               src="/images/ig-logo.png"
//               alt="RAAS Media production"
//               className="w-full h-full object-cover  "
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 28 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.75 }}
//             viewport={{ once: true }}
//             className="space-y-5 text-lightGray/75 text-base leading-[1.85]"
//           >
//             <p>
//               <strong className="text-lightGray">RAAS Media & Entertainment</strong> is a forward-thinking,
//               Mumbai-based production company specializing in Web Shows, OTT Content, Vertical Micro Dramas, Feature
//               Films, Television Commercials, and Corporate Films. Founded by seasoned industry professionals{' '}
//               <strong className="text-lightGray">Sanjiv Chadha</strong>, <strong className="text-lightGray">Rajat Vyas</strong>,{' '}
//               <strong className="text-lightGray">Amit Behl</strong>, and <strong className="text-lightGray">Ashish Behl</strong>, the
//               company combines creative vision with operational excellence to deliver high-quality content for diverse
//               platforms and audiences.
//             </p>
//             <p>
//               Positioned at the intersection of entertainment and brand communication, RAAS operates with a clear
//               mandate: to produce compelling, scalable, and market-relevant visual content that resonates across both
//               digital and traditional media. With a deep understanding of content dynamics and viewer behaviour, the
//               company has successfully executed projects ranging from short-format ad films to full-scale cinematic
//               productions.
//             </p>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="max-w-4xl mx-auto pt-10 border-t border-gold/15 space-y-5 text-lightGray/70 text-base leading-[1.85]"
//         >
//           <p>
//             Our core leadership team brings over three decades of multi-vertical experience across television,
//             advertising, feature films, and digital entertainment. This is complemented by a robust internal ecosystem of
//             directors, writers, cinematographers, and creative strategists who ensure a seamless blend of storytelling,
//             aesthetics, and audience engagement.
//           </p>
//           <p>
//             RAAS maintains a sharp focus on creative innovation, cost efficiency, and technological integration, making
//             us a reliable content partner for broadcasters, OTT platforms, global brands, and agencies alike. Our
//             capabilities extend from concept development and scripting to full-fledged production and post-production
//             services — all under one roof.
//           </p>
//           <p>
//             The company is also venturing into new-age technologies such as Artificial Intelligence, Virtual Production,
//             Animation, Gaming, and VFX — making RAAS a future-ready production house. By integrating these innovations,
//             we not only expand our storytelling and production capabilities but also deliver cost-effective and scalable
//             content solutions.
//           </p>
//           <p>
//             With a scalable business model and a strong creative and operational backbone, RAAS Media & Entertainment is
//             well-positioned to capitalize on the growing demand for high-quality, original content in the Indian and
//             international markets.
//           </p>
//         </motion.div>

//         <motion.ul
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center gap-3 mt-12"
//           aria-label="Focus areas"
//         >
//           {['Film & OTT', 'Commercials', 'Corporate films', 'End-to-end production', 'AI & Virtual Production'].map(
//             (label) => (
//               <li
//                 key={label}
//                 className="px-4 py-2.5 rounded-full text-sm font-semibold text-lightGray bg-gold/10 border border-gold/25"
//               >
//                 {label}
//               </li>
//             )
//           )}
//         </motion.ul>
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

      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Large faint circle top-right */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-gold/5" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-gold/5" />
        {/* Vertical gold line accent left */}
        <div className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
        {/* Diagonal text watermark */}
        <div
          className="absolute bottom-20 right-0 text-[120px] font-black text-gold/[0.03] leading-none select-none"
          style={{ writingMode: 'vertical-rl', letterSpacing: '0.1em' }}
        >
          RAAS
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section label + headline ── */}
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

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/10 rounded-2xl overflow-hidden mb-16 md:mb-20 border border-gold/10"
        >
          {pillars.map((p, i) => (
            <div key={i} className="bg-dark px-6 py-7 md:px-8 md:py-8 group hover:bg-[#1a1610] transition-colors duration-300">
              <div className="text-3xl md:text-4xl font-black text-gold mb-1 tabular-nums">{p.number}</div>
              <div className="text-xs text-lightGray/45 uppercase tracking-wider leading-snug">{p.label}</div>
            </div>
          ))}
        </motion.div>

        {/* ── Main content: asymmetric editorial grid ── */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start mb-16 md:mb-20">

          {/* Left: stacked paragraphs with pull-quote */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="space-y-0"
          >
            {/* Opening para */}
            <p className="text-lightGray/80 text-base md:text-lg leading-[1.9] mb-6">
              <strong className="text-lightGray font-semibold">RAAS Media & Entertainment</strong> is a
              forward-thinking, Mumbai-based production company specializing in Web Shows, OTT Content, Vertical
              Micro Dramas, Feature Films, Television Commercials, and Corporate Films. Founded by seasoned
              industry professionals{' '}
              <strong className="text-lightGray font-semibold">Sanjiv Chadha</strong>,{' '}
              <strong className="text-lightGray font-semibold">Rajat Vyas</strong>,{' '}
              <strong className="text-lightGray font-semibold">Amit Behl</strong>, and{' '}
              <strong className="text-lightGray font-semibold">Ashish Behl</strong>.
            </p>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-gold pl-6 py-2 my-8">
              <p className="text-lightGray/90 text-xl md:text-2xl font-light italic leading-relaxed">
                "Compelling, scalable, and market-relevant visual content that resonates across both digital and
                traditional media."
              </p>
            </blockquote>

            <p className="text-lightGray/60 text-sm md:text-base leading-[1.9] mb-4">
              Our core leadership team brings over three decades of multi-vertical experience across television,
              advertising, feature films, and digital entertainment — complemented by a robust internal ecosystem of
              directors, writers, cinematographers, and creative strategists.
            </p>

            <p className="text-lightGray/60 text-sm md:text-base leading-[1.9]">
              RAAS maintains a sharp focus on creative innovation, cost efficiency, and technological integration,
              making us a reliable content partner for broadcasters, OTT platforms, global brands, and agencies alike.
              From concept development and scripting to full-fledged production and post-production — all under one roof.
            </p>
          </motion.div>

          {/* Right: image + future tech card stacked */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-gold/20 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-gold/5 z-10 pointer-events-none" />
              <img
                src="/images/ig-logo.png"
                alt="RAAS Media production"
                className="w-full h-full object-cover"
              />
              {/* Corner decoration */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/50 z-20" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold/50 z-20" />
            </div>

            {/* Future tech card */}
            <div className="rounded-2xl border border-gold/15 bg-[#111009]/80 p-6 backdrop-blur-sm">
              <p className="text-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-3">Future-ready</p>
              <p className="text-lightGray/70 text-sm leading-relaxed">
                Venturing into <span className="text-lightGray">AI, Virtual Production, Animation, Gaming & VFX</span> —
                expanding storytelling capabilities while delivering cost-effective, scalable content solutions.
              </p>
            </div>
          </motion.div>

        </div>

        {/* ── Focus areas ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gold/10 pt-10"
        >
          <p className="text-lightGray/30 text-[10px] tracking-[0.3em] uppercase mb-5">What we do</p>
          <div className="flex flex-wrap gap-3">
            {focusAreas.map(({ icon, label }) => (
              <div
                key={label}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/15 bg-gold/5 hover:bg-gold/10 hover:border-gold/35 transition-all duration-300 cursor-default"
              >
                <span className="text-gold/40 group-hover:text-gold text-xs transition-colors duration-300">{icon}</span>
                <span className="text-sm font-medium text-lightGray/70 group-hover:text-lightGray transition-colors duration-300">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
