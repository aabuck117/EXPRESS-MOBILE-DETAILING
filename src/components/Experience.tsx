import { motion } from 'motion/react';

export function Experience() {
  return (
    <section id="experience" className="relative py-40 overflow-hidden bg-primary flex items-center min-h-[80vh]">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1601430854328-26d0d524344a?q=80&w=2670&auto=format&fit=crop" 
          alt="Premium luxury car detailing" 
          className="w-full h-full object-cover grayscale-[30%] opacity-60"
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] z-10"></div>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black uppercase leading-[0.9] text-white tracking-tight mb-8 shadow-black drop-shadow-2xl">
            Your Vehicle Deserves<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">More Than A Basic Wash.</span>
          </h2>
          
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          
          <p className="text-lg md:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            At Express Mobile Detailing, we bring top-quality car care directly to your doorstep. Whether you're at home, work, or on the go, our fully equipped mobile units deliver professional detailing services with unmatched convenience and precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
