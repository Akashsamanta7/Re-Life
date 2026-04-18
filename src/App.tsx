/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Tv, 
  Settings, 
  ShieldCheck, 
  Truck, 
  Phone, 
  MessageCircle, 
  Award, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Star,
  ChevronRight,
  Menu,
  X,
  Wrench,
  Monitor,
  Volume2,
  HardDrive
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-glass backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-brand-primary p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-brand-primary/20">
              <Tv className="w-8 h-8 text-white" />
            </div>
            <span className="font-display font-black text-3xl md:text-5xl tracking-tighter text-brand-primary uppercase">
              RE-<span className="text-brand-secondary">LIFE</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="font-bold text-brand-secondary hover:text-brand-primary transition-colors text-sm uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <span className="text-brand-primary font-bold text-sm hidden lg:block tracking-tight">+91 9836X 87219</span>
              <a 
                href="tel:+919836X87219"
                className="bg-brand-primary text-white px-6 py-2.5 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-slate-100 p-4"
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="p-3 font-medium text-slate-600 hover:bg-brand-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="tel:+919836X87219"
                className="bg-brand-600 text-white p-4 rounded-xl font-bold text-center"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-1 rounded-lg text-sm font-bold mb-6 border border-brand-primary/20">
              <Award className="w-4 h-4" />
              #1 TV Repair Service in Kolkata
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold text-brand-secondary leading-[1.1] mb-6 tracking-tight">
              TV Repair Service <span className="text-brand-primary underline decoration-brand-primary/20">in Kolkata</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              Fast, Affordable, Doorstep Service at your Convenience. We bring your screens back to life with expert care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+919836X87219"
                className="flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a 
                href="https://wa.me/919836X87219"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-amber-500">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-sm font-medium text-slate-500">500+ Happy Customers</span>
              </div>
            </div>
          </motion.div>

          {/* New Hero Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative hidden md:block"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl shadow-brand-primary/20 border-8 border-white/50 rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://picsum.photos/seed/smart-tv/800/600" 
                alt="Modern Smart TV Repair" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative background elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 border border-white/10 rounded-full -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Tv className="w-8 h-8" />,
      title: "LED/LCD TV Repair",
      desc: "Specialized repair for all major brands and models with genuine spare parts."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Smart TV Repair",
      desc: "Logic board issues, software glitches, and connectivity problems solved expertely."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Screen Replacement",
      desc: "Cracked or damaged display panels replaced with high-quality original screens."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "TV Installation & Wall Mounting",
      desc: "Secure and clean mounting for any size TV with wire management."
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: "Sound & Display Issues",
      desc: "Fixing flickering displays, horizontal lines, sound distortion, or no sound."
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Board & Power Issues",
      desc: "Power supply failures, motherboard repairs, and complex circuit issues."
    }
  ];

  return (
    <section id="services" className="py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title-line">Our Expert Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Professional solutions for every screen. From component-level repair to secure wall mounting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6"
            >
              <div className="w-12 h-12 bg-white/40 text-brand-primary rounded-xl flex items-center justify-center mb-6 border border-white/50">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-secondary mb-2">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">{service.desc}</p>
              <a href="#contact" className="inline-flex items-center gap-1 text-brand-primary font-bold hover:underline text-sm uppercase tracking-wide">
                Book Repair <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const benefits = [
    { title: "Same-Day Service", desc: "We aim to repair your TV within 24 hours of your call." },
    { title: "Experienced Technician", desc: "10+ years of expertise in handling high-end Smart TVs." },
    { title: "Affordable Pricing", desc: "Transparent costs with no hidden charges. Local prices." },
    { title: "Doorstep Repair", desc: "No need to carry heavy TVs. We come to your home." },
    { title: "Service Across Kolkata", desc: "Covering North, South, Central, and Greater Kolkata." },
    { title: "3-Month Warranty", desc: "Peace of mind with our service and parts warranty." }
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-10">
            <h2 className="section-title-line">Why Re-Life?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-brand-secondary mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div id="pricing" className="glass-card p-10 text-center border-2 border-dashed border-brand-primary/30 scroll-mt-24">
            <div className="text-sm font-bold text-brand-secondary mb-2 uppercase tracking-widest">Starting Price</div>
            <div className="bg-brand-accent text-white py-2 px-8 rounded-full font-black text-3xl inline-block shadow-lg shadow-brand-accent/20">
              ₹199*
            </div>
            <p className="mt-4 text-xs text-slate-500 leading-relaxed italic">
              *Inspection fee. Final price depends on the specific repair requirements.
            </p>
            <div className="mt-8 pt-8 border-t border-brand-primary/10">
              <p className="text-slate-600 font-bold text-lg italic">"Best doorstep service in Kolkata."</p>
              <p className="text-brand-primary font-bold text-sm mt-1 uppercase">— Verified Customer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsAndContact = () => {
  const reviews = [
    {
      name: "Debashish Mukherjee",
      loc: "Salt Lake",
      text: "Excellent service! My Samsung LED TV had a vertical line issue. The technician arrived within 2 hours and fixed it at my home.",
      rating: 5
    },
    {
      name: "Soma Roy",
      loc: "Behala",
      text: "Very affordable. Re-Life fixed the motherboard existing one for much less cost than official centers.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="glass-card p-10">
            <h2 className="section-title-line">What Customers Say</h2>
            <div className="space-y-4">
              {reviews.map((review, idx) => (
                <div key={idx} className="p-4 bg-white/30 rounded-xl border-l-[3px] border-brand-primary">
                  <p className="text-sm text-slate-600 italic">"{review.text}"</p>
                  <div className="mt-2 text-xs font-bold text-brand-secondary uppercase">
                    — {review.name}, {review.loc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="contact" className="glass-card p-10 scroll-mt-24">
            <h2 className="section-title-line">Book a Repair</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', address: '', message: '' });
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-brand-accent/20 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-brand-secondary mb-1">Request Received!</h3>
        <p className="text-sm text-slate-500 mb-6">We'll call you back instantly.</p>
        <button onClick={() => setIsSuccess(false)} className="text-brand-primary font-bold text-sm uppercase tracking-wider hover:underline">Send Another</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-bold text-brand-secondary uppercase mb-1">Your Name</label>
        <input 
          type="text" required placeholder="e.g. Amit Mukherjee"
          value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full p-3 bg-white/50 border border-slate-200 rounded-lg text-sm focus:ring-1 focus:ring-brand-primary focus:outline-none"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-brand-secondary uppercase mb-1">Phone Number</label>
          <input 
            type="tel" required placeholder="+91 ..."
            value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full p-3 bg-white/50 border border-slate-200 rounded-lg text-sm focus:ring-1 focus:ring-brand-primary focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-brand-secondary uppercase mb-1">Address / Landmark</label>
          <input 
            type="text" required placeholder="e.g. Salt Lake Sector V"
            value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})}
            className="w-full p-3 bg-white/50 border border-slate-200 rounded-lg text-sm focus:ring-1 focus:ring-brand-primary focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-brand-secondary uppercase mb-1">Issue Description</label>
        <textarea 
          rows={3} placeholder="e.g. Screen flickering, No sound..."
          value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full p-3 bg-white/50 border border-slate-200 rounded-lg text-sm focus:ring-1 focus:ring-brand-primary focus:outline-none resize-none"
        />
      </div>
      <button className="w-full bg-brand-secondary text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:opacity-90 transition-all text-sm shadow-lg">
        Request Call Back
      </button>
    </form>
  );
};

// --- Footer ---

const Footer = () => {
  return (
    <footer className="bg-black/5 py-12 border-t border-brand-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Tv className="w-5 h-5 text-brand-primary" />
            <span className="font-bold text-brand-secondary">&copy; {new Date().getFullYear()} Re-Life TV Repair Service.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-brand-secondary font-bold">Serving Salt Lake, Behala, Garia, Howrah & New Town.</span>
            <span className="hidden md:block">|</span>
            <span className="text-brand-primary font-bold">10 AM - 9 PM Daily</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative antialiased selection:bg-brand-primary/20 selection:text-brand-primary">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <TestimonialsAndContact />
      </main>

      <Footer />

      {/* Mobile Sticky Bar */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
        <div className="bg-brand-glass backdrop-blur-lg border border-brand-glass-border p-2 rounded-2xl shadow-2xl flex gap-2">
          <a 
            href="tel:+919836X87219"
            className="flex-1 bg-brand-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <a 
            href="https://wa.me/919836X87219"
            className="w-14 h-14 bg-[#25D366] text-white rounded-xl flex items-center justify-center active:scale-95 transition-all shadow-lg"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Floating WhatsApp Button for Desktop */}
      <a 
        href="https://wa.me/919836X87219"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 z-40 w-16 h-16 bg-[#25D366] text-white rounded-full items-center justify-center shadow-2xl hover:opacity-90 hover:-translate-y-1 transition-all group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-brand-secondary text-white px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          How can we help?
        </span>
      </a>
    </div>
  );
}
