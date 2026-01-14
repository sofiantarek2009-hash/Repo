import React from 'react';

const Particle = ({ style }: { style: React.CSSProperties }) => (
  <div className="absolute rounded-full bg-white opacity-20 animate-float" style={style}></div>
);

export const FloatingElements: React.FC = () => {
  // Generate random particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    width: Math.random() * 5 + 2 + 'px',
    height: Math.random() * 5 + 2 + 'px',
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%',
    animationDuration: Math.random() * 10 + 5 + 's',
    animationDelay: Math.random() * 5 + 's',
    backgroundColor: ['#FF00CC', '#00FFFF', '#FFFF00'][Math.floor(Math.random() * 3)]
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-jolly-dark">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-20" />
      
      {/* Ambient Gradients */}
      <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-jolly-purple rounded-full blur-[120px] opacity-40 animate-pulse-fast" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-jolly-pink rounded-full blur-[100px] opacity-30 animate-pulse-fast" style={{ animationDuration: '6s' }} />
      
      {/* Particles */}
      {particles.map((style, i) => (
        <Particle key={i} style={style as React.CSSProperties} />
      ))}

      {/* Shapes */}
      <svg className="absolute top-[15%] right-[10%] w-24 h-24 opacity-10 animate-spin-slow" viewBox="0 0 100 100">
        <path d="M50 0 L100 50 L50 100 L0 50 Z" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
};