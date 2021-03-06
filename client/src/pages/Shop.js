import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import ItemCard from "../components/ItemCard"



function Shop() {

    const [items, setItemsDatabase] = useState([]);
    // cart
    // modal izitoast or notie

    // useEffect(() => {
    //     showItems()
    // }, [])

    // function showItems() {
    //     API.getAllItems()
    //         .then(res => {
    //             setItemsDatabase(res.data)
    //         })
    //         .catch(err => console.log(err))
    // }

    // OR

    const { itemCategory } = useParams()
    useEffect(() => {
        API.getCategory(itemCategory)
            .then(res => setItemsDatabase(res.data))
            .catch(err => console.log(err));
    }, [])

    // ADD ITEM TO CART FUNCTION.. connect to button inside modal.
    // function addItems(id){

    // }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {items.map((item, index) => {
                        return (<ItemCard
                            id={item.id}
                            key={index}
                            itemName={item.itemName}
                            itemPrice={item.itemPrice}
                            itemDesc={item.itemDesc}
                            itemCategory={item.itemCategory}
                        />)
                    })}
                </div>
            </div>
        </>
    )
}

export default Shop;