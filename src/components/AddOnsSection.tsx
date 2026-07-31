import React from 'react';
import { motion } from 'framer-motion';

interface AddOnCard {
  icon: keyof typeof icons;
  title: string;
  description: string;
}

const icons = {
  'calendar-x': (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="m14 14-4 4" />
      <path d="m10 14 4 4" />
    </svg>
  ),
  'user-plus': (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </svg>
  ),
  stethoscope: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  ),
  'phone-call': (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M14.05 2a9 9 0 0 1 8 7.94" />
      <path d="M14.05 6A5 5 0 0 1 18 10" />
    </svg>
  ),
  'bar-chart-3': (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  ),
  plug: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  ),
  'building-2': (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  ),
};

const addOns: AddOnCard[] = [
  {
    icon: 'calendar-x',
    title: 'No-Show Reduction',
    description: 'Automated reminder and reschedule flow that cuts missed appointments before they happen.',
  },
  {
    icon: 'user-plus',
    title: 'Patient Reactivation',
    description: "Automatically re-engage patients who haven't visited in 6+ months with targeted recall campaigns.",
  },
  {
    icon: 'stethoscope',
    title: 'Treatment Follow-Up',
    description: "Automated follow-up sequences for patients who haven't booked recommended treatment.",
  },
];

const enterpriseAddOns: AddOnCard[] = [
  {
    icon: 'phone-call',
    title: 'Outbound AI Calling',
    description: 'AI proactively calls to confirm appointments, follow up on care, and run satisfaction check-ins.',
  },
  {
    icon: 'bar-chart-3',
    title: 'Practice Intelligence Dashboard',
    description: 'Full analytics layer tracking recovered revenue, conversion rates, no-show trends, and review velocity over time.',
  },
  {
    icon: 'plug',
    title: 'PM Software Integration',
    description: 'Direct integration with Dentrix, Eaglesoft, or Open Dental for seamless two-way data sync.',
  },
  {
    icon: 'building-2',
    title: 'Multi-Location Rollout',
    description: 'Unified dashboard and centralized management across multiple practice locations.',
  },
];

const fadeVariants = {
  hidden: { y: 20 },
  visible: {
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const CardGrid: React.FC<{ cards: AddOnCard[]; groupIndex: number; cols?: string }> = ({
  cards,
  groupIndex,
  cols = 'lg:grid-cols-4',
}) => (
  <div className={`grid sm:grid-cols-2 ${cols} gap-5`}>
    {cards.map((card, i) => (
      <motion.div
        key={card.title}
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: (groupIndex * cards.length + i) * 0.05 }}
        className="card-premium p-6 hover:-translate-y-1.5 group"
      >
        <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
          {icons[card.icon]}
        </div>
        <h4 className="font-bold text-base text-foreground">{card.title}</h4>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{card.description}</p>
      </motion.div>
    ))}
  </div>
);

export const AddOnsSection: React.FC = () => {
  return (
    <section id="add-ons" className="relative section-padding scroll-mt-24 overflow-hidden bg-muted/30">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      <div className="hidden md:block absolute -top-40 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="hidden md:block absolute -bottom-40 left-0 w-[400px] h-[400px] bg-primary/4 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="section-header">
          <motion.div
            initial={{ y: 15 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="badge mx-auto mb-6 w-fit"
          >
            Add-Ons
          </motion.div>

          <motion.h2
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary leading-tight"
          >
            Scale Your Front Office Further
          </motion.h2>

          <motion.p
            variants={fadeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Add-on modules that plug into your CareReceptionist AI system as your practice grows.
          </motion.p>
        </div>

        <motion.div
          variants={fadeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-8 sm:mb-10"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-primary">Add-Ons</h3>
          <p className="mt-1.5 text-sm text-muted-foreground font-medium">Add to your plan anytime</p>
        </motion.div>

        <CardGrid cards={addOns} groupIndex={0} cols="lg:grid-cols-3" />

        <motion.div
          variants={fadeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-8 sm:mb-10 mt-14 sm:mt-20"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-primary">
            Enterprise &amp; Multi-Location
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground font-medium">For growing practices and DSOs</p>
        </motion.div>

        <CardGrid cards={enterpriseAddOns} groupIndex={1} />

        <motion.div
          initial={{ y: 15 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 sm:mt-16 flex justify-center"
        >
          <a
            href="https://calendly.com/vikas-p-2706/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-2xl bg-gradient-to-r from-secondary to-primary px-8 py-4 text-base sm:text-lg font-bold text-white shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
          >
            Discuss Add-Ons on Your Demo Call
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
        </motion.div>
      </div>
    </section>
  );
};

export default AddOnsSection;
