import React from 'react';
import { motion } from 'framer-motion';

const trustBadges = [
  { label: 'HIPAA-conscious Architecture', icon: 'shield' },
  { label: 'Live in 7 Days', icon: 'zap' },
  { label: '24/7 Availability', icon: 'headphones' },
  { label: 'No Long-Term Contracts', icon: 'check-circle' },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const badgeFade = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative section-padding overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -top-40 left-0 w-[400px] h-[400px] bg-primary/4 blur-[100px] rounded-full pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="container-custom max-w-5xl relative z-10 text-center"
      >
        <motion.h2
          variants={fadeSlideUp}
          className="text-[clamp(2rem,5vw,3.75rem)] font-black tracking-tight text-white leading-[1.12]"
        >
          <span>
            Join{' '}
            <span className="text-secondary">
              15+
            </span>{' '}
            dental practices
          </span>
          <br />
          <span>already growing with</span>
          <br />
          <span>
            CareReceptionist<span className="text-secondary"> AI</span>.
          </span>
        </motion.h2>

        <motion.p
          variants={fadeSlideUp}
          className="mt-8 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Book a free 10-minute demo and see how CareReceptionist AI answers
          calls, books appointments, and helps recover missed revenue.
        </motion.p>

        <motion.div
          variants={fadeSlideUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="https://calendly.com/vikas-p-2706/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 rounded-xl bg-secondary px-8 py-4 text-base sm:text-lg font-black tracking-wide text-white shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 w-full sm:w-auto"
          >
            Book Your Free Demo
            <svg
              className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>

          <a
            href="https://calendly.com/vikas-p-2706/30min"
            className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 rounded-xl border border-white/10 bg-white/[0.03] text-white/50 hover:bg-white/[0.08] hover:border-white/20 hover:text-white transition-all duration-300 w-full sm:w-auto"
          >
            <span className="text-sm font-semibold">Talk to our team</span>
            <span className="text-sm font-bold text-white">→</span>
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center items-center gap-3 max-w-3xl mx-auto"
        >
          {trustBadges.map((badge, i) => (
            <motion.span
              key={badge.label}
              custom={i}
              variants={badgeFade}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white/[0.03] border border-white/10 text-white/50 hover:border-secondary/40 hover:text-white/80 hover:-translate-y-0.5 transition-all duration-300 cursor-default select-none"
            >
              {badge.icon === 'shield' && (
                <svg className="w-4 h-4 text-secondary/80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              )}
              {badge.icon === 'headphones' && (
                <svg className="w-4 h-4 text-secondary/80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              )}
              {badge.icon === 'zap' && (
                <svg className="w-4 h-4 text-secondary/80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              )}
              {badge.icon === 'check-circle' && (
                <svg className="w-4 h-4 text-secondary/80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              {badge.label}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          variants={fadeSlideUp}
          className="mt-10 text-xs text-white/30 font-medium"
        >
          Built exclusively for modern dental practices.
        </motion.p>
      </motion.div>
    </section>
  );
};
