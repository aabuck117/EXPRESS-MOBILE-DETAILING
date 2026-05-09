import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';

interface SliderProps {
  beforeImg: string;
  afterImg: string;
  label: string;
}

function BeforeAfterSlider({ beforeImg, afterImg, label }: SliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerMove = (e: React.PointerEvent | PointerEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  useEffect(() => {
    const handleGlobalPointerUp = () => setIsDragging(false);
    const handleGlobalPointerMove = (e: PointerEvent) => {
      if (isDragging) handlePointerMove(e);
    };

    if (isDragging) {
      window.addEventListener('pointerup', handleGlobalPointerUp);
      window.addEventListener('pointermove', handleGlobalPointerMove);
    }

    return () => {
      window.removeEventListener('pointerup', handleGlobalPointerUp);
      window.removeEventListener('pointermove', handleGlobalPointerMove);
    };
  }, [isDragging]);

  return (
    <div className="flex flex-col gap-4">
      <div 
        ref={containerRef}
        className="relative w-full aspect-video md:aspect-[16/10] overflow-hidden rounded-sm cursor-ew-resize select-none metal-border group"
        onPointerDown={(e) => {
          setIsDragging(true);
          handlePointerMove(e);
        }}
      >
        {/* After Image (Base) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${afterImg})` }}
        />
        
        {/* Before Image (Top, clipped) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${beforeImg})`,
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
          }}
        />

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-bold tracking-wider uppercase z-10 pointer-events-none">Before</div>
        <div className="absolute top-4 right-4 bg-accent/80 backdrop-blur-md px-3 py-1 rounded text-xs font-bold tracking-wider uppercase text-white z-10 pointer-events-none">After</div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize transition-all z-20 pointer-events-none"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-accent rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
            <MoveHorizontal className="w-4 h-4 text-black" />
          </div>
        </div>
      </div>
      <h3 className="text-xl font-display font-semibold text-center">{label}</h3>
    </div>
  );
}

export function BeforeAfter() {
  const transformations = [
    {
      label: "Paint Correction & Ceramic",
      beforeImg: "https://images.unsplash.com/photo-1550346592-34f3b7d15f18?q=80&w=1200&auto=format&fit=crop", // Simulated before (muddy) maybe
      afterImg: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=1200&auto=format&fit=crop"
    },
    {
      label: "Deep Interior Restoration",
      beforeImg: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
      afterImg: "https://images.unsplash.com/photo-1542228262-3d663b306a53?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section id="transformations" className="py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-accent uppercase tracking-[0.2em] text-sm font-bold mb-4 block">Proven Results</span>
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-6">
            Witness The <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">Transformation</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Slide to reveal the dramatic difference our premium detailing services make. We don't just clean—we restore.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {transformations.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <BeforeAfterSlider {...t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
