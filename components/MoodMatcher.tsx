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
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="bg-black/40 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border border-white/10 relative overflow-hidden group">
        
        {/* Glow effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-jolly-pink via-jolly-cyan to-jolly-lime opacity-50"></div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-jolly-pink/20 blur-[100px] rounded-full group-hover:bg-jolly-pink/30 transition-colors"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-display text-white mb-4">
            AI VIBE CHECK
          </h2>
          <p className="text-gray-400 mb-8 font-sans text-lg max-w-xl mx-auto">
            Tell our AI how you're feeling (e.g., "Tired from math", "Hyper"), and we'll tell you which Jollypop combo to get.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-10">
            <input
              type="text"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="I'm feeling..."
              className="flex-1 bg-white/5 text-white placeholder-white/30 font-medium text-lg px-6 py-4 rounded-xl border border-white/10 focus:outline-none focus:border-jolly-cyan focus:bg-white/10 transition-all"
              onKeyDown={(e) => e.key === 'Enter' && handleMatch()}
            />
            <button
              onClick={handleMatch}
              disabled={status === LoadingState.LOADING || !mood.trim()}
              className="bg-jolly-cyan hover:bg-cyan-400 text-black font-display text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {status === LoadingState.LOADING ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  <Sparkles size={20} /> GENERATE
                </>
              )}
            </button>
          </div>

          {result && (
            <div className="animate-fade-in-up">
              <div className="bg-gradient-to-br from-white/10 to-transparent rounded-2xl p-[1px]">
                <div className="bg-[#150a22] rounded-2xl p-8 relative overflow-hidden">
                    <div className="flex flex-col items-center">
                        <span className="text-jolly-lime text-xs font-bold tracking-[0.2em] uppercase mb-4">Your Custom Combo</span>
                        <h3 className="text-2xl md:text-4xl font-display text-white mb-4 leading-tight">{result.snackCombo}</h3>
                        <p className="text-jolly-pink text-xl italic font-serif mb-6 opacity-90">"{result.tagline}"</p>
                        
                        <div className="inline-flex items-center gap-2 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                           <PartyPopper className="text-jolly-yellow" size={16} />
                           {result.partyTip}
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