import React from 'react';
import { RefreshCw } from 'lucide-react';

interface GameStatusProps {
  winner: string | null;
  isDraw: boolean;
  xIsNext: boolean;
  moveCount: number;
  onRestart: () => void;
}

const GameStatus: React.FC<GameStatusProps> = ({ 
  winner, 
  isDraw, 
  xIsNext, 
  moveCount, 
  onRestart 
}) => {
  let status;
  let statusColor;
  
  if (winner) {
    status = `Winner: ${winner}`;
    statusColor = winner === 'X' ? 'text-cyan-400' : 'text-pink-400';
  } else if (isDraw) {
    status = 'Game ended in a draw!';
    statusColor = 'text-purple-400';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    statusColor = xIsNext ? 'text-cyan-400' : 'text-pink-400';
  }

  return (
    <div className="flex flex-col items-center space-y-3 mb-6">
      <div className="flex items-center justify-between w-full max-w-md px-4 py-2 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
        <div className={`text-2xl font-bold ${statusColor}`}>{status}</div>
        <div className="text-sm text-white/60 bg-white/10 px-3 py-1 rounded-full font-mono">
          Move {moveCount}
        </div>
      </div>
      
      {(winner || isDraw) && (
        <button 
          onClick={onRestart}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl
            hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 shadow-lg shadow-purple-500/30
            font-semibold tracking-wide"
        >
          <RefreshCw size={18} className="animate-spin-slow" />
          <span>Play Again</span>
        </button>
      )}
    </div>
  );
};

export default GameStatus;