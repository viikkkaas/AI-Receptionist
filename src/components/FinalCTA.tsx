import React from 'react';
import { motion } from 'framer-motion';

const trustBadges = [
  { label: 'HIPAA-conscious Architecture', icon: 'shield' },
  { label: '24/7 AI Receptionist', icon: 'headphones' },
  { label: '7-Day Free Trial', icon: 'calendar' },
  { label: 'Fast Setup', icon: 'zap' },
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
    <section className="relative py-24 sm:py-36 overflow-hidden bg-primary">
      {/* Background: radial glow + soft purple lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(139,92,246,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -top-40 left-0 w-[400px] h-[400px] bg-violet-500/4 blur-[100px] rounded-full pointer-events-none" />

      {/* Subtle animated noise texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.1) 1px, transparent 1px)',
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
        {/* Headline — three-line layout */}
        <motion.h2
          variants={fadeSlideUp}
          className="text-[clamp(2rem,5vw,3.75rem)] font-black tracking-tight text-white leading-[1.12]"
        >
          <span>
            Join{' '}
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              50+
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

        {/* Subheadline */}
        <motion.p
          variants={fadeSlideUp}
          className="mt-8 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Book a free 10-minute demo and see how CareReceptionist AI answers
          calls, books appointments, and helps your front desk recover missed
          revenue.
        </motion.p>

        {/* Supporting text */}
        <motion.p
          variants={fadeSlideUp}
          className="mt-4 text-sm text-slate-500 font-semibold"
        >
          Built for modern dental practices. Trusted by growing teams across the
          United States.
        </motion.p>

        {/* CTA Buttons — stacked on mobile, side-by-side on desktop */}
        <motion.div
          variants={fadeSlideUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Primary CTA */}
          <a
            href="https://calendly.com/vikas-p-2706/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 px-8 py-4 text-base sm:text-lg font-black tracking-wide text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 w-full sm:w-auto"
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

          {/* Secondary CTA — phone */}
          <a
            href="tel:+15551234567"
            className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 rounded-2xl border border-slate-700 bg-white/[0.03] text-slate-300 hover:bg-white/[0.08] hover:border-slate-500 hover:text-white transition-all duration-300 w-full sm:w-auto"
          >
            {/* Live indicator */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            <span className="text-sm font-semibold">Or call our AI live:</span>
            <span className="text-sm font-bold text-white">
              (555) 123-4567
            </span>
          </a>
        </motion.div>

        {/* Trust badges */}
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
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white/[0.03] border border-slate-800 text-slate-400 hover:border-purple-500/40 hover:text-slate-200 hover:-translate-y-0.5 transition-all duration-300 cursor-default select-none"
            >
              {badge.icon === 'shield' && (
                <svg
                  className="w-4 h-4 text-purple-400/80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  />
                </svg>
              )}
              {badge.icon === 'headphones' && (
                <svg
                  className="w-4 h-4 text-purple-400/80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              )}
              {badge.icon === 'calendar' && (
                <svg
                  className="w-4 h-4 text-purple-400/80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              )}
              {badge.icon === 'zap' && (
                <svg
                  className="w-4 h-4 text-purple-400/80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              )}
              {badge.icon === 'check-circle' && (
                <svg
                  className="w-4 h-4 text-purple-400/80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
              {badge.label}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
