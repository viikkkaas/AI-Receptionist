import React from 'react';
import { motion } from 'framer-motion';

const leftFeatures = [
  '24/7 AI Receptionist',
  'Appointment Scheduling',
  'Google Calendar Integration',
  'Smart SMS Notifications',
  'Emergency Call Routing',
  'Review Request Automation',
];

const rightFeatures = [
  'Call Recording & Analytics',
  'Custom AI Training',
  'Up to 2,000 mins/month included',
  'HIPAA-conscious Architecture',
  'Monthly Performance Reports',
  'Dedicated Onboarding',
];

const trustBadges = [
  { text: 'HIPAA-conscious' },
  { text: '7-Day Trial' },
  { text: 'Cancel Anytime' },
];

export const PricingSection: React.FC = () => {
  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="pricing"
      className="relative section-padding scroll-mt-24 overflow-hidden bg-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
		<div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-secondary/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="badge mx-auto mb-6 w-fit"
          >
            Pricing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.1]"
          >
            Simple Pricing.{' '}
            <span className="text-gradient">Powerful Results.</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-[740px] mx-auto"
        >
          <div 		className="bg-white rounded-3xl border border-border/30 shadow-[0_20px_60px_-12px_rgba(15,23,42,0.08)] p-6 sm:p-12 lg:p-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div 		className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 p-5 sm:p-8 rounded-2xl bg-muted/20 border border-border/20">
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1">
                  <span className="text-[44px] sm:text-[51px] font-extrabold text-primary tracking-tight">$597</span>
                  <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-1">One-Time Setup</span>
                  <span className="text-[10px] leading-tight text-muted-foreground/60 mt-2 max-w-[220px]">Covers BAA execution, PM software integration, and custom AI voice training</span>
                </div>

                <div className="hidden sm:block w-px h-16 bg-border/30" />

                <div className="flex items-center justify-center">
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-white text-muted-foreground/60 border border-border/30 uppercase tracking-widest shadow-sm select-none">
                    THEN
                  </span>
                </div>

                <div className="hidden sm:block w-px h-16 bg-border/30" />

                <div className="flex flex-col items-center sm:items-end text-center sm:text-right flex-1">
                  <div className="flex items-start gap-1">
                    <span className="text-5xl sm:text-6xl font-extrabold text-gradient tracking-tight">
                      $1799
                    </span>
                    <span className="text-sm sm:text-base text-muted-foreground mt-1.5 sm:mt-2 font-medium">/month</span>
                  </div>
                  <span className="text-xs text-accent font-semibold mt-1.5">✓ All-inclusive voice & data</span>
                </div>
              </div>
            </motion.div>

            <div className="my-4 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

            <motion.p
              variants={fadeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center text-base text-foreground/70 max-w-md mx-auto leading-relaxed"
            >
              Everything your front desk needs.
              <br />
              One transparent monthly price.
              <br />
              No hidden fees. No long-term contracts.
            </motion.p>

            <motion.div
              variants={fadeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="mt-12"
            >
              <h4 className="text-xs font-bold text-foreground/70 uppercase tracking-widest mb-6">
                Everything Included
              </h4>
            </motion.div>

            <div 		className="grid sm:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-3 sm:gap-y-4">
              <div className="space-y-4">
                {leftFeatures.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 }}
                    className="flex items-start gap-3"
                  >
                    <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-foreground/70">{feature}</span>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-4">
                {rightFeatures.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: (i + leftFeatures.length) * 0.04 }}
                    className="flex items-start gap-3"
                  >
                    <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-foreground/70">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
		className="mt-8 sm:mt-12 p-5 sm:p-8 rounded-2xl bg-violet-50/70"
            >
              <p className="text-base font-semibold text-violet-800">
                Recover just{' '}
                <span className="font-extrabold text-violet-900 underline decoration-violet-300 decoration-2 underline-offset-4">
                  ONE additional patient
                </span>
                .
              </p>
              <p className="mt-2 text-sm text-violet-600/80 leading-relaxed">
                CareReceptionist AI often pays for itself with a single recovered patient each week.
              </p>
              <p className="mt-3 text-xs text-violet-400">
                *Typical practice estimate. Results vary.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.4 }}
		className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10"
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span className="text-sm font-medium text-foreground/80">
                  Live in under 7 days
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                </svg>
                <span className="text-sm font-medium text-foreground/80">
                  Priority Support Included
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10"
            >
              <a
                href="https://calendly.com/vikas-p-2706/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 w-full rounded-2xl bg-gradient-to-r from-secondary to-primary px-8 py-5 text-base sm:text-lg font-bold text-white shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
              >
                Book Your Free Demo
                <svg
                  className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                No credit card required
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center items-center gap-3"
        >
          {trustBadges.map((badge) => (
            <span
              key={badge.text}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-white border border-border/40 text-muted-foreground cursor-default"
            >
              <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {badge.text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
