/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Zap, 
  ArrowRight,
  Code,
  Layout,
  Globe,
  Monitor
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 md:px-12 py-8 border-b grid-border relative z-50">
      <div className="text-2xl font-black tracking-tighter">FN.</div>
      <div className="hidden md:flex gap-10 mono-label">
        <a href="#projects" className="hover:text-brand-accent transition-colors">Works</a>
        <a href="#about" className="hover:text-brand-accent transition-colors">Experience</a>
        <a href="#contact" className="hover:text-brand-accent text-brand-accent">Let's Talk</a>
      </div>
      <div className="md:hidden">
        <Zap size={20} className="text-brand-accent" />
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative flex flex-col min-h-screen">
      {/* Background massive font */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none overflow-hidden">
        <span className="text-[200px] md:text-[400px] lg:text-[600px] font-black leading-none whitespace-nowrap">FAST</span>
      </div>

      <div className="flex-1 px-8 md:px-12 pt-16 md:pt-24 relative z-10">
        <div className="flex items-center flex-wrap gap-4 mb-6">
          <span className="bg-brand-purple text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">Digital Creator</span>
          <span className="mono-label text-brand-accent opacity-100 font-mono">#001_PORTFOLIO</span>
          <span className="mono-label !text-sm text-white/60 border-l grid-border pl-4">الموقع لأغراض التصميم والجودة فقط</span>
        </div>
        <h1 className="massive-text mb-12">
          FAST<br/>NARO
        </h1>
      </div>

      <div className="mt-auto grid grid-cols-1 md:grid-cols-12 border-t grid-border md:h-80 w-full overflow-hidden">
        <div className="md:col-span-5 border-b md:border-b-0 md:border-r grid-border p-8 md:p-12 flex flex-col justify-between group cursor-default">
          <p className="text-xl md:text-2xl leading-relaxed font-light text-brand-text/90 relative">
            إبداع رقمي بلا حدود. <br/>
            <span className="opacity-50 text-sm font-normal block mt-4">Crafting high-speed visual narratives and immersive digital interfaces with a focus on bold aesthetics.</span>
          </p>
          <div className="flex gap-4 mt-8 opacity-40 group-hover:opacity-100 transition-opacity">
            <div className="w-4 h-4 rounded-full bg-brand-purple"></div>
            <div className="w-4 h-4 rounded-full bg-brand-accent"></div>
            <div className="w-4 h-4 rounded-full bg-white"></div>
          </div>
        </div>

        <div className="md:col-span-4 border-b md:border-b-0 md:border-r grid-border p-8 md:p-12">
          <h3 className="mono-label mb-8 text-brand-accent opacity-100">CAPABILITIES</h3>
          <ul className="space-y-4 font-mono text-xs opacity-70">
            <li className="flex items-center gap-3"><span className="text-brand-accent">01 /</span> UI DESIGN & PROTOTYPING</li>
            <li className="flex items-center gap-3"><span className="text-brand-accent">02 /</span> FRONT-END ARCHITECTURE</li>
            <li className="flex items-center gap-3"><span className="text-brand-accent">03 /</span> BRANDING & IDENTITY</li>
            <li className="flex items-center gap-3"><span className="text-brand-accent">04 /</span> PERFORMANCE OPTIMIZATION</li>
          </ul>
        </div>

        <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-between bg-white/[0.03]">
          <div>
            <h3 className="mono-label mb-4 text-brand-accent opacity-100">STATUS</h3>
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
              <span className="text-xs uppercase tracking-widest font-bold">Available for hire</span>
            </div>
            <div className="mt-4 mono-label text-white/60 !text-sm font-bold">الدفع: تحويل بنكي فقط</div>
          </div>
          
          <a 
            href="https://wa.me/966504544022?text=أهلاً FastNaro، لدي فكرة مشروع وأود العمل معك"
            target="_blank"
            rel="noreferrer"
            className="group w-full flex items-center justify-between border-t grid-border pt-8 mt-12 md:mt-0 transition-colors hover:text-brand-accent text-right"
          >
            <span className="text-lg font-black tracking-tighter uppercase">ابدأ مشروعك الآن</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

const SectionHeading = ({ number, title }: { number: string, title: string }) => (
  <div className="flex flex-col mb-12">
    <span className="mono-label mb-2 text-brand-accent">{number} // COLLECTION</span>
    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">{title}</h2>
  </div>
);

const Feature = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="p-8 border grid-border hover:bg-white/[0.02] transition-all group">
    <div className="mb-6 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all origin-left">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{title}</h3>
    <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

const Portfolio = () => {
  const products = [
    { 
      title: "أداة 60fps", 
      price: "7 ريال", 
      label: "Performance // Tool",
      icon: Zap
    },
    { 
      title: "مجموعة الفلاتر", 
      price: "15 ريال", 
      label: "Visuals // Effects",
      extra: "تشمل Blur و Game Back و Game Size هدية",
      icon: Layout
    },
    { 
      title: "Adobe Premiere Pro 2025", 
      price: "10 ريال", 
      label: "Software // Edit",
      icon: Code
    },
    { 
      title: "Topaz Video AI", 
      price: "10 ريال", 
      label: "Software // AI",
      icon: Globe
    }
  ];

  return (
    <section id="projects" className="py-24 border-t grid-border" dir="rtl">
      <div className="px-8 md:px-12">
        <div className="flex flex-col mb-12">
          <span className="mono-label mb-2 text-brand-accent">02 // STORE</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">المنتجات</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t grid-border">
          {products.map((p, i) => (
            <div key={i} className="aspect-[4/5] md:aspect-square border-r border-b grid-border relative group overflow-hidden bg-white/[0.01]">
              <div className="absolute inset-0 bg-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 group-hover:scale-110 transition-transform duration-700">
                <p.icon size={120} />
              </div>
              
              <div className="absolute bottom-10 right-10 left-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-right">
                <span className="mono-label block mb-2">{p.label}</span>
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-2">{p.title}</h3>
                <div className="text-2xl font-black text-brand-accent mb-2">{p.price}</div>
                {p.extra && (
                  <p className="text-xs text-white/50 font-medium leading-relaxed max-w-xs">{p.extra}</p>
                )}
              </div>
              
              <div className="absolute top-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <a 
                  href={`https://wa.me/966504544022?text=${encodeURIComponent(`أهلاً FastNaro، أود شراء: ${p.title}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-brand-bg px-6 py-3 text-xs font-black uppercase tracking-widest shadow-2xl inline-block"
                >
                  اشتري الآن
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="border-t grid-border">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 md:p-24 border-b md:border-b-0 md:border-r grid-border bg-white/[0.01]">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-12">
            LET'S<br/>TALK
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            I'm currently accepting new projects and creative collaborations. If you have an idea, let's build it together.
          </p>
          <div className="mono-label mb-12 text-brand-accent border-l-2 border-brand-accent pl-4 !text-lg !opacity-100 font-bold">
            ملاحظة: الدفع عبر التحويل البنكي فقط
          </div>
          <a href="mailto:hello@fastnaro.com" className="text-2xl md:text-3xl font-black hover:text-brand-accent transition-colors underline decoration-2 underline-offset-8">
            HELLO@FASTNARO.COM
          </a>
        </div>
        <div className="p-8 md:p-24 flex flex-col justify-center">
          <div className="space-y-8">
            <a href="https://wa.me/966504544022" target="_blank" rel="noreferrer" className="flex justify-between items-center border-b grid-border pb-6 group cursor-pointer hover:text-brand-accent">
              <span className="text-xl font-bold uppercase tracking-tight">WhatsApp / 0504544022</span>
              <ArrowRight className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
            </a>
            <a href="https://www.tiktok.com/@fastnaro1" target="_blank" rel="noreferrer" className="flex justify-between items-center border-b grid-border pb-6 group cursor-pointer hover:text-brand-accent">
              <span className="text-xl font-bold uppercase tracking-tight">TikTok / fastnaro1</span>
              <ArrowRight className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
            </a>
            <div className="flex justify-between items-center border-b grid-border pb-6 group cursor-pointer hover:text-brand-accent opacity-50">
              <span className="text-xl font-bold uppercase tracking-tight">X.com</span>
              <ArrowRight className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
            </div>
            <div className="flex justify-between items-center border-b grid-border pb-6 group cursor-pointer hover:text-brand-accent opacity-50">
              <span className="text-xl font-bold uppercase tracking-tight">GitHub</span>
              <ArrowRight className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="px-8 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center border-t grid-border bg-white/[0.02]">
      <div className="mono-label mb-4 md:mb-0">LOC: 24.7136° N, 46.6753° E</div>
      <div className="mono-label mb-4 md:mb-0 text-center">
        <div>© {new Date().getFullYear()} FASTNARO STUDIO</div>
        <div className="text-sm mt-2 text-white/60 font-bold">الموقع لأغراض التصميم والجودة فقط</div>
      </div>
      <div className="mono-label">BUILT WITH SPEED</div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans selection:bg-brand-purple selection:text-white antialiased border-[8px] md:border-[16px] grid-border h-full overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      
      {/* Texture Layer */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50" />
    </div>
  );
}
