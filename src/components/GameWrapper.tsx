import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home as HomeIcon } from 'lucide-react';
import Game from './Game';

const GameWrapper: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate('/')}
        className="mb-4 inline-flex items-center space-x-2 text-white/80 hover:text-white 
          transition-all duration-300 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10
          border border-white/10 hover:border-white/20 hover:shadow-lg hover:-translate-y-0.5"
      >
        <HomeIcon size={18} />
        <span>Back to Home</span>
      </button>
      <div className="bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-white/20">
        <Game />
      </div>
    </>
  );
};

export default GameWrapper;