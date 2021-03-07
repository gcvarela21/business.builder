import React from "react";

function ItemModal(props) {
    return (
        <div className="modal fade" id={"a" + props.id} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title important">{props.itemName}</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={props.itemImg}></img>
                        <p>{props.itemDesc}</p>
                        <p>Price: ${props.itemPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemModal;