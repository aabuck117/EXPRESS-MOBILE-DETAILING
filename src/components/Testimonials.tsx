import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "James T.",
    vehicle: "Porsche 911 GT3",
    content: "Absolutely phenomenal. They made my GT3 look better than the day I picked it up from the dealership. The ceramic coating is flawless.",
    rating: 5
  },
  {
    name: "Sarah M.",
    vehicle: "Range Rover Autobiography",
    content: "I have 3 kids who destroy the inside of my car. Express restored the interior to factory condition. The convenience of them coming to my office was a game changer.",
    rating: 5
  },
  {
    name: "David L.",
    vehicle: "Tesla Model S Plaid",
    content: "The paint correction removed 3 years of swirl marks. The reflection is like glass now. Highest quality mobile detaiing I've ever experienced.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-32 bg-secondary border-y border-white/5 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-bold mb-4 block">Client Reputation</span>
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-6">
            Tested. <span className="text-gray-500">Trusted.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-primary/50 backdrop-blur-xl border border-white/10 p-8 rounded-sm relative group hover:border-accent/50 transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-gray-300 font-light text-lg mb-8 italic">"{review.content}"</p>
              
              <div className="mt-auto">
                <p className="font-bold uppercase tracking-wider text-white text-sm">{review.name}</p>
                <p className="text-accent text-xs font-semibold uppercase tracking-widest">{review.vehicle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
