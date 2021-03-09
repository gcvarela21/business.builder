import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import ItemCard from "../components/ItemCard"



function Shop() {

    const [items, setItemsDatabase] = useState([]);
    // const [modalInfo, setModalInfo] = useState({});

    // function updateModal(id) {
    //     console.log(id)
    //     API.getItem(id)
    //         .then(res => setModalInfo(res.data))
    //         .catch(err => console.log(err));
    // }
    const { itemCategory } = useParams()

    useEffect(() => {
        API.getCategory(itemCategory)
            .then(res => setItemsDatabase(res.data))
            .catch(err => console.log(err));
    }, [])


    // cart
    // modal izitoast or notie

    // function showItems() {
    //     API.getAllItems()
    //         .then(res => {
    //             setItemsDatabase(res.data)
    //         })
    //         .catch(err => console.log(err))
    // }

    // OR

    // ADD ITEM TO CART FUNCTION.. connect to button inside modal.
    // function addItems(id){

    // }



    return (
        <>
            <div className="container" style={{ marginLeft: "auto", marginRight: "auto" }}>
                <div className="row">
                    {items.map((item, index) => {
                        return (<ItemCard
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

export default Shop;