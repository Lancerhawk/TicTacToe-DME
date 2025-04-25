import React, { useState, useEffect, useCallback } from 'react';
import Board from './Board';
import GameStatus from './GameStatus';
import { calculateWinner, isBoardFull } from '../utils/gameUtils';

const Game: React.FC = () => {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [moveOrder, setMoveOrder] = useState<number[]>([]);
  const [moveNumbers, setMoveNumbers] = useState<(number | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [blinkingIndex, setBlinkingIndex] = useState<number | null>(null);

  // Calculate winner using current squares
  const winner = calculateWinner(squares);
  const isDraw = !winner && isBoardFull(squares);

  const restartGame = useCallback(() => {
    setSquares(Array(9).fill(null));
    setMoveOrder([]);
    setMoveNumbers(Array(9).fill(null));
    setXIsNext(true);
    setBlinkingIndex(null);
  }, []);

  const handleClick = useCallback((i: number) => {
    if (squares[i] || winner) return;

    // First, if there's a blinking tile and we're at move 6 or later, remove it immediately
    let newSquares = [...squares];
    if (blinkingIndex !== null && moveOrder.length >= 5) {
      newSquares[blinkingIndex] = null;
    }

    // Then make the new move
    newSquares[i] = xIsNext ? 'X' : 'O';
    
    const newMoveOrder = [...moveOrder, i];
    const newMoveNumbers = [...moveNumbers];
    newMoveNumbers[i] = newMoveOrder.length;

    // Update all state
    setSquares(newSquares);
    setMoveOrder(newMoveOrder);
    setMoveNumbers(newMoveNumbers);
    setXIsNext(!xIsNext);
    setBlinkingIndex(null);
  }, [squares, moveOrder, moveNumbers, xIsNext, winner, blinkingIndex]);

  useEffect(() => {
    if (moveOrder.length < 5 || winner) return;

    // On 5th move and beyond, set the blinking index
    const indexToRemoveSoon = moveOrder[moveOrder.length - 5];
    setBlinkingIndex(indexToRemoveSoon);
  }, [moveOrder, winner]);

  return (
    <div className="game flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
        Tic Tac Toe
      </h1>
      <h2 className="text-lg font-medium text-white/60 mb-8">
        Disappearing Moves Edition
      </h2>

      <GameStatus 
        winner={winner} 
        isDraw={isDraw} 
        xIsNext={xIsNext} 
        moveCount={moveOrder.length}
        onRestart={restartGame} 
      />

      <Board 
        squares={squares} 
        onClick={handleClick}
        blinkingIndex={blinkingIndex}
        moveNumbers={moveNumbers}
      />

      <div className="mt-8 text-sm text-white/60 max-w-md mx-auto text-center bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
        <p>After the 5th move, earlier moves will start to disappear.</p>
        <p className="mt-2">
          <span className="text-yellow-400 font-semibold">Blinking</span> squares will disappear on the next move.
        </p>
      </div>
    </div>
  );
};

export default Game;