import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import FormCard from "../components/FormCard";

function Admin() {

    const [items, setItemsDatabase] = useState([]);

    const { itemCategory } = useParams();

    useEffect(() => {
        API.getCategory(itemCategory)
            .then(res => setItemsDatabase(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <h2 className="col-12">Welcome Danielle!</h2>
                    <p className="col-12">Select a category to edit or up date:</p>
                    <div>
                        <a className="" href="/admin/cakes">Cakes</a>
                        <a className="" href="/admin/cookies">Cookies</a>
                        <a className="" href="/admin/special_treats">Pastries</a>
                    </div>
                </div>
                <form className="row">
                    {items.map((item, index) => {
                        return (<FormCard
                            id={item.id}
                            key={index}
                            itemName={item.itemName}
                            itemPrice={item.itemPrice}
                            itemDesc={item.itemDesc}
                            itemCategory={item.itemCategory}
                            itemImg={item.itemImg}
                        />)
                    })}
                </form>
            </div>
        </>
    )
}
export default Admin;
