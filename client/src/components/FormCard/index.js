import React from "react";

import "./index.css";

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

//     return (
//         <>
//             <div className="row">
//                 <form className="card col-12">
//                     <label for="itemName">Item Name:</label>
//                     <input type="text" id="itemName" name="itemName" value="John">{props.itemName}</input>
//                     <label className="descriptionField" for="itemDesc">Item Description:</label>
//                     <input type="text" id="itemDesc" name="itemDesc" value="John">{props.itemDesc}</input>
//                     <label for="itemPrice">Item Price:</label>
//                     <input type="text" id="itemPrice" name="itemPrice" value="John">{props.itemPrice}</input>
//                     <label for="iitemImg">Item Image SRC (ex. https//:) :</label>
//                     <input type="text" id="itemImg" name="itemImg" value="">{props.itemImg}</input>
//                     {/* <button className="btn btn-primary" type="submit" value="Submit" />
//                     <button className="btn btn-primary" type="submit" value="Delete" /> */}
//                 </form>
//             </div>
//         </>
//     )
// }

export default FormCard;
