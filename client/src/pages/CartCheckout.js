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
            // gets itemID and quantity from local storage
            var key = window.localStorage.key(i);
            var value = JSON.parse(window.localStorage.getItem(localStorage.key(i)));

            // console.log(key)
            // console.log(value)
            // look for itemInfo from the key in local storage
            holderArr.push({ "itemID": key, "itemQuantity": value })
        }
        for (var j = 0; j < holderArr.length; j++) {
            // console.log(holderArr)
            API.getItem(holderArr[j].itemID)
                .then(res => holderArr[j] = (res.data))
        }
        // console.log(holderArr)
        // i want to add item quantity (from local) + desc, title, id, img to holderArr 
        // E.G.
        // [    
        // {itemQuantity: 5
        // itemName: cOOKIE
        // itemDesc: ITS GOOD}
        // ]
        // console.log(holderArr)
        return setCartItems(holderArr)

    }
    // THIS KINDA WORKED IDK
    // API.getItem(key)
    //     .then(res => holderArr.push({ [key]: res.data.key, "itemQuantity": value }))
    //     .catch(err => console.log(err));
    console.log(cartItems)
    return (
        <>
            {/* make api call to get itemID info, append to page, calculate sum, add checkout button */}
        </>
    )

}

export default CartCheckout;