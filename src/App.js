import React, { useState } from "react";
import Header from "./components/Header";
import StoryAdventure from "./components/StoryAdventure";
import CodingChallenge from "./components/CodingChallenge";
import Profile from "./components/Profile";
import RealTimeCodeEditor from "./components/RealTimeCodeEditor";
import Leaderboard from "./components/Leaderboard";
import "./styles/App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("story"); // Default page

  const renderPage = () => {
    switch (currentPage) {
      case "story":
        return <StoryAdventure />;
      case "coding":
        return <CodingChallenge />;
      case "profile":
        return <Profile />;
      case "editor":
        return <RealTimeCodeEditor />;
      case "leaderboard":
        return <Leaderboard />;
      default:
        return <StoryAdventure />;
    }
  };

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;