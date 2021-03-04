import React, { useEffect, useState } from "react";
import API from "../utils/API";
import ItemCard from "../components/ItemCard"



function Shop() {

    const [items, setItemsDatabase] = useState([]);

    useEffect(() => {
        showItems()
    }, [])

    function showItems() {
        API.getAllItems()
            .then(res => {
                setItemsDatabase(res.data)
            })
            .catch(err => console.log(err))
    }

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