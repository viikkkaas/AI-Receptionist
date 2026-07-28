export interface HeroStat {
  value: string
  label: string
}

export interface HeroCompliance {
  icon: 'shield' | 'clock' | 'file-text'
  text: string
}

export const heroData = {
  badge: {
    icon: 'building',
    text: 'Built for Growing Dental Practices',
  },
  headline: {
    light: 'The Front Office Operating System for',
    bold: 'Growing Dental Practices.',
  },
  subheadline:
    'Answer every call, book appointments automatically, and recover missed revenue — without adding headcount. Live in 7 days.',
  cta: {
    primary: {
      text: 'Start Revenue Recovery',
      href: 'https://calendly.com/vikas-p-2706/30min',
    },
    secondary: {
      text: 'See it in Action',
      href: 'https://calendly.com/vikas-p-2706/30min',
    },
  },
  stats: {
    label: 'Trusted by dental practices across the US',
    items: [
      { value: '$10K+', label: 'recovered / mo' },
      { value: '24/7', label: 'patient coverage' },
      { value: '7-day', label: 'setup' },
    ] as HeroStat[],
  },
  compliance: [
    { icon: 'shield' as const, text: 'HIPAA Compliant | BAA Signed' },
    { icon: 'clock' as const, text: 'Live in 7 Days' },
    { icon: 'file-text' as const, text: 'No Long-Term Contracts' },
  ] as HeroCompliance[],
}
