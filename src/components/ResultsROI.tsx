import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const num = parseInt(value.replace(/[^0-9.]/g, ''));
  const hasDecimal = value.includes('.');
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const steps = 30;
    const increment = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) {
        setDisplay(num);
        clearInterval(timer);
      } else {
        setDisplay(Math.round(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, num]);

  if (!isInView) {
    return <span ref={ref}>0{suffix}</span>;
  }

  return (
    <span ref={ref}>
      {hasDecimal ? (display / 10).toFixed(1) : display}
      {suffix}
    </span>
  );
}

interface StatItem {
  value: string;
  label: string;
  subLabel: string;
  description: string;
}

const stats: StatItem[] = [
  {
    value: '100',
    label: 'Call answer rate',
    subLabel: 'Never miss another patient call.',
    description: 'Available 24/7/365.',
  },
  {
    value: '21',
    label: 'Appointments booked/month',
    subLabel: 'Average per practice.',
    description: 'Recovered from previously missed calls.',
  },
  {
    value: '10K+',
    label: 'Additional monthly revenue',
    subLabel: 'Estimated production',
    description: 'generated from recovered appointments.',
  },
];

export const ResultsROI: React.FC = () => {
  return (
    <section id="results" className="section-padding bg-white relative overflow-hidden">
		<div className="hidden md:block absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
			<div className="hidden md:block absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="badge mb-6"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
            Performance & Impact
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary leading-[1.12]"
          >
            Turn missed calls into{' '}
            <span className="text-gradient">booked appointments.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Real results from dental practices using CareReceptionist AI.
          </motion.p>
        </div>

		<div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
			{stats.map((stat, i) => (
				<motion.div
					key={i}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-50px' }}
					transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
					className="group relative flex flex-col items-center text-center px-5 sm:px-6 py-8 sm:py-10 rounded-2xl bg-white border border-border/60 hover:border-secondary/20 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
				>
					<div className="mb-3">
						<span className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-primary">
                  <AnimatedCounter value={stat.value} suffix={stat.value === '10K+' ? 'K+' : ''} />
                  {stat.value === '100' ? '%' : ''}
                </span>
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{stat.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center text-xs text-muted-foreground/60"
        >
          Based on average practice estimates. Individual results vary.
        </motion.p>
      </div>
    </section>
  );
};

export default ResultsROI;
