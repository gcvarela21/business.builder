import React from "react";
import API from "../../utils/API";
import "./index.css";

function DeleteItems(props) {

    function DeleteIt(props) {
        console.log("deleting it!")
        API.removeItem(props.id)
    }

    return (
        <>
            <div className="row">
                <div className="col-sm-0 col-md-3"></div>
                <div id="UpdateForm" className="col-sm-12 col-md-6 d-flex justify-content-center">
                    <form className="row">
                        {/* <div className="col-12 d-flex justify-content-center">
                            <input id="Category" value={props.itemCategory}></input>
                        </div> */}

                        <div id="itemN" className="col-12 d-flex justify-content-center">
                            <p>Item Name:</p>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            {/* <input type="text" id="Name" placeholder={props.itemName} ></input> */}
                            <input type="text" id="Name" value={props.itemName} ></input>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <p>Item Description:</p>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            {/* <textarea className="descriptionField" type="text" id="Desc" placeholder={props.itemDesc}></textarea> */}
                            <textarea className="descriptionField" type="text" id="Desc" value={props.itemDesc}></textarea>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <p>Item Price:</p>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            {/* <input type="text" id="Price" name="Price" placeholder={props.itemPrice}></input> */}
                            <input type="text" id="Price" name="Price" value={props.itemPrice}></input>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <p>Item Image Source:</p>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            {/* <textarea id="Image" className="imgField" type="text" placeholder={props.itemImg}></textarea> */}
                            <textarea id="Image" className="imgField" type="text" value={props.itemImg}></textarea>
                        </div>

                        <div id="btn-Con" className="col-12 d-flex justify-content-center">
                            <div className="row">
                                {/* <div className="col-6 d-flex justify-content-center">
                                    <button onClick={(event) => {
                                        event.preventDefault(); UpdateITEM(props);
                                    }} id="itemUpdate" className="btn btn-secondary">Update</button>
                                </div> */}
                                <div className="col-3"></div>
                                <div className="col-6 d-flex justify-content-center">
                                    <button onClick={(event) => { event.preventDefault(); DeleteIt(props); }} id="Delete" className="btn btn-secondary">Delete</button>
                                </div>
                                <div className="col-3"></div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-sm-0 col-md-3"></div>
            </div>
        </>
    )
}

export default DeleteItems;

    // function UpdateITEM(props) {
    //     console.log("Updating Item");
    //     // let id = document.getElementById("Category").name;
    //     let itemName = {
    //         itemName: document.getElementById("Name").value,
    //         itemDesc: document.getElementById("Desc").value,
    //         itemPrice: document.getElementById("Price").value,
    //         itemImg: document.getElementById("Image").value,
    //         itemCategory: document.getElementById("Category").value
    //     }
    //     console.log(itemName);
    //     API.updateItem(props.itemName, itemName)
    // }
