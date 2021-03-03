import React from "react";

function ItemCard() {
    return (
        <>
            <div className="card" style={{ width: 300 }}>
                <img src="https://via.placeholder.com/200" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Price:</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}

export default ItemCard;