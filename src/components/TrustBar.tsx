import { motion, useInView, useAnimation } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(from + (to - from) * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(to);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export function TrustBar() {
  const stats = [
    { label: "Google Reviews", value: 15, suffix: " (5.0★)" },
    { label: "Satisfaction Rate", value: 100, suffix: "%" },
    { label: "Hours / Days", value: 24, suffix: "/7" },
    { label: "Cars Detailed", value: 500, suffix: "+" },
  ];

  return (
    <section className="py-20 bg-secondary relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 flex items-center">
                <Counter from={0} to={stat.value} />
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <div className="text-gray-400 text-xs uppercase tracking-widest font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
