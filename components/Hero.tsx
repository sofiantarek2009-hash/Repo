import React from 'react';
import { Gift, Ticket, Crown, ArrowRight, Sparkles } from './Icons';

interface HeroProps {
  surveyUrl: string;
}

const PrizeCard = ({ icon: Icon, title, sub, color, rotate }: { icon: any, title: string, sub: string, color: string, rotate: string }) => (
  <div className={`holographic-card w-full md:w-48 aspect-[3/4] rounded-2xl p-4 flex flex-col items-center justify-center gap-4 text-center transform hover:scale-105 transition-transform duration-300 ${rotate} shadow-2xl`}>
    <div className={`w-16 h-16 rounded-full bg-black/50 border-2 border-white/30 flex items-center justify-center ${color} shadow-[0_0_20px_rgba(255,255,255,0.2)]`}>
      <Icon size={32} className="text-white" />
    </div>
    <div>
      <div className="font-display text-xl text-white tracking-wide uppercase leading-none mb-1">{title}</div>
      <div className="font-sans text-xs font-bold text-white/70 uppercase tracking-widest">{sub}</div>
    </div>
    <div className="w-full h-1 bg-white/20 rounded-full mt-2"></div>
  </div>
);

export const Hero: React.FC<HeroProps> = ({ surveyUrl }) => {
  return (
    <div className="relative w-full pt-4 pb-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Left Side: Copy & CTA */}
        <div className="flex-1 text-center md:text-left z-10">
          <div className="inline-flex items-center gap-2 bg-jolly-pink/20 text-jolly-pink border border-jolly-pink/50 px-4 py-1 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 animate-pulse">
            <Sparkles size={12} /> Mission: Jollypop
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display text-white mb-6 leading-[0.9] drop-shadow-[0_4px_0_rgba(0,0,0,0.5)]">
            SURVEY <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-jolly-yellow via-jolly-lime to-jolly-cyan">AND WIN.</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed font-sans">
            We are building the <span className="text-white font-bold">ultimate bouncy house stall</span> at NIS Mart. 
            Tell us what you want to eat and drink, and stand a chance to win <span className="text-jolly-yellow font-bold">VIP Prizes</span>.
          </p>

          <a 
            href={surveyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block w-full md:w-auto"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-jolly-pink via-jolly-yellow to-jolly-cyan rounded-xl opacity-75 group-hover:opacity-100 blur transition duration-200 animate-tilt"></div>
            <button className="relative w-full md:w-auto bg-black hover:bg-gray-900 text-white font-display text-3xl px-10 py-6 rounded-xl border border-white/20 flex items-center justify-center gap-4 transition-colors">
              START SURVEY
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </a>
          
          <p className="mt-4 text-white/40 text-xs font-bold uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Takes 45 Seconds • 100% Free
          </p>
        </div>

        {/* Right Side: Visuals (Prizes) */}
        <div className="flex-1 relative w-full flex justify-center perspective-1000">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-jolly-purple/40 blur-[80px] rounded-full"></div>
          
          <div className="relative z-10 grid grid-cols-2 gap-4 animate-float">
             <div className="translate-y-12">
                <PrizeCard icon={Ticket} title="Bounce Pass" sub="Entry Ticket" color="bg-jolly-pink" rotate="-rotate-6" />
             </div>
             <div>
                <PrizeCard icon={Crown} title="VIP Access" sub="Skip the Queue" color="bg-jolly-yellow" rotate="rotate-6" />
             </div>
             <div className="col-span-2 flex justify-center -mt-8">
                <PrizeCard icon={Gift} title="Mojito + Chip" sub="Combo Deal" color="bg-jolly-cyan" rotate="rotate-0" />
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};