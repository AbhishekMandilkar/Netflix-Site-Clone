import React, { useRef } from "react";
import { auth } from "../../utils/firebase.js";

import "./signIn.css";
function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log("signed in");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log("Logged in");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signup-screen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signup-grey">New to Netflix? </span>
          <span className="signup-link" onClick={register}>
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
