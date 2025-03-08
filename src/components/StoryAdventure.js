import React from "react";
import "./StoryAdventure.css";

function StoryAdventure() {
  return (
    <div className="story-adventure">
      <h1>🌟 Welcome to the Coding Adventure! 🌟</h1>
      <p>Embark on a journey where coding unlocks new levels, characters, and secrets.</p>
      <button className="start-button">Start Adventure</button>
      <div className="story-image">
        <img src="https://www.shutterstock.com/image-photo/man-standing-on-top-mountain-600nw-1467369677.jpg" alt="Adventure Scene" />
      </div>
    </div>
  );
}

export default StoryAdventure;