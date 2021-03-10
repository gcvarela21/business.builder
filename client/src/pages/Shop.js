import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import ItemCard from "../components/ItemCard"



function Shop() {

    const [items, setItemsDatabase] = useState([]);
 
    const { itemCategory } = useParams()

    useEffect(() => {
        API.getCategory(itemCategory)
            .then(res => setItemsDatabase(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
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