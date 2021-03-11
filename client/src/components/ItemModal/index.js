import React from "react";
// import notie from "notie";
import "./index.css"



function ItemModal(props) {

    //    function notieAlert(){
    //     notie.alert({
    //         type: 'success', // optional, default = 4, enum: [1, 2, 3, 4, 5, 'success', 'warning', 'error', 'info', 'neutral']
    //         text: 'Item added to cart!',
    //         stay: false, // optional, default = false
    //         time: 2, // optional, default = 3, minimum = 1,
    //         position: 'top' // optional, default = 'top', enum: ['top', 'bottom']
    //       })}

    function handleAddToCart(event) {
        event.preventDefault()
        addToLocal(event)
        // notieAlert()
        // eslint-disable-next-line no-restricted-globals
        // location.reload()
    }

    function addToLocal() {

        var itemQuantity = document.getElementById([props.id]).value
        var itemPriceCent = (props.itemPrice) * 100
        var itemInfo = {
            id: props.id,
            itemQuantity: parseInt(itemQuantity),
            itemName: props.itemName,
            itemDesc: props.itemDesc,
            itemImg: props.itemImg,
            itemPriceCent: itemPriceCent,
        }

        localStorage.setItem(props.id, JSON.stringify(itemInfo));
    }
    return (
        <div className="modal fade" id={"a" + props.id} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title important">{props.itemName}</h3>
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                    </div>
                    <div className="modal-body">
                        <img className="modal-image" alt="baked item" src={props.itemImg}></img>
                        <p className="modal-text">{props.itemDesc}</p>
                        <p><strong>Price: </strong> ${props.itemPrice}</p>
                        <form onSubmit={(event) => {
                            handleAddToCart(event)
                        }}>

                            <label htmlFor="exampleInputEmail1" className="form-label"><strong>Enter Quantity: </strong></label>
                            <input type="number" className="form-control" id={props.id}></input>
                            <p className="pickup-text"><small><strong>Pickup info: </strong>Orders receieved by Wednesday @ 11:59pm will be available for pickup Fri, Sat, & Sun between the hours of 12-4pm. Any orders received after this time will be availble the following week at the same times. Please use the contact form to inquire about special pickup options or to place orders for pickup more than one week in advance.</small></p>


                            <button type="submit" className="btn btn-dark" >Add To Cart</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ItemModal;