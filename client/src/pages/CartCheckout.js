import React, { useEffect, useState } from "react";
import API from "../utils/API";



function CartCheckout() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        getMyCartItems()
        // .then
    }, [])

    function getMyCartItems() {
        var holderArr = []
        for (var i = 0; i < localStorage.length; i++) {
            var key = window.localStorage.key(i);
            var value = JSON.parse(window.localStorage.getItem(localStorage.key(i)));
            // console.log(key)
            // console.log(value)
            holderArr.push({ [key]: value });
            getItemInfo(key)
        }
        // console.log(holderArr)
        return setCartItems(holderArr)
    }

    function getItemInfo(id) {
        console.log(id)
        API.getItem(id)
    }
    console.log(cartItems)
    return (
        <>
            {/* make api call to get itemID info, append to page, calculate sum, add checkout button */}
        </>
    )

}

export default CartCheckout;