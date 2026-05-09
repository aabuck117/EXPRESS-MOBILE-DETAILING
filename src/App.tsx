/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { BeforeAfter } from './components/BeforeAfter';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <BeforeAfter />
        <Services />
        <WhyChooseUs />
        <Experience />
        <Testimonials />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
