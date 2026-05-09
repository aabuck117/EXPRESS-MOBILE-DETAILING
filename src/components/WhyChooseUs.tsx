import { motion } from 'motion/react';
import { Home, Award, Clock, ThumbsUp } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Home,
      title: "We Come To You",
      description: "Fully fully equipped mobile unit. We bring our own water and power directly to your home or office."
    },
    {
      icon: Award,
      title: "Luxury-Level Results",
      description: "We don't cut corners. We use the finest products and techniques tailored to premium finishes."
    },
    {
      icon: Clock,
      title: "Fast Booking",
      description: "Streamlined online booking system. Schedule your detail in less than 60 seconds."
    },
    {
      icon: ThumbsUp,
      title: "Satisfaction Guaranteed",
      description: "We stand by our work. If you aren't completely thrilled with the results, we'll make it right."
    }
  ];

  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-bold mb-4 block">The Express Difference</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase mb-6 leading-[0.9]">
              Elite Service.<br/>
              <span className="text-gray-500">Zero Inconvenience.</span>
            </h2>
            <p className="text-lg text-gray-400 font-light mb-10 max-w-lg leading-relaxed">
              We engineered our entire process around one concept: providing a flawless, high-end automotive detailing experience without you ever having to leave your driveway.
            </p>
            
            <a href="#contact" className="inline-flex items-center justify-center bg-white text-black px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors rounded-sm">
              Discover The Difference
            </a>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-secondary/80 backdrop-blur-sm p-8 border border-white/5 rounded-sm hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center rounded-sm mb-6">
                  <reason.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-display font-bold uppercase mb-3">{reason.title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
