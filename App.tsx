import React from 'react';
import { FloatingElements } from './components/FloatingElements';
import { Hero } from './components/Hero';
import { MoodMatcher } from './components/MoodMatcher';
import { Ticket, Music, Utensils, Zap, Star } from './components/Icons';

// ==========================================
// 🔗 ENTER YOUR SURVEY LINK HERE 🔗
// ==========================================
const SURVEY_URL = "https://docs.google.com/forms/d/e/1FAIpQLScY6jhzkgh90LoLW45LbEGCq2p3UIM3JQJiI1hXWOB4bhoD4A/viewform?usp=dialog"; 
// ==========================================

const FeatureCard = ({ icon: Icon, title, desc, color, rotate }: { icon: any, title: string, desc: string, color: string, rotate: string }) => (
  <div className={`glass-card p-8 rounded-3xl relative group hover:-translate-y-2 transition-transform duration-300 ${rotate}`}>
    <div className={`absolute -inset-0.5 ${color} opacity-20 rounded-3xl blur group-hover:opacity-40 transition-opacity`}></div>
    <div className="relative z-10">
      <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center mb-6 text-black shadow-lg group-hover:scale-110 transition-transform`}>
        <Icon size={32} strokeWidth={2.5} />
      </div>
      <h3 className="font-display text-2xl mb-2 text-white tracking-wide uppercase">{title}</h3>
      <p className="font-sans text-gray-300 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Ticker = () => (
  <div className="bg-jolly-yellow border-y-4 border-black relative z-50 transform -skew-y-1 mt-2">
    <div className="whitespace-nowrap animate-marquee flex gap-12 text-black font-black text-xl py-3 items-center tracking-widest uppercase font-display">
      <span>🎁 WIN FREE BOUNCE PASSES</span>
      <Star fill="black" size={16} />
      <span>TAKE THE SURVEY</span>
      <Star fill="black" size={16} />
      <span>FREE MOJITOS</span>
      <Star fill="black" size={16} />
      <span>HELP NIS MART</span>
      <Star fill="black" size={16} />
      <span>🎁 WIN FREE BOUNCE PASSES</span>
      <Star fill="black" size={16} />
      <span>TAKE THE SURVEY</span>
      <Star fill="black" size={16} />
      <span>FREE MOJITOS</span>
      <Star fill="black" size={16} />
      <span>HELP NIS MART</span>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative font-sans selection:bg-jolly-cyan selection:text-black pb-20">
      <FloatingElements />
      
      <main className="relative z-10">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-8">
           <div className="flex flex-col">
             <div className="text-4xl font-display text-white tracking-tighter drop-shadow-[4px_4px_0_rgba(255,0,204,1)]">
               JOLLY<span className="text-jolly-cyan">POP</span>
             </div>
             <div className="text-xs font-bold text-jolly-lime tracking-[0.2em] uppercase">NIS Mart Project</div>
           </div>
           <a href={SURVEY_URL} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full border border-white/20 transition-all font-bold text-sm uppercase tracking-widest">
             <Zap size={16} className="text-jolly-yellow" />
             Take Survey
           </a>
        </nav>

        {/* SECTION 1: HERO & SURVEY */}
        <Hero surveyUrl={SURVEY_URL} />
        
        <Ticker />

        {/* SECTION 2: THE MENU */}
        <div className="max-w-7xl mx-auto px-4 mt-24 mb-32">
          <div className="text-center mb-16 relative">
            <h2 className="text-5xl md:text-7xl font-display text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 inline-block z-10 relative">
              THE <span className="text-jolly-pink underline decoration-wavy decoration-jolly-cyan">LINEUP</span>
            </h2>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-24 bg-jolly-purple/50 blur-3xl -z-10"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <FeatureCard 
              icon={Ticket} 
              title="Bouncy House" 
              desc="The crown jewel. A massive inflatable castle for you to jump your exam stress away." 
              color="bg-jolly-pink"
              rotate="rotate-2"
            />
            <FeatureCard 
              icon={Utensils} 
              title="Spicy Snacks" 
              desc="Loading up on chips, nachos, and mystery mixes. We need your vote on flavors!" 
              color="bg-jolly-cyan"
              rotate="-rotate-1"
            />
            <FeatureCard 
              icon={Music} 
              title="Neon Mojitos" 
              desc="Sparkling mocktails that glow. Refreshing, fizzy, and totally Instagrammable." 
              color="bg-jolly-lime"
              rotate="rotate-1"
            />
          </div>
        </div>

        {/* SECTION 3: INTERACTIVE AI */}
        <MoodMatcher />

        {/* FOOTER */}
        <footer className="mt-32 border-t border-white/10 bg-black/60 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-12 text-center">
             <h2 className="font-display text-3xl text-white mb-4">JOLLYPOP</h2>
             <p className="text-gray-400 mb-8">We can't wait to see you bouncing at NIS Mart.</p>
             <a href={SURVEY_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-jolly-cyan transition-colors">
               One last chance to win prizes →
             </a>
             <div className="mt-12 text-white/20 text-xs uppercase tracking-widest">
               © Jollypop Project • Built with Gemini
             </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;