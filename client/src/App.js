import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Home from "./pages/Home.js";
import Shop from "./pages/Shop.js";
import Gallery from "./pages/Gallery.js";
import Cookies from "./pages/Cookies.js";
import Cakes from "./pages/Cakes.js";
import Login from "./pages/Login.js";
import About from "./pages/About.js";

function App() {
  return (
    <>
      <Router>
        <Header />
        <NavBar />
        {/* <Switch> */}
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/cookies" component={Cookies} />
        <Route exact path="/cakes" component={Cakes} />
        {/* <Route exact path="/cakes" component={Cakes} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        {/* </Switch> */}
        {/* <Shop /> */}
      </Router>
    </>
  );
}

export default App;
