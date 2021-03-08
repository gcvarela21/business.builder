import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Checkout from "../components/Checkout"
import { loadStripe } from "@stripe/stripe-js";
import StripeUtil from "../utils/StripeUtil";


function CartCheckout(props) {
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
        StripeUtil.stripeCheckout(cartItems)
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