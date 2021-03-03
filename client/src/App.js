import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home.js"

function App() {
  return (
    <>
      <Router>

        <NavBar />
        {/* <Switch> */}
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/Saved" component={Shop} /> */}
        {/* </Switch> */}

      </Router>
    </>
  );
}

export default App;
