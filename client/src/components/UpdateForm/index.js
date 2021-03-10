import React from "react";
import API from "../../utils/API";

import "./index.css";

function UpdateForm(props) {

    // $(document).on("click", "#Update", function () {

    //     let items = {
    //         id: $("#ID").val(),
    //         itemName: $("#Name").val(),
    //         itemDesc: $("#Desc").val(),
    //         itemPrice: $("#Price").val(),
    //         itemImg: $("#Image").val()
    //     };


    //     $.ajax({
    //         url: "/api/itemUpdate",
    //         method: "",
    //         data: items
    //     }).then(function (response) {
    //         // console.log(response);
    //         // window.location = "/";
    //     })
    // })

    // $(document).on("click", "#Delete", function () {

    //     $.ajax({
    //         url: "/api/itemid/                           ",
    //         method: "DELETE",
    //         data: newUser
    //     }).then(function (response) {
    //         console.log(response);
    //         window.location = "/";
    //     })
    // })

    function killIt(props) {
        console.log("killing it!")
        API.removeItem(props.id)
    }

    return (
        <>
            <div className="row">
                <div className="col-sm-0 col-md-3"></div>
                <div id="UpdateForm" className="col-sm-12 col-md-6 d-flex justify-content-center">
                    <form className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <p id="itemN">Item Name:</p>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <input type="text" id="Name" placeholder={props.itemName} ></input>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <p>Item Description:</p>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <textarea className="descriptionField" type="text" id="Desc" placeholder={props.itemDesc}></textarea>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <p>Item Price:</p>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <input type="text" id="Price" name="Price" placeholder={props.itemPrice}></input>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <p>Item Image SRC (ex. https//:) :</p>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <textarea id="Image" className="imgField" type="text" placeholder={props.itemImg}></textarea>
                        </div>

                        <div id="btn-Con" className="col-12 d-flex justify-content-center">
                            <div className="row">
                                <div className="col-6 d-flex justify-content-center">
                                    <button id="itemUpdate" className="btn btn-secondary">Update</button>
                                </div>
                                <div className="col-6 d-flex justify-content-center">
                                    <button onClick={(event) => { event.preventDefault(); killIt(props); }} id="Delete" className="btn btn-secondary">Delete</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-sm-0 col-md-3"></div>
            </div>
        </>
    )
}

export default UpdateForm;
