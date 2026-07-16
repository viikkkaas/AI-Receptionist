import React from 'react';
import { motion, useInView } from 'framer-motion';

function AnimatedNumber({ value, className }: { value: number; className?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const duration = 2000;
    let raf: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value]);

  return <span ref={ref} className={className}>{display.toLocaleString()}</span>;
}

const painPoints = [
  {
    icon: 'phone-missed',
    title: 'The Lunch-Hour Leak',
    description: 'Your front desk steps away for lunch. The phone rings. No one answers. That patient calls the practice down the street. You\'ll never know.',
    stat: '3-5 patients lost',
    statSub: 'per week',
  },
  {
    icon: 'clock',
    title: 'The After-Hours Void',
    description: 'A new patient searches for a dentist at 7 PM on a Tuesday. Your Google listing says "Call to book." They call. No answer. They call the next listing.',
    stat: '10-15 calls lost',
    statSub: 'per month',
  },
  {
    icon: 'users',
    title: 'The Overloaded Front Desk',
    description: 'Your front desk is confirming tomorrow\'s appointments, checking in a patient, answering an insurance question — and the phone is ringing. Something has to give.',
    stat: '40% of day',
    statSub: 'spent on phone',
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

export const ResultsROI: React.FC = () => {
  return (
    <section id="problem" className="section-padding bg-white relative overflow-hidden">
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-50 rounded-full blur-3xl pointer-events-none opacity-40" />

      <div className="container-custom relative z-10">
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="badge mb-6"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-danger animate-pulse" />
            The Revenue Leak
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary leading-[1.12]"
          >
            The <AnimatedNumber value={3647} className="text-danger" /> Calls Your Practice{' '}
            Never Answered This Year
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            The average U.S. dental practice receives 50+ calls per day. One in three goes to voicemail. Most never call back.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto"
        >
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group relative flex flex-col p-6 sm:p-8 rounded-2xl bg-white border border-border/60 hover:border-secondary/20 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(59,130,246,0.04)]"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                {point.icon === 'phone-missed' && (
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v6h6" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m22 2-6 6" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                  </svg>
                )}
                {point.icon === 'clock' && (
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                  </svg>
                )}
                {point.icon === 'users' && (
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                )}
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow">{point.description}</p>
              <div className="pt-4 border-t border-border/60">
                <span className="text-lg font-extrabold text-danger">{point.stat}</span>
                <span className="text-sm text-danger ml-1">{point.statSub}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default ResultsROI;
