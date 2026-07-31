export interface CaseStudy {
  slug: string;
  name: string;
  credentials: string;
  practice: string;
  location: string;
  avatar: string;
  before: string[];
  after: string[];
  quote: string;
  highlightPhrase: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'dr-silvy-cherian',
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
    highlightPhrase: 'ROI was obvious within two weeks',
  },
  {
    slug: 'dr-braulio-ulloa',
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
    highlightPhrase: 'changed the entire atmosphere of the practice',
  },
  {
    slug: 'dr-tamara-marjan',
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
    highlightPhrase: 'generates revenue instead of frustration',
  },
];