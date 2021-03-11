import React from "react";
import "./index.css";

function Checkout(props) {


    function addDecimal(num) {
        num = JSON.stringify(num);
        num = num.slice(0, num.length - 2) + "." + num.slice(num.length - 2, num.length)
        return num
    }

    return (
        <>
            <div className="card">
                <div className="checkout-card-body">
                    <img className="imgLeft" src={props.itemImg} alt="baked good" align="left" />
                    <h4 className="card-title">{props.itemName}</h4>
                    <p className="card-title">{props.itemDesc}</p>
                    <p className="checkout-card card-text">
                    <strong>Item Price: </strong>${addDecimal(props.itemPriceCent)}<br /> <strong>Quantity: </strong>{props.itemQuantity}</p>
                    {console.log(props.itemPriceCent)}
                </div>
            </div>

        </>

    )
}

export default Checkout;