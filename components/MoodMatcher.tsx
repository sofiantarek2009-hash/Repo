import React, { useState } from 'react';
import { getJollyRecommendation } from '../services/geminiService';
import { JollyRecommendation, LoadingState } from '../types';
import { Loader2, Sparkles, PartyPopper } from 'lucide-react';

export const MoodMatcher: React.FC = () => {
  const [mood, setMood] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [result, setResult] = useState<JollyRecommendation | null>(null);

  const handleMatch = async () => {
    if (!mood.trim()) return;
    
    setStatus(LoadingState.LOADING);
    try {
      const recommendation = await getJollyRecommendation(mood);
      setResult(recommendation);
      setStatus(LoadingState.SUCCESS);
    } catch (e) {
      console.error(e);
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-20 px-4">
      <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden border border-jolly-cyan/30">
         <div className="absolute -right-20 -top-20 w-64 h-64 bg-jolly-cyan/20 rounded-full blur-3xl"></div>
         <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-jolly-pink/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-display text-white mb-4">
            AI Vibe Check <span className="text-jolly-cyan">✨</span>
          </h2>
          <p className="text-gray-300 mb-8 font-sans text-lg max-w-2xl mx-auto">
            Not sure what to get at the Jollypop stall? Tell our AI how you're feeling (e.g., "Stressed about math", "Hyped for lunch"), and we'll build your perfect combo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-10">
            <input
              type="text"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="How are you feeling right now?"
              className="flex-1 bg-black/40 text-white placeholder-white/40 font-medium text-lg px-6 py-4 rounded-full border border-white/10 focus:outline-none focus:border-jolly-cyan focus:ring-1 focus:ring-jolly-cyan transition-all"
              onKeyDown={(e) => e.key === 'Enter' && handleMatch()}
            />
            <button
              onClick={handleMatch}
              disabled={status === LoadingState.LOADING || !mood.trim()}
              className="bg-jolly-cyan hover:bg-cyan-400 text-black font-display text-xl px-8 py-4 rounded-full transition-all hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {status === LoadingState.LOADING ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  <Sparkles size={20} /> Match Vibe
                </>
              )}
            </button>
          </div>

          {result && (
            <div className="animate-fade-in-up">
              <div className="bg-gradient-to-r from-jolly-purple to-purple-900 rounded-2xl p-1 p-[2px]">
                <div className="bg-[#1a0b2e] rounded-2xl p-8 h-full relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-jolly-pink via-jolly-cyan to-jolly-lime"></div>
                    
                    <div className="flex flex-col items-center">
                        <span className="text-jolly-lime text-sm font-bold tracking-widest uppercase mb-3">Recommended For You</span>
                        <h3 className="text-2xl md:text-3xl font-display text-white mb-3 leading-snug">{result.snackCombo}</h3>
                        <p className="text-jolly-pink text-xl italic font-serif mb-6">"{result.tagline}"</p>
                        
                        <div className="inline-flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10">
                           <PartyPopper className="text-jolly-yellow" size={20} />
                           <span className="text-gray-300 text-sm font-semibold">{result.partyTip}</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};