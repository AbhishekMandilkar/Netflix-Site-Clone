import React, { useState, useEffect } from "react";
import "./nav.css";

import { useHistory } from "react-router-dom";

function Nav() {
  const history = useHistory();
  const [show, handleShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.addEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <div className={`nav ${show && "nav-black"}`}>
      <div className="nav-content">
        <img
          className="nav-logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
          onClick={() => history.push("/")}
        />
        <img
          className="nav-avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar-logo"
          onClick={() => history.push("/profile")}
        />
      </div>
    </div>
  );
}

export default Nav;
