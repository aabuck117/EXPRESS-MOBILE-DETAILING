import { motion } from 'motion/react';
import { Droplets, Shield, Sparkles, Fan, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  {
    icon: Sparkles,
    title: "Full Premium Detail",
    description: "The ultimate transformation. Deep cleaning inside and out, restoring your vehicle to showroom condition.",
    features: ["Hand Wash & Wax", "Paint Decontamination", "Deep Interior Shampoo", "Leather Conditioning"],
    popular: true
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    description: "Long-lasting liquid polymer applied by hand to the exterior to protect paint from damage.",
    features: ["Multi-Year Protection", "Extreme Hydrophobia", "Enhanced Gloss", "UV Ray Defense"],
    popular: false
  },
  {
    icon: Fan,
    title: "Interior Restoration",
    description: "A forensic-level cleaning of your cabin, removing odors, stains, and years of build-up.",
    features: ["Steam Cleaning", "Odor Neutralization", "Carpet Extraction", "Plastics UV Protection"],
    popular: false
  },
  {
    icon: Droplets,
    title: "Paint Correction",
    description: "Machine polishing to remove swirl marks, light scratches, and oxidation from your clear coat.",
    features: ["Multi-Stage Polish", "Swirl Removal", "Depth Restoration", "Mirror Finish"],
    popular: false
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-secondary relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <div className="max-w-2xl">
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-bold mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-6 leading-tight">
              Uncompromising <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Service Tiers</span>
            </h2>
            <p className="text-gray-400 text-lg font-light">
              We offer bespoke detailing packages engineered for maximum gloss, protection, and interior comfort.
            </p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center justify-center border border-white/20 px-8 py-4 uppercase tracking-widest font-bold text-sm hover:bg-white hover:text-black transition-colors rounded-sm whitespace-nowrap">
            View Pricing Menu
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-1 rounded-sm bg-gradient-to-b from-white/10 to-transparent hover:from-accent/50 transition-all duration-500 overflow-hidden h-full flex"
            >
              <div className="bg-primary/95 backdrop-blur-xl p-8 rounded-sm h-full flex flex-col relative z-10 w-full group-hover:bg-primary/80 transition-colors">
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
                    Most Popular
                  </div>
                )}
                
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500">
                  <service.icon className={cn("w-6 h-6", service.popular ? "text-accent" : "text-gray-300")} />
                </div>
                
                <h3 className="text-xl font-display font-bold uppercase mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed font-light">{service.description}</p>
                
                <div className="mt-auto">
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#contact" className="block w-full py-3 text-center border border-white/10 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-accent hover:border-accent hover:text-white transition-colors">
                    Select Package
                  </a>
                </div>
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 blur-2xl transition-colors duration-500 z-0"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
