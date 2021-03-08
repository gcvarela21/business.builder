import React, { useEffect, useState } from "react";
import cakeImages from "../gallery.json";
import GalleryThumb from "../components/GalleryThumb";

function Gallery() {
    const [pics, setPics] = useState([]);

    useEffect(() => {
        loadPics()
    }, [])

    const loadPics = () => {
        setPics(pics)
    }

    return (

        <div className="container">
            <p className="gallery-text">Look through my gallery of past projects for inspiration for your next event. Specialty cakes are made to order and fully customizable.<br /> All flowers are edible.</p>
            <div className="row">
                {cakeImages.map((pic) => {
                    return <GalleryThumb
                        image={pic.image}
                    />
                })}
            </div>
        </div>
    )
}

export default Gallery;