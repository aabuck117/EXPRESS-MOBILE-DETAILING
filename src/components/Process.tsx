import { motion } from 'motion/react';
import { MousePointerClick, Truck, Sparkles } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: MousePointerClick,
      title: "1. Book Online",
      desc: "Select your package, date, and input your location. Takes less than 60 seconds."
    },
    {
      icon: Truck,
      title: "2. We Come To You",
      desc: "Our fully equipped mobile detailing unit arrives at your home or workplace."
    },
    {
      icon: Sparkles,
      title: "3. Drive Restored",
      desc: "Step into a vehicle that feels, smells, and looks like it just rolled off the showroom floor."
    }
  ];

  return (
    <section className="py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-bold mb-4 block">Effortless Experience</span>
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-6">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">Works</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[45px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="text-center group"
              >
                <div className="w-24 h-24 mx-auto bg-secondary border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:border-accent group-hover:bg-accent/10 transition-colors shadow-2xl relative">
                  <step.icon className="w-10 h-10 text-white group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold uppercase mb-4">{step.title}</h3>
                <p className="text-gray-400 font-light max-w-xs mx-auto">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
