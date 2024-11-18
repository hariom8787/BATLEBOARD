import React, { useState } from "react";

const tournaments = [
  { id: 1, name: "Battle Royale 2024", date: "2024-11-20", time: "6:00 PM", status: "Ongoing" },
  { id: 2, name: "Solo Championship", date: "2024-12-01", time: "5:00 PM", status: "Upcoming" },
  { id: 3, name: "Duo Madness", date: "2024-11-18", time: "8:00 PM", status: "Finished" },
  { id: 4, name: "Squad Showdown", date: "2024-11-25", time: "7:00 PM", status: "Ongoing" },
];

function TournamentPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredTournaments = tournaments.filter((tournament) => {
    const matchesSearch = tournament.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || tournament.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Tournaments</h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <input
          type="text"
          placeholder="Search tournaments..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-2 mb-4 md:mb-0 bg-gray-800 border border-gray-700 rounded text-white"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full md:w-1/4 p-2 bg-gray-800 border border-gray-700 rounded text-white"
        >
          <option value="All">All</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Finished">Finished</option>
        </select>
      </div>

      {/* Tournament Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTournaments.map((tournament) => (
          <div key={tournament.id} className="bg-gray-800 p-6 rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{tournament.name}</h2>
            <p className="text-sm mb-1">
              <strong>Date:</strong> {tournament.date}
            </p>
            <p className="text-sm mb-1">
              <strong>Time:</strong> {tournament.time}
            </p>
            <p className="text-sm mb-4">
              <strong>Status:</strong>{" "}
              <span
                className={`px-2 py-1 rounded text-sm ${
                  tournament.status === "Ongoing"
                    ? "bg-green-500 text-gray-900"
                    : tournament.status === "Upcoming"
                    ? "bg-blue-500 text-gray-900"
                    : "bg-gray-500 text-white"
                }`}
              >
                {tournament.status}
              </span>
            </p>
            <button className="bg-teal-400 text-gray-900 py-2 px-4 rounded hover:bg-teal-500">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredTournaments.length === 0 && (
        <p className="text-center text-gray-400 mt-8">No tournaments found.</p>
      )}
    </div>
  );
}

export default TournamentPage;
