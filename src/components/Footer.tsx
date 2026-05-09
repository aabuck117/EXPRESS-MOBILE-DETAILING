import { Car, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 group mb-6">
              <Car className="w-6 h-6 text-accent" />
              <span className="font-display font-bold text-lg tracking-wide uppercase">
                Express <span className="text-gray-400 font-light">Detailing</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
              At Express Mobile Detailing, we bring top-quality car care directly to your doorstep. We specialize in interior and exterior detailing, paint correction, ceramic coating, and more.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Full Detail</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Ceramic Coating</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Paint Correction</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Interior Restoration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Our Approach</a></li>
              <li><a href="#transformations" className="text-gray-400 text-sm hover:text-white transition-colors">Transformations</a></li>
              <li><a href="#reviews" className="text-gray-400 text-sm hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-400 text-sm hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Service Area</h4>
            <p className="text-gray-400 text-sm font-light leading-relaxed mb-4">
              Areas served: Ypsilanti and nearby areas. Our fully equipped mobile units deliver professional detailing services wherever you are.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-gray-500 font-light tracking-wide uppercase">
          <p>© {new Date().getFullYear()} Express Mobile Detailing. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
