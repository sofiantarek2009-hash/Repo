import React from 'react';
import { FloatingElements } from './components/FloatingElements';
import { Hero } from './components/Hero';
import { MoodMatcher } from './components/MoodMatcher';
import { Ticket, Music, Utensils, Instagram, Flame } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, color }: { icon: any, title: string, desc: string, color: string }) => (
  <div className="glass-panel p-8 rounded-[2rem] hover:bg-white/5 transition-all duration-300 group cursor-default hover:border-jolly-pink/30 hover:-translate-y-2">
    <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6 text-black transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
      <Icon size={28} strokeWidth={2.5} />
    </div>
    <h3 className="font-display text-2xl mb-3 text-white tracking-wide group-hover:text-jolly-cyan transition-colors">{title}</h3>
    <p className="font-sans text-white/70 leading-relaxed text-lg">{desc}</p>
  </div>
);

const Ticker = () => (
  <div className="bg-jolly-pink overflow-hidden py-2 border-b-4 border-black relative z-50">
    <div className="whitespace-nowrap animate-marquee flex gap-8 text-black font-display text-lg items-center">
      <span>🚨 WIN FREE BOUNCY HOUSE TICKETS</span>
      <span>•</span>
      <span>TAKE THE SURVEY NOW</span>
      <span>•</span>
      <span>FREE MOJITOS UP FOR GRABS</span>
      <span>•</span>
      <span>HELP JOLLYPOP TAKE OVER NIS MART</span>
      <span>•</span>
      <span>🚨 WIN FREE BOUNCY HOUSE TICKETS</span>
      <span>•</span>
      <span>TAKE THE SURVEY NOW</span>
      <span>•</span>
      <span>FREE MOJITOS UP FOR GRABS</span>
      <span>•</span>
      <span>HELP JOLLYPOP TAKE OVER NIS MART</span>
      <span>•</span>
      <span>🚨 WIN FREE BOUNCY HOUSE TICKETS</span>
      <span>•</span>
      <span>TAKE THE SURVEY NOW</span>
      <span>•</span>
      <span>FREE MOJITOS UP FOR GRABS</span>
      <span>•</span>
      <span>HELP JOLLYPOP TAKE OVER NIS MART</span>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative font-sans selection:bg-jolly-pink selection:text-white pb-10">
      <FloatingElements />
      
      <Ticker />

      <main className="relative">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-6 mb-2">
           <div className="text-3xl font-display text-white tracking-tighter transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer">
             JOLLY<span className="text-jolly-pink text-stroke">POP</span>
           </div>
           <div className="hidden md:flex items-center gap-2 text-sm font-bold text-jolly-cyan tracking-widest uppercase bg-black/30 px-4 py-2 rounded-full border border-white/10">
             <Flame size={16} className="text-orange-500 animate-pulse" />
             Project NIS Mart
           </div>
        </nav>

        {/* SECTION 1: HERO & SURVEY (Gamified) */}
        <Hero />
        
        {/* SECTION 2: WHAT WE OFFER */}
        <div className="max-w-7xl mx-auto px-4 mb-24">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-[2px] w-12 bg-jolly-pink/50"></div>
            <h2 className="text-3xl md:text-5xl font-display text-white inline-block drop-shadow-lg">
              THE <span className="text-jolly-lime">CHAOS</span> MENU
            </h2>
            <div className="h-[2px] w-12 bg-jolly-pink/50"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Ticket} 
              title="Anti-Gravity Zone" 
              desc="A massive bouncy house right in the middle of NIS Mart. Forget walking, start bouncing." 
              color="bg-jolly-pink"
            />
            <FeatureCard 
              icon={Utensils} 
              title="Snack Attack" 
              desc="Mystery flavored chips, spicy nachos, and candy that pops. Eat at your own risk (of joy)." 
              color="bg-jolly-cyan"
            />
            <FeatureCard 
              icon={Music} 
              title="Liquid Energy" 
              desc="Neon Mojitos and fizz that hits different. The perfect cooldown after a jump session." 
              color="bg-jolly-lime"
            />
          </div>
        </div>

        {/* SECTION 3: INTERACTIVE AI */}
        <MoodMatcher />

        {/* FOOTER */}
        <footer className="mt-32 border-t border-white/10 bg-black/40 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h4 className="font-display text-3xl text-white mb-2">JOLLYPOP</h4>
              <p className="text-white/50 text-sm">See you at NIS Mart!</p>
            </div>
            
            <div className="flex gap-6">
               <a href="#" className="text-white/70 hover:text-jolly-pink transition-colors transform hover:scale-125">
                 <Instagram size={32} />
               </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;