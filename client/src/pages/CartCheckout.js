import React, { useEffect, useState } from "react";
import API from "../utils/API";



function CartCheckout() {
    const [cartItems, setCartItems] = useState([]);


    var localArr = []
    useEffect(() => {
        getMyCartItems()
    }, [])


    function getMyCartItems() {
        localArr = []
        for (var i = 0; i < localStorage.length; i++) {
            var value = JSON.parse(window.localStorage.getItem(localStorage.key(i)));
            localArr.push(value)
        }
        return setCartItems(localArr)
    }

    return (
        <>

        </>
    )

}

export default CartCheckout;