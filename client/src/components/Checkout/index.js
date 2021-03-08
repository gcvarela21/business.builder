import React from "react";
import "./index.css";


function Checkout(props) {
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">

                        <h4 className="card-title">{props.itemName}</h4>
                        <p className="card-title">{props.itemDesc}</p>
                        <img src={props.itemImg} alt="baked good" />
                        <p style={{ float: "right" }} className="card-text"><strong>Quantity: </strong>{props.itemQuantity}<br /><strong>Total: </strong>${props.itemPriceCent}</p>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Checkout;