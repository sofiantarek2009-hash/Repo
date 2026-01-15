import React, { useEffect, useState } from 'react';

const Particle: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <div className="absolute rounded-full bg-white opacity-20 animate-float" style={style}></div>
);

const MouseTrail: React.FC = () => {
  const [trail, setTrail] = useState<{x: number, y: number, id: number}[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTrail(prev => [
        ...prev.slice(-15), // Keep last 15 points
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ]);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {trail.map((point, i) => (
        <div 
          key={point.id}
          className="fixed w-4 h-4 rounded-full pointer-events-none z-0 mix-blend-screen"
          style={{
            left: point.x,
            top: point.y,
            background: `hsl(${i * 20}, 100%, 50%)`,
            opacity: i / trail.length,
            transform: `translate(-50%, -50%) scale(${i / trail.length})`,
            boxShadow: `0 0 10px hsl(${i * 20}, 100%, 50%)`
          }}
        />
      ))}
    </>
  );
};

export const FloatingElements: React.FC = () => {
  // Generate random background particles
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    width: Math.random() * 4 + 2 + 'px',
    height: Math.random() * 4 + 2 + 'px',
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%',
    animationDuration: Math.random() * 10 + 5 + 's',
    animationDelay: Math.random() * 5 + 's',
    backgroundColor: ['#FF00CC', '#00FFFF', '#FFFF00'][Math.floor(Math.random() * 3)]
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-jolly-dark">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-10" />
      
      {/* Ambient Gradients - More intense */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-jolly-purple rounded-full blur-[100px] opacity-50 animate-pulse-fast" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-jolly-pink rounded-full blur-[100px] opacity-40 animate-pulse-fast" style={{ animationDuration: '7s' }} />
      <div className="absolute top-[40%] left-[50%] w-[30vw] h-[30vw] bg-jolly-cyan rounded-full blur-[120px] opacity-20 transform -translate-x-1/2" />

      {/* Particles */}
      {particles.map((style, i) => (
        <Particle key={i} style={style as React.CSSProperties} />
      ))}
      
      {/* Interactive Trail */}
      <MouseTrail />
    </div>
  );
};