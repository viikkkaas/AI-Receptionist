import React from 'react';
import { motion } from 'framer-motion';

interface CaseStudy {
  name: string;
  credentials: string;
  practice: string;
  location: string;
  avatar: string;
  before: string[];
  after: string[];
  quote: string;
}

const caseStudies: CaseStudy[] = [
  {
    name: 'Dr. Tamara Marjan',
    credentials: 'DMD',
    practice: 'Minty Dental Boutique',
    location: 'Chicago, IL',
    avatar: 'https://res.cloudinary.com/dnpteehr6/image/upload/v1782645904/dr-tamara-marjan-dmd.png',
    before: [
      '47% of calls went to voicemail',
      'Front desk staff turnover every 8 months',
      'Google rating: 3.8 stars (27 reviews)',
    ],
    after: [
      '100% call answer rate within 3 weeks',
      '18 additional appointments booked per month',
      'Google rating: 4.7 stars (112 reviews in 6 months)',
    ],
    quote: "We didn't buy AI. We bought a solution to a business problem. The result: our phone now generates revenue instead of frustration.",
  },
  {
    name: 'Dr. Braulio Ulloa',
    credentials: 'DMD',
    practice: 'UDC Dental Center',
    location: 'San Francisco, CA',
    avatar: 'https://res.cloudinary.com/dnpteehr6/image/upload/v1782645388/dr_braulio.jpg',
    before: [
      '2-person front desk still couldn\'t keep up with 80+ daily calls',
      'Patients complained about hold times',
      'Staff working through lunch to catch up on callbacks',
    ],
    after: [
      'Same two front desk staff, zero additional headcount',
      'Call handling capacity increased 3x',
      'Average response time dropped from 8 minutes to 3 seconds',
    ],
    quote: "My front desk staff used to dread the phone. Now they focus on patients. It changed the entire atmosphere of the practice.",
  },
  {
    name: 'Dr. Silvy Cherian',
    credentials: 'GD',
    practice: 'Ritt Dental',
    location: 'Philadelphia, PA',
    avatar: 'https://res.cloudinary.com/dnpteehr6/image/upload/v1782646735/dr_silvy_cherian_gd.png',
    before: [
      '30% of after-hours calls never returned',
      'Google reviews growing at 2-3 per month',
      'Estimated $3,500/month in lost production from missed calls',
    ],
    after: [
      '$8,200/month in recovered production (first 60 days)',
      '47 new Google reviews in first quarter (avg. 4.9 stars)',
      '95% of after-hours calls converted to booked appointments',
    ],
    quote: "The ROI was obvious within two weeks. We recovered more revenue in the first month than the entire annual cost.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      <div className="hidden md:block absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="hidden md:block absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="badge mb-6"
          >
            Real Results
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary leading-tight"
          >
            Practices that made the switch.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Before and after results from real U.S. dental practices.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto items-stretch"
        >
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="card-premium flex flex-col justify-between p-6 sm:p-8 relative overflow-hidden"
            >
              <div>
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border/60">
                  <img
                    src={study.avatar}
                    alt={`${study.name}, ${study.credentials}`}
                    className="w-11 h-11 rounded-full object-cover border-2 border-secondary/20"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-bold text-foreground text-sm leading-tight">
                      {study.name}, <span className="text-sm font-medium text-muted-foreground">{study.credentials}</span>
                    </div>
                    <div className="text-xs text-muted-foreground font-medium mt-0.5">
                      {study.practice}
                    </div>
                    <div className="text-[10px] text-secondary font-bold uppercase tracking-wider">
                      {study.location}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-danger/70">Before</span>
                    <ul className="mt-2 space-y-1.5">
                      {study.before.map((item, j) => (
                        <li key={j} className="text-xs text-muted-foreground flex items-start gap-1.5">
                          <span className="text-danger mt-0.5 shrink-0">&#10005;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent">After</span>
                    <ul className="mt-2 space-y-1.5">
                      {study.after.map((item, j) => (
                        <li key={j} className="text-xs text-foreground font-medium flex items-start gap-1.5">
                          <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="text-foreground text-sm leading-relaxed italic border-t border-border/60 pt-4 mt-auto">
                  &ldquo;{study.quote}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
