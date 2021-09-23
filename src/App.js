import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./Utils/firebase-setup";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      console.log(userAuth);
      if (userAuth) {
        dispatch(login({ uid: userAuth.uid, email: userAuth.email }));
        console.log("loged in user is" + user);
      } else {
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
