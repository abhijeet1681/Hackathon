import React from "react";
import "./Header.css";

function Header({ setCurrentPage }) {
  return (
    <header className="header">
      <h1 className="logo">CodeQuest</h1>
      <nav className="nav">
        <button className="nav-button" onClick={() => setCurrentPage("story")}>
          🏰 Story Adventure
        </button>
        <button className="nav-button" onClick={() => setCurrentPage("coding")}>
          🧩 Coding Challenges
        </button>
        <button className="nav-button" onClick={() => setCurrentPage("profile")}>
          👤 Profile
        </button>
        <button className="nav-button" onClick={() => setCurrentPage("editor")}>
          ✍️ Code Editor
        </button>
        <button className="nav-button" onClick={() => setCurrentPage("leaderboard")}>
          🏆 Leaderboard
        </button>
      </nav>
    </header>
  );
}

export default Header;