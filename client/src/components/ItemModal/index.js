import React from "react";
// import iziToast from 'izitoast';


function ItemModal(props) {

    // function toast() {
    //     iziToast.success({
    //         title: 'OK',
    //         message: 'Successfully inserted record!',
    //     });
    // }

    function addToLocal() {

        var itemQuantity = document.getElementById([props.id]).value
        var itemPriceCent = (props.itemPrice) * 100

        var itemInfo = {
            id: props.id,
            itemQuantity: parseInt(itemQuantity),
            itemName: props.itemName,
            itemDesc: props.itemDesc,
            itemImg: props.itemImg,
            itemPriceCent: itemPriceCent
        }

        localStorage.setItem(props.id, JSON.stringify(itemInfo));
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
                        <img alt="baked item" src={props.itemImg}></img>
                        <p className="modal-text">{props.itemDesc}</p>
                        <p>Price: ${props.itemPrice}</p>
                        <form onSubmit={(event) => {
                            event.preventDefault()
                            addToLocal(event)
                            // toast()
                        }}>

                            <label htmlFor="exampleInputEmail1" className="form-label">QUANTITY</label>
                            <input type="number" className="form-control" id={props.id}></input>

                            <button type="submit" className="btn btn-primary" >Add To Cart</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ItemModal;