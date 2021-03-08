import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Home from "./pages/Home.js";
import Shop from "./pages/Shop.js";
import Gallery from "./pages/Gallery.js";
import Login from "./pages/Login.js";
import About from "./pages/About.js";
import CartCheckout from "./pages/CartCheckout.js";
// Make sure to call `loadStripe` outside of a component’s render to avoid recreating the `Stripe` object on every render.

function App() {
  // const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
  // const ProductDisplay = ({ handleClick }) => (
  //   <section>
  //     <div className="product">
  //       <img
  //         src="https://i.imgur.com/EHyR2nP.png"
  //         alt="The cover of Stubborn Attachments"
  //       />
  //       <div className="description">
  //         <h3>Stubborn Attachments</h3>
  //         <h5>$20.00</h5>
  //       </div>
  //     </div>
  //     <button type="button" id="checkout-button" role="link" onClick={handleClick}>
  //       Checkout
  //   </button>
  //   </section>
  // );

  // success/failure message
  // const Message = ({ message }) => (
  //   <section>
  //     <p>{message}</p>
  //   </section>
  // );

  // const [message, setMessage] = useState("");
  // useEffect(() => {
  //   // Check to see if this is a redirect back from Checkout
  //   const query = new URLSearchParams(window.location.search);
  //   if (query.get("success")) {
  //     setMessage("Order placed! You will receive an email confirmation.");
  //   }
  //   if (query.get("canceled")) {
  //     setMessage("Order canceled -- continue to shop around and checkout when you're ready.");
  //   }
  // }, []);
  // const handleClick = async (event) => {
  //   const stripe = await stripePromise;
  //   const response = await fetch("/create-checkout-session", {
  //     method: "POST",
  //   });
  //   const session = await response.json();
  //   // When the customer clicks on the button, redirect them to Checkout.
  //   const result = await stripe.redirectToCheckout({
  //     sessionId: session.id,
  //   });
  //   if (result.error) {
  //     // If `redirectToCheckout` fails due to a browser or network
  //     // error, display the localized error message to your customer
  //     // using `result.error.message`.
  //   }
  // };
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
        <Route exact path="/cart" render={(props) => (<CartCheckout {...props} handleClick={true} />)} />
      </Router>
    </>
  );
}

export default App;
