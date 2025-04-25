import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import GameWrapper from './components/GameWrapper';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={
            <div className="relative w-full max-w-lg">
              <div className="mb-4">
                <GameWrapper />
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;