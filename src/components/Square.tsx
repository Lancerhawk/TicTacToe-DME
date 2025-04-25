import React from 'react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
  isBlinking: boolean;
  moveNumber: number | null;
}

const Square: React.FC<SquareProps> = ({ value, onClick, isBlinking, moveNumber }) => {
  return (
    <button
      className={`w-full h-full flex items-center justify-center text-5xl sm:text-6xl md:text-7xl font-bold rounded-2xl transition-all duration-300 
        ${value === 'X' 
          ? 'text-cyan-400 hover:bg-cyan-400/10 shadow-lg shadow-cyan-400/20' 
          : 'text-pink-400 hover:bg-pink-400/10 shadow-lg shadow-pink-400/20'} 
        ${isBlinking ? 'animate-pulse bg-yellow-300/20 border-2 border-yellow-400/50' : 'bg-white/5 border border-white/10'}
        backdrop-blur-sm`}
      onClick={onClick}
    >
      {value}
      {moveNumber !== null && !value && (
        <span className="absolute top-1 right-1 text-xs font-mono bg-white/10 px-2 py-1 rounded-full text-white/60">
          {moveNumber}
        </span>
      )}
    </button>
  );
};

export default Square;