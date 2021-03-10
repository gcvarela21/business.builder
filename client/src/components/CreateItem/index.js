import React from "react";
import "./index.css";

function CreateItem() {

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
    //         method: "POST",
    //         data: items
    //     }).then(function (response) {
    //         // console.log(response);
    //         // window.location = "/";
    //     })
    // })
    return (
        <>
            <div className="row">
                <div className="col-sm-0 col-md-3"></div>
                <div id="CreateItem" className="col-sm-12 col-md-6 d-flex justify-content-center">
                    <form className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <p id="c-itemN">Item Name:</p>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <input type="text" id="c-Name" ></input>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <p>Item Description:</p>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <textarea className="descriptionField" type="text" id="c-Desc" ></textarea>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <p>Item Price:</p>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <input type="text" id="c-Price" name="Price" ></input>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <p>Item Image SRC (ex. https//:) :</p>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <textarea id="c-Image" className="imgField" type="text" name="Img"></textarea>
                        </div>

                        <div id="c-btn-Con" className="col-12 d-flex justify-content-center">
                            <div className="row">
                                <div className="col-3 d-flex justify-content-center"></div>
                                <div className="col-6 d-flex justify-content-center">
                                    <button id="Create" className="btn btn-secondary">Create</button>
                                </div>
                                <div className="col-3 d-flex justify-content-center"></div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-sm-0 col-md-3"></div>
            </div>
        </>
    )
}

export default CreateItem;
