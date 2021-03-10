import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import CreateItem from "../components/CreateItem";
import UpdateForm from "../components/UpdateForm";
import "./Admin.css";

function Admin() {

    // redirect back to login if not logged in

    const [items, setItemsDatabase] = useState([]);

    const { itemCategory } = useParams();




    useEffect(() => {
        API.adminCheck()
            .then((res) => {
                console.log(res)
            })
        API.getCategory(itemCategory)
            .then(res => setItemsDatabase(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <h1 id="welcome" className="col-12 d-flex justify-content-center">Welcome Danielle!</h1>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <h3>Create A New Shop Item Here</h3>
                    </div>
                    <div className="col-12 d-flex justify-content-center CF-Container">
                        <CreateItem />
                    </div>
                </div>
                <div className="row">
                    <h3 className="col-12 d-flex justify-content-center">Update or Remove A Shop Item Here</h3>
                    <h5 className="col-12 d-flex justify-content-center">Click On A Category Yould Like To Edit From:</h5>
                    <div className="col-12 d-flex justify-content-center">
                        <a className="updateNav" href="/admin/cakes">Cakes</a>
                        <a className="updateNav" href="/admin/cookies">Cookies</a>
                        <a className="updateNav" href="/admin/special_treats">Pastries</a>
                    </div>
                </div>
                <div className="row">
                    {items.map((item, index) => {
                        return (<UpdateForm
                            id={item.id}
                            key={index}
                            itemName={item.itemName}
                            itemPrice={item.itemPrice}
                            itemDesc={item.itemDesc}
                            itemCategory={item.itemCategory}
                            itemImg={item.itemImg}
                        />)
                    })}
                </div>
            </div>
        </>
    )
}
export default Admin;
