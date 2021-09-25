import React from "react";
import Nav from "../../components/Nav/Nav";
import "./profileScreen.css";
function ProfileScreen() {
  return (
    <div className="profile-screen">
      <Nav />
      <div className="profile-screen-body">
        <h1>Edit Profile</h1>
        <div className="profile-screen-info"></div>
      </div>
    </div>
  );
}

export default ProfileScreen;
