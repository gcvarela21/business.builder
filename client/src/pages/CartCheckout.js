import React, { useEffect, useState } from "react";



function CartCheckout() {
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        getMyCartItems()
    }, [])

    function getMyCartItems() {
        var holderArr = []
        for (var i = 0; i < localStorage.length; i++) {
            var key = window.localStorage.key(i);
            var value = window.localStorage.getItem(localStorage.key(i));
            value = JSON.parse(value)
            console.log(key)
            console.log(value)
            holderArr.push({ [key]: value });
        }
        console.log(holderArr)
    }
    return (
        <>
        </>
    )

}

export default CartCheckout;