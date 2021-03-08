import React from "react";
import "./index.css";


function GalleryThumb(props) {
    return (
        <div className="col-3">
            <img alt="cake" src={props.image} className="img-thumbnail" />
        </div>
    );
}

export default GalleryThumb;