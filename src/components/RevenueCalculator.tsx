import React, { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';

// Custom hook to animate numbers smoothly when they change
function useAnimatedNumber(value: number) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const controls = animate(displayValue, value, {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // premium cubic-bezier easeOut
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [value]);

  return displayValue;
}

export const RevenueCalculator: React.FC = () => {
  // Calculator state inputs
  const [calls, setCalls] = useState<number>(40);
  const [missedPct, setMissedPct] = useState<number>(33);
  const [patientValue, setPatientValue] = useState<number>(4200);

  // Calculate lost revenue
  const missedCalls = calls * (missedPct / 100);
  const lostRevenue = Math.round(missedCalls * patientValue);

  // Animated numbers for UI presentation
  const animatedLostRevenue = useAnimatedNumber(lostRevenue);
  const animatedMissedCalls = useAnimatedNumber(Math.round(missedCalls * 10) / 10 * 10); // rounded to one decimal place visually

  // Format currency
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="py-20 sm:py-32 bg-slate-50 relative overflow-hidden border-t border-b border-slate-100">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 text-xs font-semibold text-blue-600 mb-6 shadow-sm"
          >
            Practice ROI Calculator
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight"
          >
            What are missed calls costing your <span className="text-purple-600 font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">practice</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto"
          >
            Use our interactive inbound calculator to estimate the revenue currently slipping through the cracks.
          </motion.p>
        </div>

        {/* Interactive Calculator Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Side: Inputs */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.02)] space-y-8">
            {/* Input 1 */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label htmlFor="input-calls" className="font-semibold text-slate-900 text-base sm:text-lg">
                  New Patient Calls / Month
                </label>
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
                  <input
                    type="number"
                    id="input-calls"
                    value={calls}
                    onChange={(e) => setCalls(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-12 text-right font-bold text-slate-900 bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <span className="text-xs text-slate-400 font-bold">calls</span>
                </div>
              </div>
              <input
                type="range"
                min="5"
                max="200"
                step="1"
                value={calls}
                onChange={(e) => setCalls(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-purple-600 focus:outline-none"
              />
              <div className="flex justify-between text-xs text-slate-400 font-medium px-0.5">
                <span>5 calls</span>
                <span>100 calls</span>
                <span>200 calls</span>
              </div>
            </div>

            {/* Input 2 */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label htmlFor="input-missed" className="font-semibold text-slate-900 text-base sm:text-lg">
                  Percentage of Missed Calls
                </label>
                <div className="flex items-center gap-1 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
                  <input
                    type="number"
                    id="input-missed"
                    value={missedPct}
                    onChange={(e) => setMissedPct(Math.min(100, Math.max(0, parseInt(e.target.value) || 0)))}
                    className="w-8 text-right font-bold text-slate-900 bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <span className="text-xs text-slate-400 font-bold">%</span>
                </div>
              </div>
              <input
                type="range"
                min="5"
                max="80"
                step="1"
                value={missedPct}
                onChange={(e) => setMissedPct(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-purple-600 focus:outline-none"
              />
              <div className="flex justify-between text-xs text-slate-400 font-medium px-0.5">
                <span>5%</span>
                <span>40%</span>
                <span>80%</span>
              </div>
            </div>

            {/* Input 3 */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label htmlFor="input-value" className="font-semibold text-slate-900 text-base sm:text-lg">
                  Average Value of One New Patient
                </label>
                <div className="flex items-center gap-1 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
                  <span className="text-xs text-slate-400 font-bold">$</span>
                  <input
                    type="number"
                    id="input-value"
                    value={patientValue}
                    onChange={(e) => setPatientValue(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-16 text-right font-bold text-slate-900 bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-purple-600 focus:outline-none"
              />
              <div className="flex justify-between text-xs text-slate-400 font-medium px-0.5">
                <span>$500</span>
                <span>$5,000</span>
                <span>$10,000</span>
              </div>
            </div>

            {/* Interactive calculation visual guidance */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-purple-500" />
                <span>Missed Calls per Month: <strong className="text-slate-900">{(Math.round(missedCalls * 10) / 10).toFixed(1)}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-indigo-500" />
                <span>Estimated Lost Revenue: <strong className="text-slate-900">{formatCurrency(lostRevenue)}</strong></span>
              </div>
            </div>
          </div>

          {/* Right Side: Result Card */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              layout
              className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 sm:p-10 text-white shadow-[0_24px_50px_-12px_rgba(15,23,42,0.4)] border border-slate-800"
            >
              {/* Card glowing border accent */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/5 pointer-events-none" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full justify-between space-y-8">
                <div>
                  <span className="inline-block text-xs font-bold tracking-widest text-purple-400 uppercase bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full mb-6">
                    YOU'RE LEAVING ON THE TABLE
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
                    <span className="text-lg text-slate-400 font-semibold">/month</span>
                  </div>
                  
                  <p className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed">
                    Estimated monthly revenue currently lost from missed inbound calls.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800 space-y-6">
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    CareReceptionist AI typically recovers a significant portion of these missed opportunities.
                  </p>
                  
                  <a
                    href="https://calendly.com/vikas-p-2706/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full gradient-accent text-primary-foreground py-4 text-base font-bold shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 cursor-pointer"
                  >
                    Book a Free Demo <span className="text-lg leading-none">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SECTION 3 — ROI STATEMENT BANNER */}
        <div className="mt-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 sm:p-12 text-center border border-slate-800 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
          >
            {/* Subtle glow details */}
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white leading-relaxed">
                CareReceptionist pays for itself with just{' '}
                <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent font-bold">
                  one recovered patient
                </span>{' '}
                per month.
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RevenueCalculator;
