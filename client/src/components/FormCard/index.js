import React from "react";
// import "./index.css";

function FormCard(props) {

    return (
        <>
            <div className="card col-4">
                <img src={props.itemImg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.itemName}</h5>
                    <p>{props.itemDesc}</p>
                    <p className="card-text">${props.itemPrice}</p>
                    <button className="btn btn-primary">Delete</button>
                </div>
            </div>
        </>
    )
}

export default FormCard;