import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Checkout from "../components/Checkout"

function CartCheckout() {
    const [cartItems, setCartItems] = useState([]);

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

    return (
        <>
            <div className="container-fluid">
                {cartItems.map((cart, index) => {
                    return (<Checkout
                        id={cart.id}
                        key={index}
                        itemName={cart.itemName}
                        itemPrice={cart.itemPrice}
                        itemDesc={cart.itemDesc}
                        itemCategory={cart.itemCategory}
                        itemImg={cart.itemImg}
                        itemQuantity={cart.itemQuantity}
                    />)
                })}
            </div>
        </>
    )

}

export default CartCheckout;