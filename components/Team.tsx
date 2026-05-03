// // 'use client';

// // import { motion } from 'framer-motion';



// // const workBlocks = [
// //   {
// //     title: 'Films',
// //     body: (
// //       <>
// //         Pre-production — <em className="text-lightGray font-medium not-italic">Dumb Dumb Deega Deega</em> (association
// //         with Popcorn Entertainment, Sunil Shetty production).
// //       </>
// //     ),
// //   },
// //   {
// //     title: 'TV serials',
// //     body: (
// //       <>
// //         <em className="text-lightGray font-medium not-italic">Kahaani Ghar Ghar Kii</em>,{' '}
// //         <em className="text-lightGray font-medium not-italic">Kasautii Zindagii Kay</em>,{' '}
// //         <em className="text-lightGray font-medium not-italic">Kayamat</em>, <em className="text-lightGray font-medium not-italic">Saarthi</em>,{' '}
// //         <em className="text-lightGray font-medium not-italic">Hey Yahi To Hai Woh</em>,{' '}
// //         <em className="text-lightGray font-medium not-italic">Kehta Hai Dil</em>,{' '}
// //         <em className="text-lightGray font-medium not-italic">Fooltoo… Pagal Hai</em>,{' '}
// //         <em className="text-lightGray font-medium not-italic">Hum Hai Na</em>,{' '}
// //         <em className="text-lightGray font-medium not-italic">Hare Kaanch Ki Choodiyan</em>,{' '}
// //         <em className="text-lightGray font-medium not-italic">Astitva… Ek Pehchaan</em>,{' '}
// //         <em className="text-lightGray font-medium not-italic">Jhootha Kahin Ka</em>,{' '}
// //         <em className="text-lightGray font-medium not-italic">Kalpana</em> — 500+ episodes directed across various
// //         shows.
// //       </>
// //     ),
// //   },
// //   {
// //     title: 'TV commercials · Ad films · Documentary',
// //     body: (
// //       <>
// //         Nine ad films for New York Life Insurance Company (New York TV); Asian Sky Shop; Hathaway Cable Internet;
// //         documentary featuring Jimmy Carter (former President, USA); 100+ TVCs for online channels including Naaptol and
// //         Shop 18.
// //       </>
// //     ),
// //   },
// //   {
// //     title: 'OTT & web shows',
// //     body: (
// //       <>
// //         <em className="text-lightGray font-medium not-italic">Shubh Mangal Mein Dangal</em> (Hungama);{' '}
// //         <em className="text-lightGray font-medium not-italic">Manghadanta</em> (Watcho OTT / Dish TV);{' '}
// //         <em className="text-lightGray font-medium not-italic">Gill Harry</em> (Watcho OTT).
// //       </>
// //     ),
// //   },
// //   {
// //     title: 'Event direction',
// //     wide: true,
// //     body: (
// //       <>
// //         Mr Singh India (2007–2009); Miss Kaur (2009); Designer Year (2005–2009);{' '}
// //         <em className="text-lightGray font-medium not-italic">Aaja Nachle</em>; Mr Singh International (2007).
// //       </>
// //     ),
// //   },
// // ];

// // const teamMembers = [
// //   {
// //     name: 'Sanjiv Chadha',
// //     role: 'Founding leadership · Director · Creative',
// //     image: '/images/sanju.png',
// //     intro: 'Veteran director with 500+ episodes across television, OTT, and commercial productions.',
// //     bio: [
// //       'Sanjiv Chadha was born in Karnal, Haryana...',
// //       'From Arya Vidya Mandir to DES Public School...',
// //       'During college he was deeply involved in theatre...'
// //     ],
// //     work: workBlocks
// //   },

// //   {
// //     name: 'Amit Behl',
// //     role: 'Actor · Producer · Industry Leader',
// //     image: '/images/amit behl.png', 
// //     intro: 'Veteran of Indian entertainment with 30+ years across film, TV, theatre & OTT.',
// //     bio: [
// //       'Amit Behl is a veteran of Indian entertainment with over three decades of experience...',
// //       'He trained under Ebrahim Alkazi and began at Prithvi Theatre...',
// //       'Worked in 150+ TV serials, 50+ films, 20+ web series...'
// //     ],
// //     work: [
// //       {
// //         title: 'Major Work',
// //         body: 'Aamrapali, Agnipankh, Fun2oosh, Jab We Met, Singham'
// //       },
// //       {
// //         title: 'Leadership',
// //         body: 'General Secretary of CINTAA (2015–2024), led COVID relief'
// //       },
// //       {
// //         title: 'Awards',
// //         body: 'Indian Telly Awards, Zee Rishtey Award, Dadasaheb Phalke Foundation Award'
// //       }
// //     ]
// //   },

// //   {
// //     name: 'Rajat Vyas',
// //     role: 'Writer · Creative Director',
// //     image: '/images/rajat-vyas.png', 
// //     intro: 'Acclaimed television writer with diverse storytelling across genres.',
// //     bio: [
// //       'Rajat Vyas is known for creating engaging television content...',
// //       'Worked on Neeli Chhatri Wale, Lapataganj, Mrs & Mr Sharma...',
// //       'Also contributed to films and OTT storytelling...'
// //     ],
// //     work: [
// //       {
// //         title: 'TV Shows',
// //         body: 'Lapataganj, Tenali Rama, Naagin, Astitva, Hum Hain Na'
// //       },
// //       {
// //         title: 'Films',
// //         body: 'Nakshatra 27.13.20, Log Inhe Maamu Kyon Kehte Hain'
// //       },
// //       {
// //         title: 'OTT',
// //         body: 'Shubh Mangal Mein Dangal (Hungama)'
// //       }
// //     ]
// //   }
// // ];

// // export default function Team() {
// //   return (
// //     <section id="team" className="py-20 md:py-28 bg-gradient-to-b from-dark via-[#12100c] to-dark border-t border-gold/10">
// //       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <motion.div
// //           initial={{ opacity: 0, y: 24 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.7 }}
// //           viewport={{ once: true }}
// //           className="text-center mb-12"
// //         >
// //           <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Leadership</p>
// //           <h2 className="text-4xl sm:text-5xl font-bold text-lightGray mb-4">
// //             The <span className="text-gold">Team</span>
// //           </h2>
// //           <p className="text-lightGray/65 max-w-xl mx-auto text-base md:text-lg">
// //             Meet the founding leadership driving RAAS Media & Entertainment.
// //           </p>
// //         </motion.div>

// //         {teamMembers.map((member, index) => (
// //           <motion.article
// //             key={member.name}
// //             initial={{ opacity: 0, y: 28 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.75, delay: index * 0.1 }}
// //             viewport={{ once: true }}
// //             className="max-w-5xl mx-auto mb-16 rounded-2xl border border-gold/20 bg-darkGray/40 backdrop-blur-sm p-8 md:p-11 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
// //           >

// //             {/* HEADER */}
// //             <header className="grid md:grid-cols-[260px_1fr] gap-8 pb-8 mb-8 border-b border-gold/15 items-center">

// //               <div className="w-full h-[320px] md:h-[360px] rounded-xl overflow-hidden border border-gold/30 shadow-lg shadow-gold/20">
// //                 <img
// //                   src={member.image}
// //                   alt={member.name}
// //                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
// //                 />
// //               </div>

// //               <div>
// //                 <h3 className="text-3xl md:text-4xl font-bold text-lightGray mb-2">
// //                   {member.name}
// //                 </h3>
// //                 <p className="text-lightGray/60 text-base md:text-lg mb-4">
// //                   {member.role}
// //                 </p>

// //                 <div className="h-[2px] w-16 bg-gold mb-4"></div>

// //                 <p className="text-lightGray/70 text-sm leading-relaxed">
// //                   {member.intro}
// //                 </p>
// //               </div>

// //             </header>

// //             {/* BIO */}
// //             <div className="space-y-4 text-lightGray/70 text-base leading-[1.85] mb-10">
// //               {member.bio.map((para, i) => (
// //                 <p key={i}>{para}</p>
// //               ))}
// //             </div>

// //             {/* WORK */}
// //             <div className="pt-8 border-t border-gold/12">
// //               <h4 className="text-sm font-bold tracking-[0.12em] uppercase text-gold mb-6">
// //                 Work profile
// //               </h4>

// //               <div className="grid sm:grid-cols-2 gap-5">
// //                 {member.work.map((item, i) => (
// //                   <div
// //                     key={i}
// //                     className="rounded-xl border border-gold/12 bg-dark/65 p-5 md:p-6"
// //                   >
// //                     <h5 className="text-xs font-bold uppercase tracking-wider text-gold mb-3">
// //                       {item.title}
// //                     </h5>
// //                     <p className="text-sm text-lightGray/70 leading-relaxed">
// //                       {item.body}
// //                     </p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //           </motion.article>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const workBlocks = [
//   {
//     title: 'Films',
//     body: (
//       <>
//         Pre-production — <em className="text-lightGray font-medium not-italic">Dumb Dumb Deega Deega</em> (association
//         with Popcorn Entertainment, Sunil Shetty production).
//       </>
//     ),
//   },
//   {
//     title: 'TV serials',
//     body: (
//       <>
//         <em className="text-lightGray font-medium not-italic">Kahaani Ghar Ghar Kii</em>,{' '}
//         <em className="text-lightGray font-medium not-italic">Kasautii Zindagii Kay</em>,{' '}
//         <em className="text-lightGray font-medium not-italic">Kayamat</em>,{' '}
//         <em className="text-lightGray font-medium not-italic">Saarthi</em>,{' '}
//         <em className="text-lightGray font-medium not-italic">Hey Yahi To Hai Woh</em>,{' '}
//         <em className="text-lightGray font-medium not-italic">Kehta Hai Dil</em>,{' '}
//         <em className="text-lightGray font-medium not-italic">Fooltoo… Pagal Hai</em>,{' '}
//         <em className="text-lightGray font-medium not-italic">Hum Hai Na</em>,{' '}
//         <em className="text-lightGray font-medium not-italic">Hare Kaanch Ki Choodiyan</em>,{' '}
//         <em className="text-lightGray font-medium not-italic">Astitva… Ek Pehchaan</em>,{' '}
//         <em className="text-lightGray font-medium not-italic">Jhootha Kahin Ka</em>,{' '}
//         <em className="text-lightGray font-medium not-italic">Kalpana</em> — 500+ episodes directed across various shows.
//       </>
//     ),
//   },
//   {
//     title: 'TV commercials · Ad films · Documentary',
//     body: (
//       <>
//         Nine ad films for New York Life Insurance Company (New York TV); Asian Sky Shop; Hathaway Cable Internet;
//         documentary featuring Jimmy Carter (former President, USA); 100+ TVCs for online channels including Naaptol and
//         Shop 18.
//       </>
//     ),
//   },
//   {
//     title: 'OTT & web shows',
//     body: (
//       <>
//         <em className="text-lightGray font-medium not-italic">Shubh Mangal Mein Dangal</em> (Hungama);{' '}
//         <em className="text-lightGray font-medium not-italic">Manghadanta</em> (Watcho OTT / Dish TV);{' '}
//         <em className="text-lightGray font-medium not-italic">Gill Harry</em> (Watcho OTT).
//       </>
//     ),
//   },
//   {
//     title: 'Event direction',
//     body: (
//       <>
//         Mr Singh India (2007–2009); Miss Kaur (2009); Designer Year (2005–2009);{' '}
//         <em className="text-lightGray font-medium not-italic">Aaja Nachle</em>; Mr Singh International (2007).
//       </>
//     ),
//   },
// ];

// const teamMembers = [
//   {
//     name: 'Sanjiv Chadha',
//     role: 'Founding leadership · Director · Creative',
//     image: '/images/sanju.png',
//     tag: 'Director',
//     stat: '500+ Episodes',
//     intro: 'Veteran director with 500+ episodes across television, OTT, and commercial productions.',
//     bio: [
//       'Sanjiv Chadha was born in Karnal, Haryana...',
//       'From Arya Vidya Mandir to DES Public School...',
//       'During college he was deeply involved in theatre...',
//     ],
//     work: workBlocks,
//   },
//   {
//     name: 'Amit Behl',
//     role: 'Actor · Producer · Industry Leader',
//     image: '/images/amit behl.png',
//     tag: 'Actor & Producer',
//     stat: '30+ Years',
//     intro: 'Veteran of Indian entertainment with 30+ years across film, TV, theatre & OTT.',
//     bio: [
//       'Amit Behl is a veteran of Indian entertainment with over three decades of experience...',
//       'He trained under Ebrahim Alkazi and began at Prithvi Theatre...',
//       'Worked in 150+ TV serials, 50+ films, 20+ web series...',
//     ],
//     work: [
//       { title: 'Major Work', body: 'Aamrapali, Agnipankh, Fun2oosh, Jab We Met, Singham' },
//       { title: 'Leadership', body: 'General Secretary of CINTAA (2015–2024), led COVID relief' },
//       { title: 'Awards', body: 'Indian Telly Awards, Zee Rishtey Award, Dadasaheb Phalke Foundation Award' },
//     ],
//   },
//   {
//     name: 'Rajat Vyas',
//     role: 'Writer · Creative Director',
//     image: '/images/rajat-vyas.png',
//     tag: 'Writer',
//     stat: 'Multi-genre',
//     intro: 'Acclaimed television writer with diverse storytelling across genres.',
//     bio: [
//       'Rajat Vyas is known for creating engaging television content...',
//       'Worked on Neeli Chhatri Wale, Lapataganj, Mrs & Mr Sharma...',
//       'Also contributed to films and OTT storytelling...',
//     ],
//     work: [
//       { title: 'TV Shows', body: 'Lapataganj, Tenali Rama, Naagin, Astitva, Hum Hain Na' },
//       { title: 'Films', body: 'Nakshatra 27.13.20, Log Inhe Maamu Kyon Kehte Hain' },
//       { title: 'OTT', body: 'Shubh Mangal Mein Dangal (Hungama)' },
//     ],
//   },
//   {
//     name: 'Ashish Behl',
//     role: 'Vice President · Digital Media · Content Strategy',
//     image: '/images/ashish.png', 
//     tag: 'Media Executive',
//     stat: '30+ Years',
//     intro:
//       'Seasoned media executive with 30+ years across OTT, music, and digital content ecosystems.',

//     bio: [
//       'Ashish Behl is a seasoned media and entertainment executive with over 30 years of experience spanning digital content, music, video, and OTT platforms.',
//       'Currently serving as Vice President at Hungama Digital Media Entertainment Pvt. Ltd., he leads content acquisitions, original programming, syndication, and operations.',
//       'Under his leadership, Hungama has launched 60+ original shows and partnered with 450+ content labels across OTT, mobile, and digital platforms.',
//       'He has held key roles at BoxTV (Times Internet), Reliance Big Entertainment, and Saregama, driving platform launches, content acquisition, and audience growth.',
//       'His expertise includes P&L management, licensing, copyright negotiations, and end-to-end production oversight.',
//       'Ashish has led strategic music licensing deals with Spotify, Amazon Prime Music, Gaana, and Resso, along with major publishing negotiations.',
//       'He has worked with companies like Saregama, Tips Industries, Plus Music, and BMG Crescendo, promoting international artists and scaling music distribution.',
//       'He holds a Bachelor of Commerce from Bombay University and is based in Mumbai.',
//     ],

//     work: [
//       {
//         title: 'OTT & Digital Leadership',
//         body:
//           'Led content strategy at Hungama, launching 60+ original shows and expanding partnerships with 450+ content labels.',
//       },
//       {
//         title: 'Music & Licensing',
//         body:
//           'Handled licensing deals with Spotify, Amazon Prime Music, Gaana, and Resso; managed sync rights and publishing negotiations.',
//       },
//       {
//         title: 'Industry Experience',
//         body:
//           'Worked with BoxTV (Times Internet), Reliance Big Entertainment, and Saregama, driving platform growth and content acquisition.',
//       },
//       {
//         title: 'Global Work',
//         body:
//           'Managed international label operations in the Middle East with Universal Studios and promoted global artists in India.',
//       },
//     ],
//   }
// ];

// export default function Team() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const toggle = (i: number) => setActiveIndex(activeIndex === i ? null : i);

//   return (
//     <section
//       id="team"
//       className="py-20 md:py-28 bg-gradient-to-b from-dark via-[#12100c] to-dark border-t border-gold/10"
//     >
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Leadership</p>
//           <h2 className="text-4xl sm:text-5xl font-bold text-lightGray mb-4">
//             The <span className="text-gold">Team</span>
//           </h2>
//           <p className="text-lightGray/60 max-w-xl mx-auto text-base md:text-lg">
//             Meet the founding leadership driving RAAS Media & Entertainment.
//           </p>
//         </motion.div>

//         {/* Accordion cards */}
//         <div className="space-y-4">
//           {teamMembers.map((member, index) => {
//             const isOpen = activeIndex === index;

//             return (
//               <motion.div
//                 key={member.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className={`rounded-2xl border transition-colors duration-300 overflow-hidden
//                   ${isOpen
//                     ? 'border-gold/40 bg-[#1a1610]/80 shadow-[0_0_60px_rgba(201,162,39,0.08)]'
//                     : 'border-gold/15 bg-darkGray/40 hover:border-gold/30'
//                   }`}
//               >
//                 {/* ── Collapsed row (always visible) ── */}
//                 <button
//                   onClick={() => toggle(index)}
//                   className="w-full text-left"
//                 >
//                   <div className="flex items-center gap-5 px-6 py-5 md:px-8 md:py-6">

//                     {/* Avatar */}
//                     <div className={`relative shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 transition-all duration-300
//                       ${isOpen ? 'border-gold shadow-[0_0_20px_rgba(201,162,39,0.3)]' : 'border-gold/30'}`}
//                     >
//                       <img
//                         src={member.image}
//                         alt={member.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>

//                     {/* Name + role */}
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-center gap-3 flex-wrap mb-1">
//                         <h3 className="text-lg md:text-2xl font-bold text-lightGray">
//                           {member.name}
//                         </h3>
//                         <span className="text-[10px] font-bold tracking-widest uppercase text-gold bg-gold/10 border border-gold/20 rounded-full px-3 py-0.5">
//                           {member.tag}
//                         </span>
//                       </div>
//                       <p className="text-lightGray/50 text-sm truncate">{member.role}</p>
//                     </div>

//                     {/* Stat pill (desktop) */}
//                     <div className="hidden md:flex flex-col items-end gap-1 shrink-0">
//                       <span className="text-gold font-bold text-sm">{member.stat}</span>
//                       <span className="text-lightGray/40 text-xs">experience</span>
//                     </div>

//                     {/* Chevron */}
//                     <div className={`shrink-0 ml-2 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300
//                       ${isOpen ? 'border-gold bg-gold/10 rotate-180' : 'border-gold/20 bg-transparent rotate-0'}`}
//                     >
//                       <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//                         <path d="M2 4L6 8L10 4" stroke="#c9a227" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                       </svg>
//                     </div>

//                   </div>

//                   {/* Intro line visible when collapsed */}
//                   {!isOpen && (
//                     <p className="px-6 md:px-8 pb-5 text-sm text-lightGray/45 leading-relaxed">
//                       {member.intro}
//                     </p>
//                   )}
//                 </button>

//                 {/* ── Expanded content ── */}
//                 <AnimatePresence initial={false}>
//                   {isOpen && (
//                     <motion.div
//                       key="content"
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: 'auto' }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
//                       className="overflow-hidden"
//                     >
//                       <div className="px-6 md:px-8 pb-8">

//                         {/* Divider */}
//                         <div className="flex items-center gap-4 mb-7">
//                           <div className="h-px flex-1 bg-gold/15" />
//                           <span className="text-gold/40 text-xs tracking-widest uppercase">Profile</span>
//                           <div className="h-px flex-1 bg-gold/15" />
//                         </div>

//                         {/* Two column: image + bio */}
//                         <div className="grid md:grid-cols-[220px_1fr] gap-7 mb-8">
//                           <div className="rounded-xl overflow-hidden border border-gold/20 h-[280px] md:h-[300px] shadow-lg shadow-gold/10">
//                             <img
//                               src={member.image}
//                               alt={member.name}
//                               className="w-full h-full object-cover"
//                             />
//                           </div>
//                           <div className="space-y-3 text-lightGray/65 text-sm leading-[1.9]">
//                             {member.bio.map((para, i) => (
//                               <p key={i}>{para}</p>
//                             ))}
//                           </div>
//                         </div>

//                         {/* Work profile */}
//                         <div className="pt-6 border-t border-gold/10">
//                           <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-gold mb-5">
//                             Work profile
//                           </h4>
//                           <div className="grid sm:grid-cols-2 gap-4">
//                             {member.work.map((item, i) => (
//                               <div
//                                 key={i}
//                                 className="rounded-xl border border-gold/10 bg-dark/60 p-4 md:p-5"
//                               >
//                                 <h5 className="text-[10px] font-bold uppercase tracking-wider text-gold mb-2">
//                                   {item.title}
//                                 </h5>
//                                 <p className="text-xs text-lightGray/60 leading-relaxed">
//                                   {item.body}
//                                 </p>
//                               </div>
//                             ))}
//                           </div>
//                         </div>

//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//               </motion.div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const workBlocks = [
  {
    title: 'Films',
    body: (
      <>
        Pre-production — <em className="text-lightGray font-medium not-italic">Dumb Dumb Deega Deega</em> (association
        with Popcorn Entertainment, Sunil Shetty production).
      </>
    ),
  },
  {
    title: 'TV serials',
    body: (
      <>
        <em className="text-lightGray font-medium not-italic">Kahaani Ghar Ghar Kii</em>,{' '}
        <em className="text-lightGray font-medium not-italic">Kasautii Zindagii Kay</em>,{' '}
        <em className="text-lightGray font-medium not-italic">Kayamat</em>,{' '}
        <em className="text-lightGray font-medium not-italic">Saarthi</em>,{' '}
        <em className="text-lightGray font-medium not-italic">Hey Yahi To Hai Woh</em>,{' '}
        <em className="text-lightGray font-medium not-italic">Kehta Hai Dil</em>,{' '}
        <em className="text-lightGray font-medium not-italic">Fooltoo… Pagal Hai</em>,{' '}
        <em className="text-lightGray font-medium not-italic">Hum Hai Na</em>,{' '}
        <em className="text-lightGray font-medium not-italic">Hare Kaanch Ki Choodiyan</em>,{' '}
        <em className="text-lightGray font-medium not-italic">Astitva… Ek Pehchaan</em>,{' '}
        <em className="text-lightGray font-medium not-italic">Jhootha Kahin Ka</em>,{' '}
        <em className="text-lightGray font-medium not-italic">Kalpana</em> — 500+ episodes directed across various shows.
      </>
    ),
  },
  {
    title: 'TV commercials · Ad films · Documentary',
    body: (
      <>
        Nine ad films for New York Life Insurance Company (New York TV); Asian Sky Shop; Hathaway Cable Internet;
        documentary featuring Jimmy Carter (former President, USA); 100+ TVCs for online channels including Naaptol and
        Shop 18.
      </>
    ),
  },
  {
    title: 'OTT & web shows',
    body: (
      <>
        <em className="text-lightGray font-medium not-italic">Shubh Mangal Mein Dangal</em> (Hungama);{' '}
        <em className="text-lightGray font-medium not-italic">Manghadanta</em> (Watcho OTT / Dish TV);{' '}
        <em className="text-lightGray font-medium not-italic">Gill Harry</em> (Watcho OTT).
      </>
    ),
  },
  {
    title: 'Event direction',
    body: (
      <>
        Mr Singh India (2007–2009); Miss Kaur (2009); Designer Year (2005–2009);{' '}
        <em className="text-lightGray font-medium not-italic">Aaja Nachle</em>; Mr Singh International (2007).
      </>
    ),
  },
];

const teamMembers = [
  {
    name: 'Sanjiv Chadha',
    role: 'Founding leadership · Director · Creative',
    image: '/images/sanju.png',
    tag: 'Director',
    stat: '500+ Episodes',
    intro: 'Veteran director with 500+ episodes across television, OTT, and commercial productions.',
    bio: [
      'Sanjiv Chadha was born in Karnal, Haryana. His father, Shri Rana Pratap Chadha, worked as a junior engineer in PWD and his mother, Mrs. Santosh Chadha, was a homemaker. His parents wanted him to pursue Company Secretaries, but he was keen on theatre and film.',
      'From Arya Vidya Mandir, Rohtak, Haryana, to DES Public School, Charkhi Dadri, Haryana — the schools changed, but his passion for creating and indulging in art dominated. He started learning singing in a local music school. Being a notorious kid and a cinephile, he used to bunk school and watch the first show of every film released in his hometown.',
      "Due to the constant repositioning of his father's job, he returned to Karnal and completed his junior college at Dayal Singh College, Karnal, followed by his graduation at DAV College, Karnal.",
      'During his college days he was deeply engrossed in theatre and started acting and directing plays, which brought him many accolades in both acting and direction. In a youth drama festival where 200 colleges participated, he secured the first position and was awarded Best Director.',
    ],
    // Add image paths here to show the gallery section. Leave empty to hide it.
    gallery: [
      // { src: '/images/sanjiv/on-set.jpg', caption: 'On set — Kasautii Zindagii Kay' },
      // { src: '/images/sanjiv/best-director.jpg', caption: 'Best Director — Youth Drama Festival' },
      // { src: '/images/sanjiv/mr-singh-india.jpg', caption: 'Event direction — Mr Singh India' },
    ],
    work: workBlocks,
  },
  {
    name: 'Amit Behl',
    role: 'Actor · Producer · Industry Leader',
    image: '/images/amit behl.png',
    tag: 'Actor & Producer',
    stat: '30+ Years',
    intro: 'Veteran of Indian entertainment with 30+ years across film, TV, theatre & OTT.',
    bio: [
      'Amit Behl is a veteran of Indian entertainment with over three decades of experience across film, television, theatre, and OTT. An engineering and management graduate, he began his career at GE Medical and Blue Star Ltd before pursuing acting, training under Ebrahim Alkazi at Living Theatre Academy.',
      'Starting at Prithvi Theatre, he has performed in multiple languages — Hindi, Urdu, English, Marathi, and Gujarati — and collaborated with legends like Gulzar, Lillete Dubey, and Neena Gupta. His global work includes ties with Germany\'s Gripps Theatre and UNESCO.',
      'With nearly 150 TV serials, 50+ films, over 20 web series, and more than 15 Vertical Micro Dramas across languages, Amit is also a noted voice-over artist. He has earned accolades like the Indian Telly Awards, Zee Rishtey Award, and the Dadasaheb Phalke Foundation Award.',
      'As General Secretary of CINTAA (2015–2024), he championed artists\' rights and led COVID-19 relief efforts. A dedicated mentor and educator, he teaches at institutions like Symbiosis and Whistling Woods and regularly speaks at industry panels and lit fests.',
      'Honoured with the Maharashtra Gaurav Puraskar and Rashtra Shakti Award, he serves as Honorary General Secretary of the MESC (Media & Entertainment Skill Council). He is a regular TEDx speaker and sits on the board of 5 prestigious media schools.',
      'He is regularly invited by the Ministry of Information & Broadcasting, Cultural Ministry, FICCI, and NFDC for his views on the future of the Media & Entertainment Industry.',
      "He was the Founder & Creative Director of Ashtavinayak Cine Vision Ltd., responsible for commissioning and producing mega shows like Aamrapali on Doordarshan and films like Agnipankh, Fun2oosh, Jab We Met, and Singham. He produced 2 shows for Zee's Urdu channel UTN, 2 telefilms for Zee's Rishtey, and has co-produced The Jangipur Trial — a multi-starrer courtroom drama shot in unexplored locations of West Bengal.",
    ],
    // Add image paths here to show the gallery section. Leave empty to hide it.
    gallery: [
      // { src: '/images/amit/tedx.jpg', caption: 'TEDx Talk' },
      // { src: '/images/amit/cintaa-event.jpg', caption: 'CINTAA — General Secretary' },
      // { src: '/images/amit/singham-still.jpg', caption: 'Singham (film)' },
      // { src: '/images/amit/prithvi-theatre.jpg', caption: 'Prithvi Theatre' },
      // { src: '/images/amit/award-night.jpg', caption: 'Dadasaheb Phalke Foundation Award' },
    ],
    work: [
      {
        title: 'Films & Production',
        body: (
          <>
            Founder of Shri Ashtavinayak Cine Vision Ltd.;{' '}
            <em className="text-lightGray font-medium not-italic">Aamrapali</em> (Doordarshan),{' '}
            <em className="text-lightGray font-medium not-italic">Agnipankh</em>,{' '}
            <em className="text-lightGray font-medium not-italic">Fun2oosh</em>,{' '}
            <em className="text-lightGray font-medium not-italic">Jab We Met</em>,{' '}
            <em className="text-lightGray font-medium not-italic">Singham</em>; currently co-producing{' '}
            <em className="text-lightGray font-medium not-italic">The Jangipur Trial</em>.
          </>
        ),
      },
      {
        title: 'Television & OTT',
        body: "Nearly 150 TV serials, 20+ web series, 15+ Vertical Micro Dramas. Produced shows for Zee TV, Amazon MX Player, and Hungama OTT. 2 telefilms for Zee Rishtey and 2 shows for Zee Urdu channel UTN.",
      },
      {
        title: 'Industry Leadership',
        body: "General Secretary of CINTAA (2015–2024); Honorary General Secretary of MESC; regular invitee of Ministry of I&B, FICCI, and NFDC; board member of 5 media schools; regular TEDx speaker.",
      },
      {
        title: 'Awards & Recognition',
        body: 'Indian Telly Awards, Zee Rishtey Award, Dadasaheb Phalke Foundation Award, Maharashtra Gaurav Puraskar, Rashtra Shakti Award.',
      },
    ],
  },
  {
    name: 'Rajat Vyas',
    role: 'Writer · Creative Director',
    image: '/images/rajat-vyas.png',
    tag: 'Writer',
    stat: 'Multi-genre',
    intro: 'Acclaimed television writer with diverse storytelling across genres.',
    bio: [
      'Rajat Vyas is an acclaimed television writer known for his remarkable contribution to the Indian television industry. With an extensive portfolio spanning multiple genres, Rajat has built a reputation for creating engaging, compelling, and relatable content.',
      'His most notable works include popular TV shows such as Neeli Chhatri Wale (Zee TV), Lapataganj (Sab TV), Mrs. & Mr. Sharma Allahabadwale (Sab TV), and Hare Kaanch Ki Choodiyan (Sahara One).',
      "Rajat's writing career began with the J.D.C.P of ISRO Ahmedabad, where he contributed to over 20 serials, demonstrating his versatility and creativity early on. His experience spans a wide array of genres — from comedy to drama, romance to thrillers — capturing the essence of Indian storytelling with both heart and humour.",
      'He has also made his mark in the feature film industry with movies like Nakshatra 27.13.20 (2011) and Ye Mera Ghar (R.K Films, under production). His upcoming films include Log Inhe Maamu Kyon Kehte Hain (under production), Bhram (Soham Rockstar Production), and Lakshmi Aprasanna (Make Me Filmy Production).',
      "With an unparalleled passion for writing, Rajat continues to craft memorable stories that connect with audiences across the world. At RAAS Media & Entertainment, his talent and creative vision remain at the heart of the company's dynamic content creation process.",
    ],
    // Add image paths here to show the gallery section. Leave empty to hide it.
    gallery: [
      // { src: '/images/rajat/lapataganj.jpg', caption: 'Lapataganj — Sab TV' },
      // { src: '/images/rajat/tenali-rama.jpg', caption: 'Tenali Rama' },
      // { src: '/images/rajat/nakshatra-poster.jpg', caption: 'Nakshatra 27.13.20 (2011)' },
      // { src: '/images/rajat/writers-room.jpg', caption: "Writer's room" },
    ],
    work: [
      {
        title: 'Films',
        body: (
          <>
            <em className="text-lightGray font-medium not-italic">Nakshatra 27.13.20</em> (2011);{' '}
            <em className="text-lightGray font-medium not-italic">Abhi Bahut Kaam Baaki Hai</em> (Soham Rockstar Production);{' '}
            <em className="text-lightGray font-medium not-italic">Log Inhe Maamu Kyon Kehte Hain</em> (under production);{' '}
            <em className="text-lightGray font-medium not-italic">Bhram</em> (under production);{' '}
            <em className="text-lightGray font-medium not-italic">Lakshmi Aprasanna</em> (Make Me Filmy Production).
          </>
        ),
      },
      {
        title: 'TV Serials',
        body: 'Tota Weds Maina, Ek Doosre Se Karte Hain Pyaar Hum, Alakshmi, Mrs. Tendulkar, Aur Ek Badi Si Love Story, Adhoora Bandhan, Lapataganj, Tenali Rama, Khidki, Sab Jholmaal Hai, Chalti Ka Naam Gaadi, Peterson Hill, Prakriti, Pritam Pyaare Aur Woh, Chintu Chinki, Naagin, Astitva, Doli Saja Ke Rakhna, Vaidehi, Hum Hain Na, Pandey Aur Pandey, Bechara Big B Kya Kahein.',
      },
      {
        title: 'Documentary',
        body: 'Documentaries and docudramas for ISRO (J.D.C.P Ahmedabad) — contributed to 20+ serials.',
      },
      {
        title: 'OTT & Web Shows',
        body: (
          <>
            <em className="text-lightGray font-medium not-italic">Shubh Mangal Mein Dangal</em> (Hungama).
          </>
        ),
      },
    ],
  },
  {
    name: 'Ashish Behl',
    role: 'Vice President · Digital Media · Content Strategy',
    image: '/images/ashish.png',
    tag: 'Media Executive',
    stat: '30+ Years',
    intro: 'Seasoned media executive with 30+ years across OTT, music, and digital content ecosystems.',
    bio: [
      'Ashish Behl is a seasoned media and entertainment executive with over 30 years of experience spanning digital content, music, video, and OTT platforms. Currently serving as Vice President at Hungama Digital Media Entertainment Pvt. Ltd., he leads content acquisitions, original programming, syndication, and operations.',
      'Under his leadership, Hungama has launched over 60 original shows and secured partnerships with 450+ content labels, expanding Hungama\'s footprint across OTT, mobile, and digital platforms.',
      "Ashish has held key leadership roles at prominent companies like BoxTV (Times Internet), Reliance Big Entertainment, and Saregama, where he was instrumental in acquiring marquee content, launching new platforms, and driving audience growth through strategic initiatives. His expertise includes P&L management, licensing, copyright society negotiations, and end-to-end production oversight.",
      'With deep expertise in the music industry, Ashish has led strategic licensing deals with major platforms like Spotify, Amazon Prime Music, Gaana, and Resso, while also managing sync rights and music publishing negotiations with top copyright societies.',
      'His early career includes impactful stints at legacy music companies such as Saregama, Tips Industries, Plus Music, and BMG Crescendo, where he championed international music releases, promoted global artists in India, and drove high-growth compilation strategies.',
      "Ashish has worked closely with both Bollywood and international music ecosystems, handling everything from artist relations and product marketing to physical and digital distribution. He was instrumental in India's first Barbie Hindi music video and the launch of major international acts like Scorpions and Bardot in India.",
      'His career also includes international stints in the Middle East, where he managed label operations for Universal Studios. With deep-rooted relationships across Bollywood, Hollywood, and independent studios, Ashish is known for balancing creative vision with commercial execution.',
      'Ashish holds a Bachelor of Commerce from Bombay University and is based in Mumbai.',
    ],
    // Add image paths here to show the gallery section. Leave empty to hide it.
    gallery: [
      // { src: '/images/ashish/hungama-launch.jpg', caption: 'Hungama Original Series Launch' },
      // { src: '/images/ashish/spotify-deal.jpg', caption: 'Spotify Licensing Partnership' },
      // { src: '/images/ashish/middle-east.jpg', caption: 'Middle East — Universal Studios' },
      // { src: '/images/ashish/barbie-campaign.jpg', caption: "India's first Barbie Hindi music video" },
    ],
    work: [
      {
        title: 'OTT & Digital Leadership',
        body: 'Led content strategy at Hungama, launching 60+ original shows and expanding partnerships with 450+ content labels across OTT, mobile, and digital platforms.',
      },
      {
        title: 'Music & Licensing',
        body: "Strategic licensing deals with Spotify, Amazon Prime Music, Gaana, and Resso; managed sync rights and publishing negotiations. Pioneered India's first Barbie Hindi music video; launched Scorpions and Bardot in India.",
      },
      {
        title: 'Industry Experience',
        body: 'BoxTV (Times Internet), Reliance Big Entertainment, Saregama, Tips Industries, Plus Music, BMG Crescendo — driving platform growth, content acquisition, and audience development.',
      },
      {
        title: 'Global Work',
        body: 'Managed international label operations in the Middle East with Universal Studios; deep-rooted relationships across Bollywood, Hollywood, and independent studios.',
      },
    ],
  },
];

/* ─────────────────────────────────────────────
   GALLERY STRIP
   Only renders when the gallery array has actual image paths in it.
───────────────────────────────────────────── */
function GalleryStrip({ gallery }: { gallery: { src: string; caption?: string }[] }) {
  const images = gallery.filter((g) => g.src);
  if (images.length === 0) return null;

  return (
    <div className="mt-8 pt-7 border-t border-gold/10">
      <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-gold mb-4">Gallery</h4>
      <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
        {images.map((g, i) => (
          <div
            key={i}
            className="shrink-0 snap-start group relative w-44 h-32 md:w-56 md:h-40 rounded-xl overflow-hidden border border-gold/15 bg-dark/60"
          >
            <img
              src={g.src}
              alt={g.caption ?? `Photo ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {g.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-[10px] text-lightGray/85 leading-tight">{g.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function Team() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggle = (i: number) => setActiveIndex(activeIndex === i ? null : i);

  return (
    <section
      id="team"
      className="py-20 md:py-28 bg-gradient-to-b from-dark via-[#12100c] to-dark border-t border-gold/10"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Leadership</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-lightGray mb-4">
            The <span className="text-gold">Team</span>
          </h2>
          <p className="text-lightGray/60 max-w-xl mx-auto text-base md:text-lg">
            Meet the founding leadership driving RAAS Media & Entertainment.
          </p>
        </motion.div>

        {/* Accordion cards */}
        <div className="space-y-4">
          {teamMembers.map((member, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl border transition-colors duration-300 overflow-hidden
                  ${isOpen
                    ? 'border-gold/40 bg-[#1a1610]/80 shadow-[0_0_60px_rgba(201,162,39,0.08)]'
                    : 'border-gold/15 bg-darkGray/40 hover:border-gold/30'
                  }`}
              >
                {/* ── Collapsed row ── */}
                <button onClick={() => toggle(index)} className="w-full text-left">
                  <div className="flex items-center gap-5 px-6 py-5 md:px-8 md:py-6">

                    {/* Avatar */}
                    <div className={`relative shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 transition-all duration-300
                      ${isOpen ? 'border-gold shadow-[0_0_20px_rgba(201,162,39,0.3)]' : 'border-gold/30'}`}
                    >
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>

                    {/* Name + role */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h3 className="text-lg md:text-2xl font-bold text-lightGray">{member.name}</h3>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-gold bg-gold/10 border border-gold/20 rounded-full px-3 py-0.5">
                          {member.tag}
                        </span>
                      </div>
                      <p className="text-lightGray/50 text-sm truncate">{member.role}</p>
                    </div>

                    {/* Stat (desktop) */}
                    <div className="hidden md:flex flex-col items-end gap-1 shrink-0">
                      <span className="text-gold font-bold text-sm">{member.stat}</span>
                      <span className="text-lightGray/40 text-xs">experience</span>
                    </div>

                    {/* Chevron */}
                    <div className={`shrink-0 ml-2 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300
                      ${isOpen ? 'border-gold bg-gold/10 rotate-180' : 'border-gold/20 bg-transparent rotate-0'}`}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 4L6 8L10 4" stroke="#c9a227" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {!isOpen && (
                    <p className="px-6 md:px-8 pb-5 text-sm text-lightGray/45 leading-relaxed">
                      {member.intro}
                    </p>
                  )}
                </button>

                {/* ── Expanded content ── */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8">

                        {/* Divider */}
                        <div className="flex items-center gap-4 mb-7">
                          <div className="h-px flex-1 bg-gold/15" />
                          <span className="text-gold/40 text-xs tracking-widest uppercase">Profile</span>
                          <div className="h-px flex-1 bg-gold/15" />
                        </div>

                        {/* Bio: portrait + text */}
                        <div className="grid md:grid-cols-[220px_1fr] gap-7 mb-8">
                          <div className="rounded-xl overflow-hidden border border-gold/20 h-[280px] md:h-[300px] shadow-lg shadow-gold/10">
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="space-y-3 text-lightGray/65 text-sm leading-[1.9]">
                            {member.bio.map((para, i) => <p key={i}>{para}</p>)}
                          </div>
                        </div>

                        {/* Work profile */}
                        <div className="pt-6 border-t border-gold/10">
                          <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-gold mb-5">
                            Work profile
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-4">
                            {member.work.map((item, i) => (
                              <div
                                key={i}
                                className="rounded-xl border border-gold/10 bg-dark/60 p-4 md:p-5"
                              >
                                <h5 className="text-[10px] font-bold uppercase tracking-wider text-gold mb-2">
                                  {item.title}
                                </h5>
                                <p className="text-xs text-lightGray/60 leading-relaxed">
                                  {item.body}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Gallery — only shows if gallery array has actual image paths */}
                        <GalleryStrip gallery={member.gallery ?? []} />

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}