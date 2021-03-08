import React, { useEffect, useState } from "react";
import API from "../utils/API";



function CartCheckout() {
    const [cartItems, setCartItems] = useState([]);
    const [cartItemInfo, setCartItemInfo] = useState([])

    var localArr = []
    useEffect(() => {
        getMyCartItems()
        // .then
    }, [])

    useEffect(() => {
        if (cartItemInfo[0] && localArr[0]) {
            console.log(localArr)
            for (var k = 0; k < cartItemInfo.length; k++) {
                console.log(cartItemInfo)
                setCartItemInfo([...cartItemInfo, { ...cartItemInfo[k], "itemQuantity": [localArr[k].itemQuantity.value] }])
            }
        }

    }, [cartItemInfo])

    function getMyCartItems() {

        var itemInfoArr = []
        for (var i = 0; i < localStorage.length; i++) {
            // gets itemID and quantity from local storage
            var key = window.localStorage.key(i);
            var value = JSON.parse(window.localStorage.getItem(localStorage.key(i)));

            // console.log(key)
            // console.log(value)

            // look for itemInfo from the key in local storage
            localArr.push({ "itemID": JSON.parse(key), "itemQuantity": JSON.parse(value) })
        }
        for (var j = 0; j < localArr.length; j++) {
            API.getItem(localArr[j].itemID)
                .then(res => setCartItemInfo([...cartItemInfo, res.data]))
        }

        console.log(cartItemInfo)

        return setCartItems(localArr)

    }

    return (
        <>
            {/* make api call to get itemID info, append to page, calculate sum, add checkout button */}
        </>
    )

}

export default CartCheckout;