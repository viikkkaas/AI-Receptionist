import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroFloatingCardsProps {
  ctaText: string;
  ctaHref: string;
}

const START_DELAY_MS = 1000;
const CYCLE_MS = 5500;

interface CardConfig {
  id: number;
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  sublabel: string;
  centerContent: React.ReactNode;
}

const cardConfigs: CardConfig[] = [
  {
    id: 0,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    iconColor: 'text-blue-500',
    title: 'AI Receptionist',
    sublabel: 'Answers every call',
    centerContent: (
      <div className="text-left space-y-3">
        <div className="space-y-2 text-sm text-gray-700 font-medium leading-relaxed">
          <p><span className="text-secondary font-semibold">Ava:</span> Hi, thank you for calling CareReceptionist. How can I help?</p>
          <p><span className="text-gray-500 font-semibold">Patient:</span> I'd like to book a cleaning for next week.</p>
        </div>
        <div className="space-y-2 text-sm text-gray-700 font-medium leading-relaxed">
          <p><span className="text-secondary font-semibold">Ava:</span> Tuesday 10:00 AM works. You're booked.</p>
        </div>
        <p className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
          Books straight to your schedule
        </p>
      </div>
    ),
  },
  {
    id: 1,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    iconColor: 'text-emerald-500',
    title: 'Growth & Retention',
    sublabel: 'Reviews + reactivation',
    centerContent: (
      <div className="text-left space-y-3">
        <p className="text-sm text-gray-700 leading-relaxed">
          Hi Sarah, thanks for visiting us today! Would you mind leaving a quick review?
        </p>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">
          It's been a while. Want to book a cleaning?
        </p>
      </div>
    ),
  },
  {
    id: 2,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconColor: 'text-amber-500',
    title: 'Revenue Recovery',
    sublabel: 'Auto reminders',
    centerContent: (
      <div className="text-left space-y-3">
        <div className="bg-amber-50 border border-amber-100 rounded-lg p-3">
          <p className="text-sm text-gray-800">
            Reminder: your appointment is tomorrow at 2:00 PM. Reply C to confirm or R to reschedule.
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-sm text-gray-800">C</p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
            Confirmed
          </span>
        </div>
        <p className="text-xs text-amber-600 font-medium">Auto reminders: 48h and 24h before</p>
      </div>
    ),
  },
  {
    id: 3,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 002 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    iconColor: 'text-violet-500',
    title: 'Dashboard',
    sublabel: 'Online scheduling',
    centerContent: (
      <div className="text-left space-y-3">
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-gray-100 rounded text-gray-700 text-xs">Mon</span>
          <span className="px-2 py-1 bg-primary text-white rounded text-xs font-medium">Tue</span>
          <span className="px-2 py-1 bg-gray-100 rounded text-gray-700 text-xs">Wed</span>
          <span className="px-2 py-1 bg-gray-100 rounded text-gray-700 text-xs">Thu</span>
          <span className="px-2 py-1 bg-gray-100 rounded text-gray-700 text-xs">Fri</span>
        </div>
        <div className="space-y-2">
          <p className="flex items-center justify-between w-full text-sm text-gray-500">
            <span>9:00 AM</span>
            <span className="text-xs font-medium">Open</span>
          </p>
          <p className="flex items-center justify-between w-full text-sm text-gray-500">
            <span>10:00 AM</span>
            <span className="text-xs font-medium bg-primary/20 rounded px-2 py-0.5">New patient: Alex Morgan</span>
          </p>
          <p className="flex items-center justify-between w-full text-sm text-gray-500">
            <span>11:30 AM</span>
            <span className="text-xs font-medium">Open</span>
          </p>
        </div>
      </div>
    ),
  },
];

const ShieldIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

// Map iconColor strings to their hex values for use in inline styles
const iconColorMap: Record<string, string> = {
  'text-blue-500': '#3B82F6',
  'text-emerald-500': '#10B981',
  'text-amber-500': '#F59E0B',
  'text-violet-500': '#8B5CF6',
};

export const HeroFloatingCards: React.FC<HeroFloatingCardsProps> = ({ ctaText, ctaHref }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [mounted, setMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActiveIndex(0);
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % 4));
      }, CYCLE_MS);
    }, START_DELAY_MS);
  };

  const stopAutoplay = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resumeAutoplayFrom = (index: number) => {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const current = prev === null ? index : prev;
        return (current + 1) % 4;
      });
    }, CYCLE_MS);
  };

  const handleMouseEnter = (index: number) => {
    setPaused(true);
    stopAutoplay();
    setActiveIndex(index);
  };

  const handleMouseLeave = (index: number) => {
    setPaused(false);
    if (!mounted) return;
    resumeAutoplayFrom(index);
  };

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches) {
      startAutoplay();
    }
    return () => {
      stopAutoplay();
    };
  }, []);

  const showCardContent = activeIndex ?? 0;

  return (
    <div className="max-w-[1200px] mx-auto w-full" style={{ '--cycle-ms': `${CYCLE_MS}ms` }}>
      <div className="grid md:grid-cols-[240px_560px_240px] md:gap-x-14 md:items-stretch gap-6 items-start">
        {/* LEFT COLUMN */}
        <div className="hidden md:flex flex-col justify-between">
          {cardConfigs.filter((_, i) => i === 0 || i === 2).map((card) => (
            <div
              key={card.id}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(card.id)}
              onMouseLeave={() => handleMouseLeave(card.id)}
            >
              <div
                className="relative overflow-hidden rounded-2xl shadow-sm border border-gray-100 bg-white min-h-[96px] flex items-center"
                style={{
                  filter: activeIndex === card.id ? 'none' : 'blur(2px)',
                  opacity: activeIndex === card.id ? 1 : 0.75,
                  transition: 'filter 400ms ease, opacity 400ms ease',
                  boxShadow: activeIndex === card.id ? '0 0 0 2px rgba(59, 130, 246, 0.2), 0 4px 12px rgba(15, 23, 42, 0.08)' : '0 1px 3px rgba(15, 23, 42, 0.04)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-[color-mix(in_srgb,${card.iconColor.replace('text-', '')}_12%,transparent)]" style={{ color: iconColorMap[card.iconColor] }}>
                    {card.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-800 whitespace-nowrap">{card.title}</p>
                    <p className="text-xs text-gray-500 whitespace-nowrap mt-0.5">{card.sublabel}</p>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-100 rounded-b-2xl overflow-hidden">
                  {activeIndex === card.id && (
                    <div className="h-full bg-secondary" style={{ width: '100%', animation: `progress-fill var(--cycle-ms) linear forwards` }} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CENTER COLUMN */}
        <div className="flex flex-col items-center">
          {/* CTA Button */}
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md active:scale-[0.98] transition-all duration-300 font-bold text-lg min-h-[3.3rem] px-8"
            style={{ fontFamily: 'var(--font-base)' }}
          >
            {ctaText}
            <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Glass Box */}
          <div className="mt-32 w-full">
            <div
              className="relative bg-white/65 backdrop-blur-xl border border-white/80 rounded-3xl shadow-xl"
              style={{ height: '220px' }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={showCardContent}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 flex flex-col justify-start"
                  style={{ '--cycle-ms': `${CYCLE_MS}ms` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 rounded-full" style={{ backgroundColor: iconColorMap[cardConfigs[showCardContent].iconColor] }}>
                    </div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      {cardConfigs[showCardContent].title}
                    </p>
                  </div>
                  <div className="text-[15px] space-y-3">
                    {cardConfigs[showCardContent].centerContent}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="hidden md:flex flex-col justify-between">
          {cardConfigs.filter((_, i) => i === 1 || i === 3).map((card) => (
            <div
              key={card.id}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(card.id)}
              onMouseLeave={() => handleMouseLeave(card.id)}
            >
              <div
                className="relative overflow-hidden rounded-2xl shadow-sm border border-gray-100 bg-white min-h-[96px] flex items-center"
                style={{
                  filter: activeIndex === card.id ? 'none' : 'blur(2px)',
                  opacity: activeIndex === card.id ? 1 : 0.75,
                  transition: 'filter 400ms ease, opacity 400ms ease',
                  boxShadow: activeIndex === card.id ? '0 0 0 2px rgba(59, 130, 246, 0.2), 0 4px 12px rgba(15, 23, 42, 0.08)' : '0 1px 3px rgba(15, 23, 42, 0.04)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-[color-mix(in_srgb,${card.iconColor.replace('text-', '')}_12%,transparent)]" style={{ color: iconColorMap[card.iconColor] }}>
                    {card.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-800 whitespace-nowrap">{card.title}</p>
                    <p className="text-xs text-gray-500 whitespace-nowrap mt-0.5">{card.sublabel}</p>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-100 rounded-b-2xl overflow-hidden">
                  {activeIndex === card.id && (
                    <div className="h-full bg-secondary" style={{ width: '100%', animation: `progress-fill var(--cycle-ms) linear forwards` }} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* HIPAA line - outside grid so it doesn't affect card alignment */}
      <p className="mt-4 text-xs text-gray-500 flex items-center justify-center gap-1.5">
        <ShieldIcon />
        HIPAA-ready | BAA provided to every clinic
      </p>
    </div>
  );
};

export default HeroFloatingCards;