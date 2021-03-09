import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Home from "./pages/Home.js";
import Shop from "./pages/Shop.js";
import Gallery from "./pages/Gallery.js";
import Login from "./pages/Login.js";
import About from "./pages/About.js";
import CartCheckout from "./pages/CartCheckout.js";
import Admin from "./pages/Admin.js";
import Contact from "./pages/Contact"

// Make sure to call `loadStripe` outside of a component’s render to avoid recreating the `Stripe` object on every render.


function App() {
  // success/failure message
  //   const Message = ({ message }) => (
  //     <section>
  //       <p>{message}</p>
  //     </section>
  //   );

  //   const [message, setMessage] = useState("");
  //   useEffect(() => {
  //     // Check to see if this is a redirect back from Checkout
  //     const query = new URLSearchParams(window.location.search);
  //     if (query.get("success")) {
  //       setMessage("Order placed! You will receive an email confirmation.");
  //     }
  //     if (query.get("canceled")) {
  //       setMessage("Order canceled -- continue to shop around and checkout when you're ready.");
  //     }
  //   }, []);
  // return message ? (<Message message={message} />) : (<ProductDisplay handleClick={handleClick} />);

  return (
    <>
      <Router>
        <Header />
        <NavBar />
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/shop/:itemCategory" component={Shop} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={CartCheckout} />
        <Route exact path="/cart" render={(props) => (<CartCheckout {...props} handleClick={true} />)} />
        <Route exact path={["/admin", "/admin/:itemCategory"]} component={Admin} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    </>
  );
}

export default App;
