import React from 'react';
import { motion } from 'framer-motion';

interface StatItem {
  value: string;
  label: string;
  subLabel: string;
  description: string;
}

const stats: StatItem[] = [
  {
    value: '100%',
    label: 'Call answer rate',
    subLabel: 'Never miss another patient call.',
    description: 'Available 24/7/365.',
  },
  {
    value: '21+',
    label: 'Appointments booked/month',
    subLabel: 'Average per practice.',
    description: 'Recovered from previously missed calls.',
  },
  {
    value: '$10K+',
    label: 'Additional monthly revenue',
    subLabel: 'Estimated production',
    description: 'generated from recovered appointments.',
  },
];

export const ResultsROI: React.FC = () => {
  return (
    <section id="results" className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 text-xs font-semibold text-purple-600 mb-6 shadow-sm"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse" />
            Performance & Impact
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15]"
          >
            Turn missed calls into <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent font-extrabold">booked</span> appointments.
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 lg:gap-8 max-w-6xl mx-auto relative">
          {stats.map((stat, i) => (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col items-center md:items-start text-center md:text-left px-6 py-8 rounded-3xl transition-all duration-500 hover:bg-slate-50/50"
              >
                {/* Number */}
                <div className="mb-4 relative">
                  <span className="text-6xl sm:text-7xl font-extrabold tracking-tighter text-slate-900 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 bg-clip-text">
                    {stat.value}
                  </span>
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/30 to-indigo-500/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl sm:text-2xl text-slate-900 mb-3 tracking-tight group-hover:text-purple-600 transition-colors duration-300">
                  {stat.label}
                </h3>

                {/* Subtitle / Description */}
                <div className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                  {stat.subLabel}
                </div>
                <div className="text-slate-500 text-sm leading-relaxed mt-0.5">
                  {stat.description}
                </div>
              </motion.div>

              {/* Elegant Vertical Divider for Desktop */}
              {i < stats.length - 1 && (
                <div className="hidden md:block w-px bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100 self-stretch my-4 opacity-70" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsROI;
