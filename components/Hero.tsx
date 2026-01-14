import React from 'react';
import { Gift, Zap, Ticket, Crown, ArrowRight } from 'lucide-react';

const PrizeItem = ({ icon: Icon, text, color }: { icon: any, text: string, color: string }) => (
  <div className="flex flex-col items-center gap-2 transform hover:scale-110 transition-transform cursor-pointer group">
    <div className={`w-16 h-16 rounded-full border-4 border-white/20 bg-black/40 flex items-center justify-center ${color} shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_25px_rgba(255,0,204,0.6)] transition-shadow`}>
      <Icon size={32} className="text-white drop-shadow-md" />
    </div>
    <span className="font-bold text-sm md:text-base text-center font-sans tracking-wide uppercase text-white/90 group-hover:text-jolly-yellow transition-colors">{text}</span>
  </div>
);

export const Hero: React.FC = () => {
  // Replace this with the actual survey link
  const SURVEY_LINK = "https://docs.google.com/forms/"; 

  return (
    <div className="relative z-10 w-full pt-6 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main "Casino" Style Card */}
        <div className="glass-panel rounded-[2.5rem] p-8 md:p-12 relative overflow-visible border-2 border-jolly-pink/40 shadow-[0_0_50px_rgba(255,0,204,0.2)]">
          
          {/* Badge */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-jolly-yellow text-black font-display text-xl md:text-2xl px-8 py-2 rounded-full border-4 border-black shadow-[4px_4px_0px_rgba(255,0,204,1)] transform rotate-2 animate-wiggle whitespace-nowrap z-20">
            WIN BIG PRIZES! 🎁
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-jolly-pink/5 to-jolly-cyan/5 rounded-[2.5rem]"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white mb-2 leading-[0.9] drop-shadow-xl mt-4">
              DONT JUST <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-jolly-yellow via-jolly-lime to-jolly-cyan animate-pulse-fast">BOUNCE.</span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-display text-jolly-pink mb-8 tracking-widest transform -rotate-1">
              WIN THE VIP EXPERIENCE
            </h2>

            {/* Prize Pool Visuals */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10 bg-black/30 p-6 rounded-3xl border border-white/10 w-full backdrop-blur-sm">
              <PrizeItem icon={Ticket} text="Free Bounce Pass" color="bg-jolly-pink" />
              <PrizeItem icon={Crown} text="VIP Queue Skip" color="bg-jolly-yellow" />
              <PrizeItem icon={Gift} text="Mystery Loot Box" color="bg-jolly-cyan" />
            </div>

            <p className="text-lg md:text-xl font-sans text-gray-200 mb-8 max-w-lg leading-relaxed">
              Help us build the <span className="text-jolly-lime font-bold">ultimate NIS Mart stall</span>. 
              Take the 45-second survey and enter the draw to win freebies!
            </p>

            {/* HYPER BUTTON */}
            <a 
              href={SURVEY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full max-w-md mx-auto block"
            >
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-jolly-pink via-jolly-yellow to-jolly-cyan rounded-full opacity-75 group-hover:opacity-100 blur-lg transition duration-200 animate-pulse"></div>
              
              {/* Main Button */}
              <button className="relative w-full bg-black text-white font-display text-3xl md:text-4xl px-8 py-6 rounded-full border-2 border-white/20 flex items-center justify-center gap-4 shadow-2xl overflow-hidden">
                <span className="absolute inset-0 w-full h-full bg-shine animate-shimmer opacity-0 group-hover:opacity-20"></span>
                <span className="relative z-10 flex items-center gap-3 group-hover:scale-105 transition-transform">
                  <Zap className="fill-jolly-yellow text-jolly-yellow animate-bounce" size={32} />
                  UNLOCK REWARDS
                  <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
            </a>
            
            <div className="mt-6 flex items-center gap-2 text-white/40 text-xs md:text-sm font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              124 People are taking it right now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};