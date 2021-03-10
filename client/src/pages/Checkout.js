import React, { useEffect, useState } from "react";
import CheckoutCard from "../components/CheckoutCard"
import StripeUtil from "../utils/StripeUtil";


function CartCheckout() {
    const [cartItems, setCartItems] = useState([]);
    // function that takes in cart items to sum them


    useEffect(() => {
        getMyCartItems()
    }, [])

    var localArr = []

    // puts local storage cart-item info into an array so we can pass it as props
    function getMyCartItems() {

        var keyArr = Object.keys(localStorage)
        for (var i = 0; i < keyArr.length; i++) {
            var value = JSON.parse(window.localStorage.getItem(keyArr[i]));
            localArr.push(value)
        }
        setCartItems(localArr)
    }

    // stripe stuff to whisk the patron away
    const handleClick = async () => {
        var stripeID = StripeUtil.stripeCheckout(cartItems)
        console.log(stripeID)
    };

    return (
        <>
            <div className="container">
                {cartItems.map((cart, index) => {

                    return <CheckoutCard
                        id={cart.id}
                        key={index}
                        itemName={cart.itemName}
                        itemPriceCent={cart.itemPriceCent}
                        itemDesc={cart.itemDesc}
                        itemCategory={cart.itemCategory}
                        itemImg={cart.itemImg}
                        itemQuantity={cart.itemQuantity}
                        handleClick={handleClick}
                    />

                })}

                <button className="btn btn-primary checkout-btn" onClick={() => handleClick()}>Checkout and Pay</button>
            </div>
        </>
    )

}

export default CartCheckout;