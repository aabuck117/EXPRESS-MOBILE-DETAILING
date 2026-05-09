import { motion } from 'motion/react';
import { Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-primary relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-accent/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-black uppercase mb-6 leading-[0.9]"
          >
            Your Car Should <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Turn Heads Again.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 font-light max-w-2xl mx-auto"
          >
            Book your premium mobile detail today. Fill out the form below and we'll contact you within 15 minutes with a custom quote.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-2 space-y-10"
          >
            <div>
              <h3 className="text-2xl font-display font-bold uppercase mb-6">Contact Information</h3>
              <p className="text-gray-400 font-light mb-8">
                Operating strictly by appointment to ensure every vehicle receives uncompromising attention.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Direct Line</p>
                  <p className="text-lg font-light text-white">(555) 019-8273</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Email</p>
                  <p className="text-lg font-light text-white">booking@expressdetail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Hours</p>
                  <p className="text-lg font-light text-white">Mon-Sun: 7am - 6pm</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-3 bg-secondary/80 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-sm relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[50px]"></div>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 relative group">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 absolute bg-secondary px-1 left-3 -top-2 z-10 transition-colors group-focus-within:text-accent group-focus-within:bg-[#0f0f0f]">Full Name</label>
                  <input type="text" className="w-full bg-transparent border border-white/20 p-4 rounded-sm text-sm text-white focus:outline-none focus:border-accent transition-colors w-full" required />
                </div>
                <div className="space-y-2 relative group">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 absolute bg-secondary px-1 left-3 -top-2 z-10 transition-colors group-focus-within:text-accent group-focus-within:bg-[#0f0f0f]">Phone Number</label>
                  <input type="tel" className="w-full bg-transparent border border-white/20 p-4 rounded-sm text-sm text-white focus:outline-none focus:border-accent transition-colors w-full" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 relative group">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 absolute bg-secondary px-1 left-3 -top-2 z-10 transition-colors group-focus-within:text-accent group-focus-within:bg-[#0f0f0f]">Vehicle Make/Model</label>
                  <input type="text" className="w-full bg-transparent border border-white/20 p-4 rounded-sm text-sm text-white focus:outline-none focus:border-accent transition-colors w-full" placeholder="e.g. Porsche 911" required />
                </div>
                <div className="space-y-2 relative group">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 absolute bg-secondary px-1 left-3 -top-2 z-10 transition-colors group-focus-within:text-accent group-focus-within:bg-[#0f0f0f]">Desired Service</label>
                  <select className="w-full bg-transparent border border-white/20 p-4 rounded-sm text-sm text-gray-300 focus:outline-none focus:border-accent transition-colors w-full appearance-none">
                    <option value="" disabled selected>Select a package...</option>
                    <option value="full" className="bg-primary text-white">Full Premium Detail</option>
                    <option value="ceramic" className="bg-primary text-white">Ceramic Coating</option>
                    <option value="interior" className="bg-primary text-white">Interior Restoration</option>
                    <option value="paint" className="bg-primary text-white">Paint Correction</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2 relative group">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 absolute bg-secondary px-1 left-3 -top-2 z-10 transition-colors group-focus-within:text-accent group-focus-within:bg-[#0f0f0f]">Additional Details</label>
                <textarea rows={4} className="w-full bg-transparent border border-white/20 p-4 rounded-sm text-sm text-white focus:outline-none focus:border-accent transition-colors w-full resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-accent text-white py-4 flex items-center justify-center font-bold tracking-widest uppercase hover:bg-blue-600 transition-all glow-button text-sm mt-4 rounded-sm">
                Get My Free Quote
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
