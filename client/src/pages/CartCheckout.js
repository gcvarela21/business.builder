import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Checkout from "../components/Checkout"
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios"

function CartCheckout(props) {
    const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
    const [cartItems, setCartItems] = useState([]);
    // function that takes in cart items to sum them

    var localArr = []
    useEffect(() => {
        getMyCartItems()
    }, [])

    // puts local storage cart-item info into an array so we can pass it as props
    function getMyCartItems() {
        localArr = []
        for (var i = 0; i < localStorage.length; i++) {
            var value = JSON.parse(window.localStorage.getItem(localStorage.key(i)));
            localArr.push(value)
        }
        console.log(localArr)
        return setCartItems(localArr)
    }

    // stripe stuff to whisk the patron away
    const handleClick = async () => {
        console.log("stripe was pressed")
        const stripe = await stripePromise;
        // execute total here
        // transaction name - maybe stripe id or 
        axios.post("/create-checkout-session", { cartItems: cartItems })
            .then(async function (data) {
                const result = await stripe.redirectToCheckout({
                    sessionId: data.data.id,
                });
            })
            .catch(function (err) {
                console.log(err)
            })
        // console.log(response)
        // const response = await fetch("/create-checkout-session", {
        //     method: "POST",
        //     body: JSON.stringify({ cartItems: cartItems })
        // });
        // console.log(cartItems)
        // const session = await response.json();
        // When the customer clicks on the button, redirect them to Checkout.

        // if (result.error) {
        //     // If `redirectToCheckout` fails due to a browser or network
        //     // error, display the localized error message to your customer
        //     // using `result.error.message`.
        // }
    };

    return (
        <>
            <div className="container-fluid">
                {cartItems.map((cart, index) => {
                    return (<Checkout
                        id={cart.id}
                        key={index}
                        itemName={cart.itemName}
                        itemPriceCent={cart.itemPriceCent}
                        itemDesc={cart.itemDesc}
                        itemCategory={cart.itemCategory}
                        itemImg={cart.itemImg}
                        itemQuantity={cart.itemQuantity}
                        handleClick={handleClick}
                    />)
                })}
                <button className="btn btn-primary" onClick={() => handleClick()}>Checkout and Pay</button>
            </div>
        </>
    )

}

export default CartCheckout;