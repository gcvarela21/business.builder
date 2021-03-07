import React from "react";

function ItemModal(props) {
    return (
        <div className="modal fade" id={"a" + props.id} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title important">Peter Ting</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {props.itemName}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemModal;