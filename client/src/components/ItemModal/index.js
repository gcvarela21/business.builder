import React from "react";



function ItemModal(props) {

    function addToLocal(event) {

        var itemQuantity = document.getElementById([props.id]).value
        console.log(event.target.id)
        localStorage.setItem(JSON.stringify(props.id), JSON.stringify(itemQuantity));

        // var itemQuantity = event.target.value
        // localStorage.setItem(JSON.stringify(props.id), JSON.stringify(itemQuantity));
    }

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
                        <form onSubmit={(event) => {
                            event.preventDefault()
                            addToLocal(event)
                            console.log(event)
                        }}>

                            <label htmlFor="exampleInputEmail1" className="form-label">QUANTITY</label>
                            <input type="number" className="form-control" id="quantity"></input>

                            <button type="submit" className="btn btn-primary" >Add To Cart</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ItemModal;