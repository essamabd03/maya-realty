'use client';

import { useState } from 'react';

const NAV_LINKS = ['About', 'Services', 'Areas', 'Reviews', 'Contact'];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/95 backdrop-blur-md border-b border-[#C9A84C]/20">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex flex-col leading-none">
          <span className="text-[#C9A84C] font-bold tracking-[0.2em] text-xs uppercase">Maya Ramadan</span>
          <span className="text-white/60 text-[10px] tracking-[0.15em] uppercase">REALTOR® · Gold Door Realty</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-white/70 hover:text-[#C9A84C] text-sm tracking-widest uppercase transition-colors">{l}</a>
          ))}
          <a href="tel:+17819740706" className="bg-[#C9A84C] text-[#1A1A1A] px-5 py-2 text-xs font-bold tracking-widest uppercase hover:bg-[#E8C97A] transition-colors">
            781-974-0706
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-[#C9A84C]/20 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-white/70 text-sm tracking-widest uppercase">{l}</a>
          ))}
          <a href="tel:+17819740706" className="text-[#C9A84C] font-bold text-sm">781-974-0706</a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#1A1A1A] overflow-hidden">
      {/* Gold accent lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#C9A84C]/30 to-transparent ml-12" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#C9A84C]/30 to-transparent mr-12" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-12 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text side */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-6">Gold Door Realty · RI & MA</p>
          <h1 className="text-white text-5xl sm:text-6xl xl:text-7xl font-bold leading-tight mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            I Will Open<br />
            <span className="text-[#C9A84C]">The Door</span><br />
            To Your Home
          </h1>
          <p className="text-white/60 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Maya M. Ramadan — REALTOR® &amp; CEBA, serving Rhode Island and Massachusetts with dedication, expertise, and heart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#contact" className="bg-[#C9A84C] text-[#1A1A1A] px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-[#E8C97A] transition-colors">
              Let's Find Your Home
            </a>
            <a href="#about" className="border border-white/30 text-white/80 px-8 py-4 text-sm tracking-widest uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">
              About Maya
            </a>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 sm:gap-12">
            {[
              { num: 'RI & MA', label: 'Licensed' },
              { num: 'CEBA', label: 'Certified' },
              { num: '5K+', label: 'Followers' },
            ].map(s => (
              <div key={s.label} className="text-center lg:text-left">
                <p className="text-[#C9A84C] text-2xl font-bold">{s.num}</p>
                <p className="text-white/50 text-xs tracking-widest uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo side */}
        <div className="flex-shrink-0 relative">
          <div className="absolute -inset-3 border border-[#C9A84C]/30" />
          <div className="absolute -inset-6 border border-[#C9A84C]/10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/maya-photo.jpeg"
            alt="Maya Ramadan — REALTOR®"
            className="relative w-72 sm:w-80 lg:w-96 object-cover object-top"
            style={{ aspectRatio: '3/4' }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#C9A84C]/60 to-transparent" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">About Maya</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Always Open Doors<br />To New Houses
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Maya M. Ramadan is a licensed REALTOR® and Certified Exclusive Buyer&apos;s Agent (CEBA) serving clients across Rhode Island and Massachusetts. With a genuine passion for real estate and a personal touch, Maya guides buyers, sellers, and renters through every step of the journey.
          </p>
          <p className="text-gray-600 leading-relaxed mb-5">
            Whether you&apos;re purchasing your first home, selling a property, or searching for the perfect rental, Maya brings market expertise, honest guidance, and unwavering dedication to every transaction.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            As an Arabic-speaking agent, Maya also proudly serves the Arab community across New England — providing real estate guidance in both English and Arabic.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+17819740706" className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-3 text-sm font-bold tracking-widest uppercase hover:bg-[#C9A84C] hover:text-[#1A1A1A] transition-colors">
              📞 Call Maya
            </a>
            <a href="mailto:Maya@golddoorrealty.com" className="inline-flex items-center gap-2 border border-[#1A1A1A] text-[#1A1A1A] px-6 py-3 text-sm font-bold tracking-widest uppercase hover:bg-[#1A1A1A] hover:text-white transition-colors">
              ✉ Email Maya
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="bg-[#1A1A1A] rounded-none p-8 border-l-4 border-[#C9A84C]">
            <div className="text-[#C9A84C] text-4xl mb-4">&ldquo;</div>
            <p className="text-white text-xl leading-relaxed italic" style={{ fontFamily: 'Georgia, serif' }}>
              Always open doors to new houses. I will open the Door to your Home.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-[#C9A84C] font-bold">Maya M. Ramadan</p>
              <p className="text-white/50 text-sm">REALTOR® &amp; CEBA · Gold Door Realty</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              { label: 'Brokerage', value: 'Gold Door Realty' },
              { label: 'Designation', value: 'REALTOR® · CEBA' },
              { label: 'Phone', value: '781-974-0706' },
              { label: 'Instagram', value: '@maya_finds_homes' },
            ].map(i => (
              <div key={i.label} className="bg-white border border-gray-200 p-4">
                <p className="text-[10px] text-gray-400 tracking-widest uppercase mb-1">{i.label}</p>
                <p className="text-[#1A1A1A] text-sm font-semibold">{i.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: '🏡',
      title: 'Buying a Home',
      desc: 'As a Certified Exclusive Buyer\'s Agent (CEBA), Maya represents only your interests — never the seller\'s. She\'ll guide you from first look to closing day.',
      cta: 'Start Your Search',
    },
    {
      icon: '🔑',
      title: 'Selling a Property',
      desc: 'Maya combines smart pricing strategy, professional marketing, and deep local knowledge to get your home sold fast and at the best price.',
      cta: 'Get a Free Valuation',
    },
    {
      icon: '🏢',
      title: 'Rentals',
      desc: 'Looking for the right rental in RI or MA? Maya knows the local rental market inside and out and will find you the perfect fit.',
      cta: 'Browse Rentals',
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">What I Do</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Full-Service Real Estate
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.title} className="border border-[#C9A84C]/20 p-8 hover:border-[#C9A84C] transition-colors group">
              <div className="text-4xl mb-6">{s.icon}</div>
              <h3 className="text-white text-xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{s.desc}</p>
              <a href="#contact" className="text-[#C9A84C] text-xs tracking-widest uppercase font-bold group-hover:underline">{s.cta} →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Areas() {
  const areas = [
    { state: 'Rhode Island', cities: ['Providence', 'Warwick', 'Cranston', 'Pawtucket', 'North Providence', 'Johnston', 'East Providence', 'Woonsocket', 'Newport', 'North Kingstown'] },
    { state: 'Massachusetts', cities: ['Boston', 'Brockton', 'Quincy', 'Fall River', 'New Bedford', 'Worcester', 'Attleboro', 'Taunton', 'Stoughton', 'Canton'] },
  ];

  return (
    <section id="areas" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Service Area</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Rhode Island &amp; Massachusetts
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">Licensed and active in both states — wherever you need to be, Maya can help you get there.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {areas.map(a => (
            <div key={a.state} className="bg-white border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-[#C9A84C]" />
                <h3 className="text-[#1A1A1A] font-bold text-lg tracking-wider uppercase">{a.state}</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {a.cities.map(c => (
                  <div key={c} className="flex items-center gap-2 text-gray-600 text-sm py-1">
                    <span className="w-1 h-1 rounded-full bg-[#C9A84C] flex-shrink-0" />
                    {c}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-sm mt-8">Don&apos;t see your city? Reach out — Maya covers a wide area across both states.</p>
      </div>
    </section>
  );
}

function Reviews() {
  const MAPS_URL = 'https://www.google.com/maps/place/?q=place_id:ChIJrx8u1KNr5lkR94ARGn2_auk';
  const REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJrx8u1KNr5lkR94ARGn2_auk';

  const testimonials = [
    {
      text: "Maya made buying our first home in Providence a seamless, stress-free experience. She was always available, incredibly knowledgeable, and fought hard for us at every step.",
      author: "Sarah & James K.",
      detail: "First-time Homebuyers · Providence, RI",
    },
    {
      text: "As an Arabic-speaking family new to Rhode Island, finding Maya was a blessing. She understood our needs perfectly and found us our dream home. We couldn't be happier.",
      author: "Fatima A.",
      detail: "Buyer · North Providence, RI",
    },
    {
      text: "Maya sold our Cranston home in just 11 days — above asking price. Her marketing strategy and negotiation skills are second to none. Highly recommend!",
      author: "Michael R.",
      detail: "Seller · Cranston, RI",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Client Reviews</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            What Clients Are Saying
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Real stories from real clients. Maya's mission is simple — make the process easy and get you the best outcome.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-gray-200 p-8 relative">
              <div className="flex gap-0.5 mb-4">
                {[1,2,3,4,5].map(s => (
                  <span key={s} className="text-[#C9A84C] text-lg">★</span>
                ))}
              </div>
              <div className="text-[#C9A84C] text-3xl leading-none mb-3">&ldquo;</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">{t.text}</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-[#1A1A1A] font-bold text-sm">{t.author}</p>
                <p className="text-gray-400 text-xs mt-0.5 tracking-wide">{t.detail}</p>
              </div>
              <div className="absolute top-4 right-4">
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps embed + Leave a Review CTA */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="flex-1 overflow-hidden border border-gray-200" style={{ minHeight: '300px' }}>
            <iframe
              src="https://maps.google.com/maps?place_id=ChIJrx8u1KNr5lkR94ARGn2_auk&output=embed"
              width="100%"
              height="340"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gold Door Realty on Google Maps"
            />
          </div>

          <div className="lg:w-80 flex flex-col gap-4">
            <div className="bg-[#1A1A1A] p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(s => <span key={s} className="text-[#C9A84C] text-xl">★</span>)}
                </div>
                <h3 className="text-white text-xl font-bold mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  Share Your Experience
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Worked with Maya? Your Google review helps other families find the trusted guidance they need.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#C9A84C] text-[#1A1A1A] py-4 font-bold text-xs tracking-widest uppercase hover:bg-[#E8C97A] transition-colors text-center"
                >
                  <span>★</span> Leave a Google Review
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-[#C9A84C]/30 text-[#C9A84C] py-3 text-xs tracking-widest uppercase hover:border-[#C9A84C] transition-colors text-center"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', type: 'buy' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Let&apos;s Find Your<br />Perfect Home
          </h2>
          <p className="text-white/50 leading-relaxed mb-10">
            Ready to buy, sell, or rent? Have questions about the market? Reach out and Maya will personally get back to you.
          </p>
          <div className="space-y-5">
            {[
              { label: 'Phone', value: '781-974-0706', href: 'tel:+17819740706', icon: '📞' },
              { label: 'Email', value: 'Maya@golddoorrealty.com', href: 'mailto:Maya@golddoorrealty.com', icon: '✉' },
              { label: 'Instagram', value: '@maya_finds_homes', href: 'https://instagram.com/maya_finds_homes', icon: '📸' },
              { label: 'Brokerage', value: 'Gold Door Realty', href: 'https://golddoorrealty.com', icon: '🏢' },
            ].map(c => (
              <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                className="flex items-start gap-4 group">
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <p className="text-[10px] text-[#C9A84C] tracking-widest uppercase">{c.label}</p>
                  <p className="text-white group-hover:text-[#C9A84C] transition-colors text-sm mt-0.5">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-[#FAF8F5] p-8">
          {status === 'done' ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🏡</div>
              <h3 className="text-[#1A1A1A] text-xl font-bold mb-2" style={{ fontFamily: 'Georgia, serif' }}>Message Received!</h3>
              <p className="text-gray-500 text-sm">Maya will reach out to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div>
                <label className="block text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2">I am looking to…</label>
                <div className="grid grid-cols-3 gap-2">
                  {[['buy', 'Buy'], ['sell', 'Sell'], ['rent', 'Rent']].map(([val, label]) => (
                    <button key={val} type="button"
                      onClick={() => setForm(f => ({ ...f, type: val }))}
                      className={`py-2 text-xs font-bold tracking-widest uppercase border transition-colors ${form.type === val ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'border-gray-300 text-gray-500 hover:border-[#1A1A1A]'}`}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2">Name *</label>
                  <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full border border-gray-300 px-3 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors bg-white" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2">Phone</label>
                  <input type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    placeholder="(401) 555-0100"
                    className="w-full border border-gray-300 px-3 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors bg-white" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2">Email *</label>
                <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 px-3 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors bg-white" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2">Message</label>
                <textarea rows={4} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Tell Maya what you're looking for..."
                  className="w-full border border-gray-300 px-3 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors bg-white resize-none" />
              </div>
              {status === 'error' && <p className="text-red-500 text-xs">Something went wrong. Please call or email directly.</p>}
              <button type="submit" disabled={status === 'sending'}
                className="w-full bg-[#C9A84C] text-[#1A1A1A] py-4 font-bold text-sm tracking-widest uppercase hover:bg-[#E8C97A] disabled:opacity-50 transition-colors">
                {status === 'sending' ? 'Sending…' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#111] border-t border-[#C9A84C]/20 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-[#C9A84C] font-bold tracking-[0.2em] text-sm uppercase">Maya M. Ramadan</p>
          <p className="text-white/40 text-xs mt-1">REALTOR® &amp; CEBA · Gold Door Realty · RI &amp; MA</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:+17819740706" className="text-white/50 hover:text-[#C9A84C] text-xs transition-colors">781-974-0706</a>
          <a href="mailto:Maya@golddoorrealty.com" className="text-white/50 hover:text-[#C9A84C] text-xs transition-colors">Maya@golddoorrealty.com</a>
          <a href="https://instagram.com/maya_finds_homes" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#C9A84C] text-xs transition-colors">@maya_finds_homes</a>
        </div>
        <p className="text-white/20 text-xs">© {new Date().getFullYear()} Maya M. Ramadan. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Areas />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}
