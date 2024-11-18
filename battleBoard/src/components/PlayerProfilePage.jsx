import React from "react";

const player = {
  name: "Player1",
  rank: 1,
  matchesPlayed: 20,
  wins: 15,
  points: 50,
  bio: "A passionate gamer striving to be the best in e-sports competitions.",
  recentMatches: [
    { id: 1, date: "2024-11-15", result: "Win", points: 5 },
    { id: 2, date: "2024-11-13", result: "Loss", points: -2 },
    { id: 3, date: "2024-11-10", result: "Win", points: 5 },
    { id: 4, date: "2024-11-08", result: "Win", points: 5 },
    { id: 5, date: "2024-11-05", result: "Loss", points: -3 },
  ],
};

function PlayerProfilePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Player Header */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h1 className="text-3xl font-bold mb-2">{player.name}</h1>
        <p className="text-gray-400 mb-4">Rank #{player.rank}</p>
        <p className="text-sm">{player.bio}</p>
      </div>

      {/* Player Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold mb-2">Matches Played</h2>
          <p className="text-2xl">{player.matchesPlayed}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold mb-2">Wins</h2>
          <p className="text-2xl">{player.wins}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold mb-2">Points</h2>
          <p className="text-2xl">{player.points}</p>
        </div>
      </div>

      {/* Recent Matches */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Recent Matches</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-800">
                <th className="p-4 border border-gray-700">Date</th>
                <th className="p-4 border border-gray-700">Result</th>
                <th className="p-4 border border-gray-700">Points</th>
              </tr>
            </thead>
            <tbody>
              {player.recentMatches.map((match) => (
                <tr
                  key={match.id}
                  className="hover:bg-gray-700 bg-gray-800 text-center"
                >
                  <td className="p-4 border border-gray-700">{match.date}</td>
                  <td
                    className={`p-4 border border-gray-700 ${
                      match.result === "Win" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {match.result}
                  </td>
                  <td className="p-4 border border-gray-700">{match.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PlayerProfilePage;
