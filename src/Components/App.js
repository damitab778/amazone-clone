import React, { useEffect } from "react";
import "../Style/App.css";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IHWA2ETBEGJ3E3IvvtXuyu8akt1IjEvFwEdTc2BOfFsHEW8zmh3a596uzKY0u1KDh0Pbc70laWC3f6u0nZXqwfy00XHmvrQEw"
);
function App() {
  const [{}, dispatch] = useStateValue();

  //listen who is SignIn
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    //will only run once when the commponent loads, if there was any argument then its been run thats many times as it is change.
  }, []);
  return (
    //bem
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
