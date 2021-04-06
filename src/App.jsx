// NPM Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
// Project files
import Home from "./pages/Home";
import Parcels from "./pages/Parcels";
import ParcelDetail from "./pages/ParcelDetail";
import Header from "./Header/SearchAppBar";

export default function App() {
  const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";
  const [status, setStatus] = useState(0);
  const [information, setInformation] = useState([]);
  const dataFetched = async () => {
    try {
      const res = await fetch(API_URL, { mode: "cors" });
      const data = await res.json();
      setInformation(data);
      setStatus(1);
    } catch (error) {
      console.log(error);
      setStatus(2);
    }
  };
  useEffect(() => {
    dataFetched();
  }, []);

  return (
    <Router>
        {/* The header is outside the Switch to make it available all the time */}
        <Header />
        {/* The pages we want to show based on the browser URL */}
        <Switch>
          <Route exact path="/">
            <Home information={information} />
          </Route>
          <Route exact path="/parcels">
            <Parcels status={status} information={information} />
          </Route>
          <Route exact path="/parcels/:id">
            <ParcelDetail information={information} />
          </Route>
        </Switch>
    </Router>
  );
}
