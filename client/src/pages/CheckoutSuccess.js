import React, { useEffect, useState } from "react";

function CheckoutSuccess() {

    const [boughtItems, setBoughtItems] = useState([]);

    useEffect(() => {
        getMyCartItems()
    }, [])
    // recieves list of purchased items from local storage
    function getMyCartItems() {
        var keyArr = Object.keys(localStorage)
        for (var i = 0; i < keyArr.length; i++) {
            var value = JSON.parse(window.localStorage.getItem(keyArr[i]));
            localArr.push(value)
        }
        setBoughtItems(localArr)
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