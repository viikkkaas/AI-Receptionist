import React from 'react';
import { motion } from 'framer-motion';

const features = [
  "24/7 AI Receptionist",
  "Unlimited Calls",
  "Appointment Scheduling",
  "Google Calendar Integration",
  "Emergency Call Routing",
  "SMS Follow-ups",
  "Call Recording & Analytics",
  "HIPAA-conscious architecture",
  "Custom AI Training",
  "English Support",
  "Monthly Performance Reports",
  "Dedicated Onboarding"
];

const pills = [
  { text: "No Contracts", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { text: "Cancel Anytime", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { text: "Secure Setup", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
  { text: "Fast Onboarding", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { text: "Responsive", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
  { text: "HIPAA-conscious", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" }
];

export const PricingSection: React.FC = () => {
  // SVG path drawing variants for the checkmarks
  const checkmarkPathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      }
    }
  };

  // Staggered list container variants
  const listContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  // Individual list item fade+slide variants
  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="pricing" className="relative py-24 sm:py-36 scroll-mt-24 overflow-hidden bg-slate-50">
      {/* Premium background grid & radial glow effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 text-xs font-semibold text-blue-600 mb-6 shadow-sm"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
            Pricing Plans
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6"
          >
            Simple Pricing.<br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Powerful Results.</span>
          </motion.h2>

          {/* Subheadline Items */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm sm:text-base font-semibold text-slate-500"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              One transparent monthly price
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              No hidden fees
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              No contracts
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Cancel anytime
            </span>
          </motion.div>
        </div>

        {/* ONE Premium Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-3xl rounded-3xl p-[1px] bg-gradient-to-br from-blue-500 via-indigo-600 to-emerald-500 shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:scale-[1.01] hover:shadow-[0_30px_60px_rgba(59,130,246,0.25)] transition-all duration-500 group/card"
        >
          {/* Card Inner Background */}
          <div className="relative bg-slate-950 rounded-[23px] p-6 sm:p-12 text-white overflow-hidden">
            {/* Spotlight Glows inside card */}
            <div className="absolute -right-24 -top-24 w-[350px] h-[350px] bg-blue-500/10 blur-[90px] rounded-full pointer-events-none transition-opacity duration-500 group-hover/card:opacity-100 opacity-80" />
            <div className="absolute -left-24 -bottom-24 w-[350px] h-[350px] bg-emerald-500/5 blur-[90px] rounded-full pointer-events-none transition-opacity duration-500 group-hover/card:opacity-100 opacity-60" />

            {/* Float Badge */}
            <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 sm:right-12 sm:translate-x-0">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black tracking-widest text-white uppercase bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 shadow-lg shadow-blue-500/35 border border-white/10 select-none animate-pulse-slow">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                Most Popular
              </span>
            </div>

            {/* Plan Title & Subtitle */}
            <div className="text-center sm:text-left">
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                CareReceptionist AI
              </h3>
              <p className="mt-2 text-sm text-slate-400 font-medium">
                Comprehensive clinic voice automation, custom-trained and fully managed.
              </p>
            </div>

            {/* Price Section */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md relative z-10">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">$199</span>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">One-time setup</span>
              </div>
              
              <div className="flex items-center justify-center select-none">
                <span className="px-3 py-1.5 rounded-full text-xs font-black bg-white/5 text-slate-300 border border-white/10 uppercase tracking-widest text-center shadow-inner">
                  Then
                </span>
              </div>

              <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
                <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white tracking-tight">
                  $699<span className="text-lg text-slate-400 font-bold tracking-normal">/month</span>
                </span>
                <span className="text-xs text-emerald-400 font-semibold mt-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  All-inclusive voice & data
                </span>
              </div>
            </div>

            {/* Gradient Line Divider */}
            <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

            {/* Feature List */}
            <div className="relative z-10">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 text-center sm:text-left">
                Included Features
              </h4>
              <motion.div
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid sm:grid-cols-2 gap-x-8 gap-y-4"
              >
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={listItemVariants}
                    className="flex items-start gap-3.5 group/item py-0.5"
                  >
                    <div className="flex-shrink-0 w-5.5 h-5.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mt-0.5 group-hover/item:scale-110 group-hover/item:bg-emerald-500/20 group-hover/item:border-emerald-400 transition-all duration-300">
                      <svg className="w-3.5 h-3.5 stroke-[3.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <motion.path
                          variants={checkmarkPathVariants}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-slate-300 group-hover/item:text-white transition-colors duration-300">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Estimated ROI Box */}
            <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-blue-950/30 to-indigo-950/30 border border-blue-900/30 relative z-10 hover:border-blue-800/40 transition-colors duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400">
                  <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-blue-300 uppercase tracking-wider">Estimated ROI</h4>
                  <p className="mt-1.5 text-sm text-slate-300 leading-relaxed font-medium">
                    Recover just <span className="text-white font-extrabold underline decoration-blue-400 decoration-2 underline-offset-4">ONE new patient</span> each month and CareReceptionist AI typically pays for itself.
                  </p>
                </div>
              </div>
            </div>

            {/* Two Highlighted Boxes */}
            <div className="mt-6 grid sm:grid-cols-2 gap-4 relative z-10">
              <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-slate-800 hover:bg-white/[0.03] transition-all duration-300 flex items-center gap-4 group/box">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover/box:scale-105 transition-transform duration-300">
                  <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Launch Time</span>
                  <span className="text-sm sm:text-base font-extrabold text-white">Live in under 7 days</span>
                </div>
              </div>
              
              <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-slate-800 hover:bg-white/[0.03] transition-all duration-300 flex items-center gap-4 group/box">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover/box:scale-105 transition-transform duration-300">
                  <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Support</span>
                  <span className="text-sm sm:text-base font-extrabold text-white">Priority email support</span>
                </div>
              </div>
            </div>

            {/* Large CTA Button */}
            <div className="mt-10 relative z-10">
              <a
                href="https://calendly.com/vikas-p-2706/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/btn overflow-hidden w-full inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-600 to-emerald-500 p-[2px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(99,102,241,0.25)] active:scale-[0.98]"
              >
                <span className="w-full bg-slate-950/90 group-hover/btn:bg-transparent transition-colors duration-300 rounded-[14px] px-8 py-5 text-base sm:text-lg font-black tracking-wide text-white flex items-center justify-center gap-2">
                  Book Your Free Demo
                  <svg className="w-5 h-5 transform transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>

          </div>
        </motion.div>

        {/* Premium Badges below Card */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-3.5 max-w-3xl mx-auto">
          {pills.map((badge, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-white border border-slate-100 shadow-sm text-slate-800 hover:border-blue-300 hover:shadow-[0_4px_12px_rgba(59,130,246,0.06)] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
            >
              <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={badge.icon} />
              </svg>
              {badge.text}
            </motion.span>
          ))}
        </div>

      </div>
    </section>
  );
};
