import React from 'react';
import Square from './Square';

interface BoardProps {
  squares: (string | null)[];
  moveNumbers: (number | null)[];
  blinkingIndex: number | null;
  onClick: (i: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onClick, blinkingIndex, moveNumbers }) => {
  const renderSquare = (i: number) => {
    return (
      <div key={i} className="aspect-square">
        <Square
          value={squares[i]}
          onClick={() => onClick(i)}
          isBlinking={blinkingIndex === i}
          moveNumber={moveNumbers[i]}
        />
      </div>
    );
  };

  return (
    <div className="grid grid-cols-3 gap-3 w-full max-w-md mx-auto bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/10 shadow-xl">
      {Array(9)
        .fill(null)
        .map((_, i) => renderSquare(i))}
    </div>
  );
};

export default Board;