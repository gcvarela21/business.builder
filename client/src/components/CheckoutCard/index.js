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
            <div className="container">
                <div className="card">
                    <div className="card-body">

                        <h4 className="card-title">{props.itemName}</h4>
                        <p className="card-title">{props.itemDesc}</p>
                        <img src={props.itemImg} alt="baked good" />
                        <p style={{ float: "right" }} className="card-text">
                            <strong>Quantity: </strong>{props.itemQuantity}<br />
                            <strong>Item Price: </strong>${addDecimal(props.itemPriceCent)}</p>
                        {console.log(props.itemPriceCent)}
                    </div>
                </div>
            </div>

        </>

    )
}

export default Checkout;