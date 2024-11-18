
import React from "react";
import TournamentPage from "./components/tournament";
import LeaderboardPage from "./components/LeaderboardPage";
import PlayerProfilePage from "./components/PlayerProfilePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        {/* Header */}
        <header className="flex justify-between items-center py-4 px-8 bg-gray-800 border-b border-gray-700">
          <div className="text-2xl font-bold">E-Sports Tracker</div>
          <nav className="space-x-6">
            <a href="#home" className="hover:text-teal-400">
              Home
            </a>
            <a href="#tournaments" className="hover:text-teal-400">
              Tournaments
            </a>
            <a href="#leaderboard" className="hover:text-teal-400">
              Leaderboard
            </a>
            <a href="#profile" className="hover:text-teal-400">
              Profile
            </a>
          </nav>
        </header>

        {/* Main content */}
        <main className="flex flex-1 flex-col items-center justify-center text-center p-8">
          <h1 className="text-4xl font-bold mb-4">Track, Play, Dominate!</h1>
          <p className="text-lg mb-6">
            Your ultimate solution for tracking e-sports tournaments.
          </p>
          <button className="bg-teal-400 text-gray-900 py-2 px-6 rounded-lg hover:bg-teal-500">
            Get Started
          </button>

          {/* Page content */}
          <div className="flex-1">
          <TournamentPage/>
            <LeaderboardPage/>
            <PlayerProfilePage/>

          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 py-4 text-center border-t border-gray-700">
          <p>© 2024 E-Sports Tracker. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;