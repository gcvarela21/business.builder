import React from "react";


function Checkout(props) {
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.itemName}</h5>
                        <h5 className="card-title">{props.itemDesc}</h5>
                        <p className="card-text">{props.itemPrice}</p>
                        <img src={props.itemImg} alt="baked good" />
                    </div>
                </div>
            </div>

        </>

    )
}

export default Checkout;