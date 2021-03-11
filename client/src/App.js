import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Home from "./pages/Home.js";
import Shop from "./pages/Shop.js";
import Gallery from "./pages/Gallery.js";
import Login from "./pages/Login.js";
import About from "./pages/About.js";
import Checkout from "./pages/Checkout.js";
import Admin from "./pages/Admin.js";
import Contact from "./pages/Contact"
import CheckoutSuccess from "./pages/CheckoutSuccess.js";
import CheckoutCancelled from "./pages/CheckoutCancelled.js";

function App() {

  // if (!isAuthenticated) {
  //   return <Redirect to="/admin"></Redirect>
  // }

  return (
    <>
      <Router>
        <Header />
        <NavBar />
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/shop/:itemCategory" component={Shop} />
        <Route exact path="/gallery" component={Gallery} />

        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={Checkout} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/checkout/success" component={CheckoutSuccess} />
        <Route exact path="/checkout/cancelled" component={CheckoutCancelled} />
        <Route exact path="/login" component={Login} />
        <Route exact path={["/admin", "/admin/:itemCategory"]} component={Admin} />

      </Router>
    </>
  );
}

export default App;
