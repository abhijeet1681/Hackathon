import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <h1>👤 Your Profile</h1>
      <div className="profile-card">
        <p>Name: Mansi </p>
        <p>Level: 5</p>
        <p>Achievements: 10/20</p>
        <p>Skills: HTML, CSS, JavaScript</p>
      </div>
    </div>
  );
}

export default Profile;