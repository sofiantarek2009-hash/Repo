import React from 'react';

const GlowCircle = ({ className, color }: { className: string, color: string }) => (
  <div className={`rounded-full filter blur-xl opacity-30 ${className}`} style={{ backgroundColor: color }}></div>
);

export const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-grid-pattern bg-[length:40px_40px]">
      {/* Large ambient glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-jolly-purple via-purple-900/50 to-black opacity-80" />
      
      <GlowCircle className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] animate-float" color="#FF00CC" />
      <GlowCircle className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] animate-float" color="#00FFFF" />
      <GlowCircle className="absolute top-[40%] left-[20%] w-[200px] h-[200px] animate-pulse-fast" color="#CCFF00" />
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-20 opacity-20 animate-spin-slow">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="2">
          <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
        </svg>
      </div>
      
      <div className="absolute bottom-40 left-10 opacity-20 animate-bounce-slow">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="#FFFF00" strokeWidth="2">
          <circle cx="40" cy="40" r="30" />
        </svg>
      </div>
    </div>
  );
};