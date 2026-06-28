import React, { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';

function useAnimatedNumber(value: number) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const controls = animate(displayValue, value, {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [value]);

  return displayValue;
}

export const RevenueCalculator: React.FC = () => {
  const [calls, setCalls] = useState<number>(40);
  const [missedPct, setMissedPct] = useState<number>(33);
  const [patientValue, setPatientValue] = useState<number>(4200);

  const missedCalls = calls * (missedPct / 100);
  const lostRevenue = Math.round(missedCalls * patientValue);
  const animatedLostRevenue = useAnimatedNumber(lostRevenue);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="section-padding gradient-section relative overflow-hidden border-y border-border/50">
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="badge mb-6"
          >
            Practice ROI Calculator
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary leading-tight"
          >
            What are missed calls costing your{' '}
            <span className="text-gradient">practice?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Estimate the revenue slipping through the cracks — and how much you could recover.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          <div className="lg:col-span-7 card-premium p-8 sm:p-10 space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label htmlFor="input-calls" className="font-semibold text-foreground text-base sm:text-lg">
                  New Patient Calls / Month
                </label>
                <div className="flex items-center gap-1.5 bg-muted px-3 py-1.5 rounded-xl border border-border/60">
                  <input
                    type="number"
                    id="input-calls"
                    value={calls}
                    onChange={(e) => setCalls(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-12 text-right font-bold text-foreground bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <span className="text-xs text-muted-foreground font-bold">calls</span>
                </div>
              </div>
              <input
                type="range"
                min="5"
                max="200"
                step="1"
                value={calls}
                onChange={(e) => setCalls(parseInt(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-secondary focus:outline-none"
              />
              <div className="flex justify-between text-xs text-muted-foreground font-medium px-0.5">
                <span>5 calls</span>
                <span>100 calls</span>
                <span>200 calls</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label htmlFor="input-missed" className="font-semibold text-foreground text-base sm:text-lg">
                  Percentage of Missed Calls
                </label>
                <div className="flex items-center gap-1 bg-muted px-3 py-1.5 rounded-xl border border-border/60">
                  <input
                    type="number"
                    id="input-missed"
                    value={missedPct}
                    onChange={(e) => setMissedPct(Math.min(100, Math.max(0, parseInt(e.target.value) || 0)))}
                    className="w-8 text-right font-bold text-foreground bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <span className="text-xs text-muted-foreground font-bold">%</span>
                </div>
              </div>
              <input
                type="range"
                min="5"
                max="80"
                step="1"
                value={missedPct}
                onChange={(e) => setMissedPct(parseInt(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-secondary focus:outline-none"
              />
              <div className="flex justify-between text-xs text-muted-foreground font-medium px-0.5">
                <span>5%</span>
                <span>40%</span>
                <span>80%</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label htmlFor="input-value" className="font-semibold text-foreground text-base sm:text-lg">
                  Avg. Value of One New Patient
                </label>
                <div className="flex items-center gap-1 bg-muted px-3 py-1.5 rounded-xl border border-border/60">
                  <span className="text-xs text-muted-foreground font-bold">$</span>
                  <input
                    type="number"
                    id="input-value"
                    value={patientValue}
                    onChange={(e) => setPatientValue(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-16 text-right font-bold text-foreground bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
              </div>
              <input
                type="range"
                min="500"
                max="10000"
                step="100"
                value={patientValue}
                onChange={(e) => setPatientValue(parseInt(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-secondary focus:outline-none"
              />
              <div className="flex justify-between text-xs text-muted-foreground font-medium px-0.5">
                <span>$500</span>
                <span>$5,000</span>
                <span>$10,000</span>
              </div>
            </div>

            <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-secondary" />
                <span>Missed Calls / Month: <strong className="text-foreground">{(Math.round(missedCalls * 10) / 10).toFixed(1)}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-primary" />
                <span>Lost Revenue: <strong className="text-foreground">{formatCurrency(lostRevenue)}</strong></span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 w-full">
            <motion.div
              layout
              className="relative overflow-hidden rounded-2xl bg-primary p-8 sm:p-10 text-white shadow-[0_24px_50px_-12px_rgba(15,23,42,0.4)] border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 via-transparent to-accent/5 pointer-events-none" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full justify-between space-y-8">
                <div>
                  <span className="inline-block text-xs font-bold tracking-widest text-secondary uppercase bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full mb-6">
                    You're Leaving on the Table
                  </span>

                  <div className="flex items-baseline gap-1 mt-2">
                    <motion.span
                      key={animatedLostRevenue}
                      initial={{ scale: 0.98, opacity: 0.9 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
                    >
                      ~{formatCurrency(animatedLostRevenue)}
                    </motion.span>
                    <span className="text-lg text-white/50 font-semibold">/month</span>
                  </div>

                  <p className="mt-6 text-sm text-white/70 leading-relaxed">
                    Estimated monthly revenue currently lost from missed inbound calls.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-6">
                  <p className="text-xs text-white/50 leading-relaxed">
                    CareReceptionist AI typically recovers a significant portion of these missed opportunities.
                  </p>

                  <a
                    href="https://calendly.com/vikas-p-2706/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-white text-primary py-4 text-base font-bold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                  >
                    Reclaim Your Revenue
                    <span className="text-lg leading-none">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ROI Statement */}
        <div className="mt-24 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primary leading-snug md:leading-relaxed max-w-3xl mx-auto px-4"
          >
            CareReceptionist pays for itself with just{' '}
            <span className="text-gradient">
              one recovered patient
            </span>{' '}
            per month.
          </motion.h3>
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center text-sm text-muted-foreground"
        >
          Based on typical practice estimates. Individual results vary.
        </motion.p>
      </div>
    </section>
  );
};

export default RevenueCalculator;
