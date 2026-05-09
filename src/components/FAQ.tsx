import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    q: "Do you need access to water or power?",
    a: "No. Our mobile units are fully self-contained. We bring our own spot-free water and whisper-quiet generators to complete the job anywhere."
  },
  {
    q: "How long does a premium detail take?",
    a: "It depends on the package and the starting condition of the vehicle. A maintenance detail takes 1.5 - 2 hours, while a full paint correction and ceramic coating can take 8+ hours."
  },
  {
    q: "What is a Ceramic Coating?",
    a: "A ceramic coating is a liquid polymer that chemically bonds with your vehicle's factory paint. It creates a semi-permanent, extremely hydrophobic layer of protection that enhances gloss and prevents dirt from sticking."
  },
  {
    q: "Do you service exotic and luxury vehicles?",
    a: "Yes. Our team is specifically trained in handling high-end clear coats, delicate interior leathers, and exotic materials like carbon fiber and alcantara."
  },
  {
    q: "How often should I have my car detailed?",
    a: "We recommend a deep detail 2-3 times a year, with a maintenance wash every 2-4 weeks to preserve the protective sealants and keep the interior pristine."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-secondary border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-bold mb-4 block">Knowledge Base</span>
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-6">
            Frequently Asked <span className="text-gray-500">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "border border-white/10 rounded-sm overflow-hidden transition-colors duration-300",
                  isOpen ? "bg-white/5 border-white/20" : "bg-transparent hover:border-white/20"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={cn("font-bold uppercase tracking-wider text-sm", isOpen ? "text-accent" : "text-white")}>
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-accent flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400 gap-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-400 font-light leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
