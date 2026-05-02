// 'use client';

// import { motion } from 'framer-motion';



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
//         <em className="text-lightGray font-medium not-italic">Kayamat</em>, <em className="text-lightGray font-medium not-italic">Saarthi</em>,{' '}
//         <em className="text-lightGray font-medium not-italic">Hey Yahi To Hai Woh</em>,{' '}
//         <em className="text-lightGray font-medium not-italic">Kehta Hai Dil</em>,{' '}
//         <em className="text-lightGray font-medium not-italic">Fooltoo… Pagal Hai</em>,{' '}
//         <em className="text-lightGray font-medium not-italic">Hum Hai Na</em>,{' '}
//         <em className="text-lightGray font-medium not-italic">Hare Kaanch Ki Choodiyan</em>,{' '}
//         <em className="text-lightGray font-medium not-italic">Astitva… Ek Pehchaan</em>,{' '}
//         <em className="text-lightGray font-medium not-italic">Jhootha Kahin Ka</em>,{' '}
//         <em className="text-lightGray font-medium not-italic">Kalpana</em> — 500+ episodes directed across various
//         shows.
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
//     wide: true,
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
//     intro: 'Veteran director with 500+ episodes across television, OTT, and commercial productions.',
//     bio: [
//       'Sanjiv Chadha was born in Karnal, Haryana...',
//       'From Arya Vidya Mandir to DES Public School...',
//       'During college he was deeply involved in theatre...'
//     ],
//     work: workBlocks
//   },

//   {
//     name: 'Amit Behl',
//     role: 'Actor · Producer · Industry Leader',
//     image: '/images/amit behl.png', 
//     intro: 'Veteran of Indian entertainment with 30+ years across film, TV, theatre & OTT.',
//     bio: [
//       'Amit Behl is a veteran of Indian entertainment with over three decades of experience...',
//       'He trained under Ebrahim Alkazi and began at Prithvi Theatre...',
//       'Worked in 150+ TV serials, 50+ films, 20+ web series...'
//     ],
//     work: [
//       {
//         title: 'Major Work',
//         body: 'Aamrapali, Agnipankh, Fun2oosh, Jab We Met, Singham'
//       },
//       {
//         title: 'Leadership',
//         body: 'General Secretary of CINTAA (2015–2024), led COVID relief'
//       },
//       {
//         title: 'Awards',
//         body: 'Indian Telly Awards, Zee Rishtey Award, Dadasaheb Phalke Foundation Award'
//       }
//     ]
//   },

//   {
//     name: 'Rajat Vyas',
//     role: 'Writer · Creative Director',
//     image: '/images/rajat-vyas.png', 
//     intro: 'Acclaimed television writer with diverse storytelling across genres.',
//     bio: [
//       'Rajat Vyas is known for creating engaging television content...',
//       'Worked on Neeli Chhatri Wale, Lapataganj, Mrs & Mr Sharma...',
//       'Also contributed to films and OTT storytelling...'
//     ],
//     work: [
//       {
//         title: 'TV Shows',
//         body: 'Lapataganj, Tenali Rama, Naagin, Astitva, Hum Hain Na'
//       },
//       {
//         title: 'Films',
//         body: 'Nakshatra 27.13.20, Log Inhe Maamu Kyon Kehte Hain'
//       },
//       {
//         title: 'OTT',
//         body: 'Shubh Mangal Mein Dangal (Hungama)'
//       }
//     ]
//   }
// ];

// export default function Team() {
//   return (
//     <section id="team" className="py-20 md:py-28 bg-gradient-to-b from-dark via-[#12100c] to-dark border-t border-gold/10">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">Leadership</p>
//           <h2 className="text-4xl sm:text-5xl font-bold text-lightGray mb-4">
//             The <span className="text-gold">Team</span>
//           </h2>
//           <p className="text-lightGray/65 max-w-xl mx-auto text-base md:text-lg">
//             Meet the founding leadership driving RAAS Media & Entertainment.
//           </p>
//         </motion.div>

//         {teamMembers.map((member, index) => (
//           <motion.article
//             key={member.name}
//             initial={{ opacity: 0, y: 28 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.75, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             className="max-w-5xl mx-auto mb-16 rounded-2xl border border-gold/20 bg-darkGray/40 backdrop-blur-sm p-8 md:p-11 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
//           >

//             {/* HEADER */}
//             <header className="grid md:grid-cols-[260px_1fr] gap-8 pb-8 mb-8 border-b border-gold/15 items-center">

//               <div className="w-full h-[320px] md:h-[360px] rounded-xl overflow-hidden border border-gold/30 shadow-lg shadow-gold/20">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                 />
//               </div>

//               <div>
//                 <h3 className="text-3xl md:text-4xl font-bold text-lightGray mb-2">
//                   {member.name}
//                 </h3>
//                 <p className="text-lightGray/60 text-base md:text-lg mb-4">
//                   {member.role}
//                 </p>

//                 <div className="h-[2px] w-16 bg-gold mb-4"></div>

//                 <p className="text-lightGray/70 text-sm leading-relaxed">
//                   {member.intro}
//                 </p>
//               </div>

//             </header>

//             {/* BIO */}
//             <div className="space-y-4 text-lightGray/70 text-base leading-[1.85] mb-10">
//               {member.bio.map((para, i) => (
//                 <p key={i}>{para}</p>
//               ))}
//             </div>

//             {/* WORK */}
//             <div className="pt-8 border-t border-gold/12">
//               <h4 className="text-sm font-bold tracking-[0.12em] uppercase text-gold mb-6">
//                 Work profile
//               </h4>

//               <div className="grid sm:grid-cols-2 gap-5">
//                 {member.work.map((item, i) => (
//                   <div
//                     key={i}
//                     className="rounded-xl border border-gold/12 bg-dark/65 p-5 md:p-6"
//                   >
//                     <h5 className="text-xs font-bold uppercase tracking-wider text-gold mb-3">
//                       {item.title}
//                     </h5>
//                     <p className="text-sm text-lightGray/70 leading-relaxed">
//                       {item.body}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </motion.article>
//         ))}
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
      'Sanjiv Chadha was born in Karnal, Haryana...',
      'From Arya Vidya Mandir to DES Public School...',
      'During college he was deeply involved in theatre...',
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
      'Amit Behl is a veteran of Indian entertainment with over three decades of experience...',
      'He trained under Ebrahim Alkazi and began at Prithvi Theatre...',
      'Worked in 150+ TV serials, 50+ films, 20+ web series...',
    ],
    work: [
      { title: 'Major Work', body: 'Aamrapali, Agnipankh, Fun2oosh, Jab We Met, Singham' },
      { title: 'Leadership', body: 'General Secretary of CINTAA (2015–2024), led COVID relief' },
      { title: 'Awards', body: 'Indian Telly Awards, Zee Rishtey Award, Dadasaheb Phalke Foundation Award' },
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
      'Rajat Vyas is known for creating engaging television content...',
      'Worked on Neeli Chhatri Wale, Lapataganj, Mrs & Mr Sharma...',
      'Also contributed to films and OTT storytelling...',
    ],
    work: [
      { title: 'TV Shows', body: 'Lapataganj, Tenali Rama, Naagin, Astitva, Hum Hain Na' },
      { title: 'Films', body: 'Nakshatra 27.13.20, Log Inhe Maamu Kyon Kehte Hain' },
      { title: 'OTT', body: 'Shubh Mangal Mein Dangal (Hungama)' },
    ],
  },
  {
    name: 'Ashish Behl',
    role: 'Vice President · Digital Media · Content Strategy',
    image: '/images/ashish.png', 
    tag: 'Media Executive',
    stat: '30+ Years',
    intro:
      'Seasoned media executive with 30+ years across OTT, music, and digital content ecosystems.',

    bio: [
      'Ashish Behl is a seasoned media and entertainment executive with over 30 years of experience spanning digital content, music, video, and OTT platforms.',
      'Currently serving as Vice President at Hungama Digital Media Entertainment Pvt. Ltd., he leads content acquisitions, original programming, syndication, and operations.',
      'Under his leadership, Hungama has launched 60+ original shows and partnered with 450+ content labels across OTT, mobile, and digital platforms.',
      'He has held key roles at BoxTV (Times Internet), Reliance Big Entertainment, and Saregama, driving platform launches, content acquisition, and audience growth.',
      'His expertise includes P&L management, licensing, copyright negotiations, and end-to-end production oversight.',
      'Ashish has led strategic music licensing deals with Spotify, Amazon Prime Music, Gaana, and Resso, along with major publishing negotiations.',
      'He has worked with companies like Saregama, Tips Industries, Plus Music, and BMG Crescendo, promoting international artists and scaling music distribution.',
      'He holds a Bachelor of Commerce from Bombay University and is based in Mumbai.',
    ],

    work: [
      {
        title: 'OTT & Digital Leadership',
        body:
          'Led content strategy at Hungama, launching 60+ original shows and expanding partnerships with 450+ content labels.',
      },
      {
        title: 'Music & Licensing',
        body:
          'Handled licensing deals with Spotify, Amazon Prime Music, Gaana, and Resso; managed sync rights and publishing negotiations.',
      },
      {
        title: 'Industry Experience',
        body:
          'Worked with BoxTV (Times Internet), Reliance Big Entertainment, and Saregama, driving platform growth and content acquisition.',
      },
      {
        title: 'Global Work',
        body:
          'Managed international label operations in the Middle East with Universal Studios and promoted global artists in India.',
      },
    ],
  }
];

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
                {/* ── Collapsed row (always visible) ── */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left"
                >
                  <div className="flex items-center gap-5 px-6 py-5 md:px-8 md:py-6">

                    {/* Avatar */}
                    <div className={`relative shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 transition-all duration-300
                      ${isOpen ? 'border-gold shadow-[0_0_20px_rgba(201,162,39,0.3)]' : 'border-gold/30'}`}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Name + role */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h3 className="text-lg md:text-2xl font-bold text-lightGray">
                          {member.name}
                        </h3>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-gold bg-gold/10 border border-gold/20 rounded-full px-3 py-0.5">
                          {member.tag}
                        </span>
                      </div>
                      <p className="text-lightGray/50 text-sm truncate">{member.role}</p>
                    </div>

                    {/* Stat pill (desktop) */}
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

                  {/* Intro line visible when collapsed */}
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

                        {/* Two column: image + bio */}
                        <div className="grid md:grid-cols-[220px_1fr] gap-7 mb-8">
                          <div className="rounded-xl overflow-hidden border border-gold/20 h-[280px] md:h-[300px] shadow-lg shadow-gold/10">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="space-y-3 text-lightGray/65 text-sm leading-[1.9]">
                            {member.bio.map((para, i) => (
                              <p key={i}>{para}</p>
                            ))}
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
