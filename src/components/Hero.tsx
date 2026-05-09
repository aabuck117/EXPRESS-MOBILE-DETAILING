import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, MapPin, Star, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2670&auto=format&fit=crop"
          alt="Luxury Car Detailing"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary"></div>
        {/* Subtle radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,123,255,0.1)_0%,rgba(0,0,0,0)_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] uppercase mb-6">
              <span className="text-gray-400 block mb-2 text-2xl md:text-4xl tracking-widest font-light">We Don't Just Clean Cars.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                We Restore Presence.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl mb-12 border-l-2 border-accent pl-6"
          >
            Premium mobile detailing delivered directly to your driveway. Reclaim the showroom finish without leaving your home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 mb-16"
          >
            <a
              href="#contact"
              className="bg-accent text-white px-8 py-4 flex items-center justify-center gap-3 rounded-sm font-bold tracking-widest uppercase hover:bg-blue-600 transition-all glow-button text-sm"
            >
              Book Your Detail <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 flex items-center justify-center gap-3 rounded-sm font-bold tracking-widest uppercase border border-white/20 hover:bg-white/5 transition-colors text-sm"
            >
              Get A Fast Quote
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10"
          >
            {[
              { icon: MapPin, text: "Mobile Service" },
              { icon: ShieldCheck, text: "Fully Insured" },
              { icon: Sparkles, text: "Premium Products" },
              { icon: Star, text: "5-Star Service" }
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-3 text-gray-400">
                <badge.icon className="w-5 h-5 text-accent" />
                <span className="text-xs uppercase tracking-wider font-semibold">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
