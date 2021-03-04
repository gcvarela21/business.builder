import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Home from "./pages/Home.js";
import Shop from "./pages/Shop.js";
import Gallery from "./pages/Gallery.js";

function App() {
  return (
    <>
      <Router>
        <Header />
        <NavBar />
        {/* <Switch> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/gallery" component={Gallery} />
        {/* </Switch> */}
        {/* <Shop /> */}
      </Router>
    </>
  );
}

export default App;
