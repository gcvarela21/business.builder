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
  
  
    function addToLocal(event) {

        var itemQuantity = document.getElementById([props.id]).value
        // var itemQuantity = event.target.value
        // localStorage.setItem(JSON.stringify(props.id), JSON.stringify(itemQuantity));
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
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                    </div>
                    <div className="modal-body">
                        <img className="modal-image" alt="baked item" src={props.itemImg}></img>
                        <p className="modal-text">{props.itemDesc}</p>
                        <p><strong>Price: </strong> ${props.itemPrice}</p>
                        <form onSubmit={(event) => {
                            event.preventDefault()
                            addToLocal(event)
                            // notieAlert()
                        }}>

                            <label htmlFor="exampleInputEmail1" className="form-label"><strong>Enter Quantity: </strong></label>
                            <input type="number" className="form-control" id={props.id}></input>

                            <button type="submit" className="btn btn-dark" >Add To Cart</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ItemModal;