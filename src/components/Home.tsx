import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Settings, Trophy, Info } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-white/20">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Tic Tac Toe
        </h1>
        <p className="text-xl text-white/60">Disappearing Moves Edition</p>
      </div>

      <div className="space-y-4">
        <button
          onClick={() => navigate('/play')}
          className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 
            hover:from-cyan-400 hover:to-purple-400 text-white rounded-xl transition-all duration-300 
            shadow-lg shadow-purple-500/30 group"
        >
          <div className="flex items-center space-x-3">
            <Play className="w-6 h-6" />
            <span className="text-xl font-semibold">Start Game</span>
          </div>
          <span className="text-white/60 group-hover:translate-x-1 transition-transform">→</span>
        </button>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex flex-col items-center justify-center px-6 py-4 bg-white/5 hover:bg-white/10 
            rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
            <Trophy className="w-6 h-6 text-yellow-400 mb-2" />
            <span className="text-white/80">Leaderboard</span>
          </button>

          <button className="flex flex-col items-center justify-center px-6 py-4 bg-white/5 hover:bg-white/10 
            rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
            <Settings className="w-6 h-6 text-purple-400 mb-2" />
            <span className="text-white/80">Settings</span>
          </button>
        </div>

        <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
          <div className="flex items-start space-x-3">
            <Info className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
            <div className="text-sm text-white/60">
              <p>After the 5th move, earlier moves will start to disappear.</p>
              <p className="mt-2">
                <span className="text-yellow-400 font-semibold">Blinking</span> squares will disappear on the next move.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;