import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies } from '../data/testimonials';

const quoteVariants = {
  enter: { y: 40 },
  center: { y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit: { y: -40, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

function renderQuote(quote: string, highlight: string) {
  const idx = quote.indexOf(highlight);
  if (idx === -1) return <>{quote}</>;
  const before = quote.slice(0, idx);
  const after = quote.slice(idx + highlight.length);
  return (
    <>
      {before}
      <span className="bg-gradient-to-r from-secondary to-blue-500 bg-clip-text text-transparent font-bold">
        {highlight}
      </span>
      {after}
    </>
  );
}

export const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = caseStudies.length;
  const study = caseStudies[active];

  const goTo = (i: number) => {
    setDirection(i > active ? 1 : -1);
    setActive(i);
  };

  const next = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + total) % total);
  };

  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      <div className="hidden md:block absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="hidden md:block absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="section-header">
          <motion.div
            initial={{ y: 15 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="badge mb-6"
          >
            Real Results
          </motion.div>

          <motion.h2
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary leading-tight"
          >
            Practices that made the switch.
          </motion.h2>

          <motion.p
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Before and after results from real U.S. dental practices.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop arrows - beside content */}
          <div className="hidden sm:flex items-center gap-4 sm:gap-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="shrink-0 w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 flex items-center justify-center text-primary transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={study.slug}
                  custom={direction}
                  variants={quoteVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="card-premium p-8 sm:p-10 md:p-12"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={study.avatar}
                      alt={`${study.name}, ${study.credentials}`}
                      width="56"
                      height="56"
                      className="w-14 h-14 rounded-full object-cover border-2 border-secondary/20 shrink-0"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <div className="font-bold text-foreground text-base leading-tight">
                        {study.name}, <span className="text-sm font-medium text-muted-foreground">{study.credentials}</span>
                      </div>
                      <div className="text-sm text-muted-foreground font-medium mt-0.5 truncate">
                        {study.practice}
                      </div>
                      <div className="text-xs text-secondary font-bold uppercase tracking-wider">
                        {study.location}
                      </div>
                    </div>
                  </div>

                  <blockquote className="text-lg sm:text-2xl lg:text-3xl leading-relaxed text-foreground font-medium">
                    &ldquo;{renderQuote(study.quote, study.highlightPhrase)}&rdquo;
                  </blockquote>

                  <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                    <a
                      href={`/case-studies/#${study.slug}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-7 py-3 text-sm font-bold hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 shadow-sm w-full sm:w-auto min-h-11"
                    >
                      Full Case Study
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="shrink-0 w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 flex items-center justify-center text-primary transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Mobile: stacked layout with arrows below */}
          <div className="sm:hidden">
            <div className="card-premium p-5">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={study.slug}
                  custom={direction}
                  variants={quoteVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <img
                      src={study.avatar}
                      alt={`${study.name}, ${study.credentials}`}
                      width="48"
                      height="48"
                      className="w-12 h-12 rounded-full object-cover border-2 border-secondary/20 shrink-0"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <div className="font-bold text-foreground text-sm leading-tight">
                        {study.name}, <span className="text-xs font-medium text-muted-foreground">{study.credentials}</span>
                      </div>
                      <div className="text-xs text-muted-foreground font-medium mt-0.5 truncate">
                        {study.practice}
                      </div>
                      <div className="text-[10px] text-secondary font-bold uppercase tracking-wider">
                        {study.location}
                      </div>
                    </div>
                  </div>

                  <blockquote className="text-base leading-relaxed text-foreground font-medium">
                    &ldquo;{renderQuote(study.quote, study.highlightPhrase)}&rdquo;
                  </blockquote>

                  <div className="mt-5">
                    <a
                      href={`/case-studies/#${study.slug}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-7 py-3 text-sm font-bold hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 shadow-sm w-full min-h-11"
                    >
                      Full Case Study
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-center gap-4 mt-4">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 flex items-center justify-center text-primary transition-all duration-200 active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 flex items-center justify-center text-primary transition-all duration-200 active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-3 sm:gap-2.5 mt-6 sm:mt-8">
            {caseStudies.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? 'bg-secondary'
                    : 'bg-gray-300 hover:bg-gray-400'
                } w-3 h-3 sm:w-2.5 sm:h-2.5 ${i === active ? 'sm:w-7' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;