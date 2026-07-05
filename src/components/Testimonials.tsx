import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialItem {
  name: string;
  credentials: string;
  practice: string;
  location: string;
  avatar: string;
  rating: number;
  text: React.ReactNode;
}

const testimonials: TestimonialItem[] = [
  {
    name: 'Dr. Tamara Marjan',
    credentials: 'DMD',
    practice: 'Minty Dental Boutique',
    location: 'Chicago, IL',
    avatar: 'https://res.cloudinary.com/dnpteehr6/image/upload/v1782645904/dr-tamara-marjan-dmd.png',
    rating: 5,
    text: (
      <>
        "Since implementing CareReceptionist AI,{' '}
        <span className="text-secondary font-semibold">
          we haven't missed a single new patient call
        </span>
        . Our front desk finally has time to focus on patients instead of constantly answering the phone."
      </>
    ),
  },
  {
    name: 'Dr. Braulio Ulloa',
    credentials: 'DMD',
    practice: 'UDC Dental Center',
    location: 'San Francisco, CA',
    avatar: 'https://res.cloudinary.com/dnpteehr6/image/upload/v1782645388/dr_braulio.jpg',
    rating: 5,
    text: (
      <>
        "Our scheduling has become{' '}
        <span className="text-secondary font-semibold">
          incredibly efficient
        </span>
        . Patients love getting{' '}
        <span className="text-secondary font-semibold">
          immediate responses
        </span>
        , even after office hours."
      </>
    ),
  },
  {
    name: 'Dr. Silvy Cherian',
    credentials: 'GD',
    practice: 'Ritt Dental',
    location: 'Philadelphia, PA',
    avatar: 'https://res.cloudinary.com/dnpteehr6/image/upload/v1782646735/dr_silvy_cherian_gd.png',
    rating: 5,
    text: (
      <>
        "The ROI was obvious within the first month. Recovering just a few missed calls{' '}
        <span className="text-secondary font-semibold">
          more than paid for the service
        </span>
        ."
      </>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
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
            Trusted by Modern Dental Practices
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary leading-tight"
          >
            Trusted by leading dental practices.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Helping practices answer every call, recover missed revenue, and reduce front-desk workload.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
		className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto items-stretch"
        >
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
		className="card-premium flex flex-col justify-between p-6 sm:p-8 relative overflow-hidden"
            >
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(item.rating)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-4 h-4 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-foreground text-sm sm:text-base leading-relaxed mb-8">
                  {item.text}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-5 border-t border-border/60 mt-auto">
                <img
                  src={item.avatar}
                  alt={`${item.name}, ${item.credentials}`}
                  className="w-11 h-11 rounded-full object-cover border-2 border-secondary/20"
                  loading="lazy"
                />
                <div>
                  <div className="font-bold text-foreground text-sm leading-tight">
                    {item.name}, <span className="text-sm font-medium text-muted-foreground">{item.credentials}</span>
                  </div>
                  <div className="text-xs text-muted-foreground font-medium mt-0.5">
                    {item.practice}
                  </div>
                  <div className="text-[10px] text-secondary font-bold uppercase tracking-wider">
                    {item.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
