import React, { useEffect } from "react";
import API from "../utils/API";

function CheckoutSuccess() {

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

    // push item id and quantity to db then clears local storage
    function pushCartToDB(boughtItems) {
        for (var i = 0; i < boughtItems.length; i++) {
            var itemData = {
                ItemId: boughtItems[i].id,
                quantity: boughtItems[i].itemQuantity
            }
            console.log(itemData)
            API.createOrderItem(itemData)
        }
        localStorage.clear();
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