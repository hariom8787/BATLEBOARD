import React, { useState } from "react";

const players = [
  { rank: 1, name: "Player1", matches: 20, wins: 15, points: 50 },
  { rank: 2, name: "Player2", matches: 18, wins: 12, points: 45 },
  { rank: 3, name: "Player3", matches: 22, wins: 14, points: 42 },
  { rank: 4, name: "Player4", matches: 25, wins: 10, points: 35 },
  { rank: 5, name: "Player5", matches: 19, wins: 8, points: 30 },
];

function LeaderboardPage() {
  const [search, setSearch] = useState("");

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Leaderboard</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search players..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-2 bg-gray-800 border border-gray-700 rounded text-white"
        />
      </div>

      {/* Leaderboard Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-4 border border-gray-700">Rank</th>
              <th className="p-4 border border-gray-700">Player Name</th>
              <th className="p-4 border border-gray-700">Matches</th>
              <th className="p-4 border border-gray-700">Wins</th>
              <th className="p-4 border border-gray-700">Points</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlayers.length > 0 ? (
              filteredPlayers.map((player) => (
                <tr
                  key={player.rank}
                  className={`${
                    player.rank <= 3 ? "bg-teal-500 text-gray-900" : "bg-gray-800"
                  } hover:bg-gray-700`}
                >
                  <td className="p-4 border border-gray-700">{player.rank}</td>
                  <td className="p-4 border border-gray-700">{player.name}</td>
                  <td className="p-4 border border-gray-700">{player.matches}</td>
                  <td className="p-4 border border-gray-700">{player.wins}</td>
                  <td className="p-4 border border-gray-700">{player.points}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="p-4 text-center text-gray-400 border border-gray-700"
                >
                  No players found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderboardPage;
