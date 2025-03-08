import React from "react";
import "./Leaderboard.css";

function Leaderboard() {
  const scores = [
    { name: "Mansi", score: 100 },
    { name: "Jidhnyasa", score: 90 },
    { name: "Aishwarya", score: 80 },
  ];

  return (
    <div className="leaderboard">
      <h1>🏆 Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{entry.name}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;