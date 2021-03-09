import React, { useEffect, useState } from "react";
import API from "../utils/API";
const Stripe = require('stripe');
const stripe = Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

function CheckoutSuccess() {

    const [boughtItems, setBoughtItems] = useState([]);

    useEffect(() => {
        getMyCartItems()
    }, [])

    // recieves list of purchased items from local storage
    var localArr = []
    function getMyCartItems() {
        var keyArr = Object.keys(localStorage)
        for (var i = 0; i < keyArr.length; i++) {
            var value = JSON.parse(window.localStorage.getItem(keyArr[i]));
            localArr.push(value)
        }
        pushCartToDB(localArr)
    }
    console.log(boughtItems)

    // push item id and quantity to db then clears local storage
    function pushCartToDB(boughtItems) {
        // API.createOrder
        for (var i = 0; i < boughtItems.length; i++) {
            var itemData = {
                ItemId: boughtItems[i].id,
                quantity: boughtItems[i].itemQuantity
            }
            console.log(itemData)
            API.createOrderItem(itemData)
        }
        localStorage.clear();
        // var customer = await stripe.customers.create();
        // console.log(customer.lastResponse.requestId);
    }


    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h1>Thank you for purchasing!</h1>
                    </div>
                </div>
            </div>
        </>
    )

}

export default CheckoutSuccess;