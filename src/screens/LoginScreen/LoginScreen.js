import React, { useState } from "react";
import "./loginScreen.css";

import SignUpScreen from "../SignUpScreen/SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login-screen">
      <div className="login-screen-background">
        <img
          className="login-screen-logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="login-btn">
          Sign in
        </button>
        <div className="login-screen-gradient" />
      </div>
      <div className="login-screen-body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited films,TV programmes and more</h1>
            <h2>Watch anywhere.Cancel at anytime</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login-screen-input">
              <form>
                <input type="email" className="" placeholder="Email Adress" />
                <button
                  onClick={() => setSignIn(true)}
                  className="login-screen-get-started"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
