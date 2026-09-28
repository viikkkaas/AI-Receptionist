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
    light: 'Focus on your patients.',
    bold: 'We run your entire front desk.',
  },
  subheadline:
    'From first call to final follow-up, booking, reminders, reactivation, reporting handled automatically.',
  cta: {
    primary: {
      text: 'Book a Demo',
      href: 'https://calendly.com/vikas-p-2706/30min',
    },
    secondary: {
      text: 'See it in Action',
      href: 'https://calendly.com/vikas-p-2706/30min',
    },
  },
}
