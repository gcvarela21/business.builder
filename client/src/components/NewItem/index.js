import React from "react";
import API from "../../utils/API";
import "./index.css";

function NewItem() {

    function createITEM() {
        console.log("creating Item");
        let itemData = {
            itemName: document.getElementById("c-Name").value,
            itemDesc: document.getElementById("c-Desc").value,
            itemPrice: document.getElementById("c-Price").value,
            itemImg: document.getElementById("c-Image").value,
            itemCategory: document.getElementById("c-Category").value
        }

        console.log(itemData);
        API.createItem(itemData)
    }

    return (
        <>
            <div className="row">
                <div className="col-sm-0 col-md-3"></div>
                <div id="CreateItem" className="col-sm-12 col-md-6 d-flex justify-content-center">
                    <form className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <p id="c-itemN">Select a Category for Your New Item:</p>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <select id="c-Category">
                                <option value="cakes">Cakes</option>
                                <option value="cookies">Cookies</option>
                                <option value="special_treats">Pastries</option>
                            </select>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <p>Item Name:</p>
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
                            <input type="text" id="c-Price" name="c-Price" ></input>
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
                                    <button id="Create" className="btn btn-secondary" onClick={(event) => {
                                        event.preventDefault(); createITEM();
                                    }} >Create</button>
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

export default NewItem;
