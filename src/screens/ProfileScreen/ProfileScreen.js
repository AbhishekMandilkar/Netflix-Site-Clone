import React from "react";
import Nav from "../../components/Nav/Nav";
import "./profileScreen.css";

import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../utils/firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profile-screen">
      <Nav />
      <div className="profile-screen-body">
        <h1>Edit Profile</h1>
        <div className="profile-screen-info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <div className="profile-screen-details">
            <h2>{user.email}</h2>
            <div className="profile-screen-plans">
              <h3>Plans </h3>
              <button
                className="profile-screen-signout"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
