import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {/* <Link to={"/home", "/"}> */}
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            {/* </Link> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    {/* <Link to={"/shop"}> */}
                                    <li><a className="dropdown-item" href="/shop/cakes">Cakes</a></li>
                                    {/* </Link> */}
                                    {/* <Link to={"/cookies"}> */}
                                    <li><a className="dropdown-item" href="/shop/cookies">Cookies</a></li>
                                    {/* </Link> */}
                                    {/* <Link to={"/specialtreats"}> */}
                                    <li><a className="dropdown-item" href="/shop/special_treats">Special Treats</a></li>
                                    {/* </Link> */}
                                </ul>
                            </li>
                            {/* <Link to={"/gallery"}> */}
                            <li className="nav-item">
                                <a className="nav-link" href="#">Gallery</a>
                            </li>
                            {/* </Link> */}
                            {/* <Link to={"/about"}> */}
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            {/* </Link> */}
                            {/* <Link to={"/contact"}> */}
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            {/* </Link> */}
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default NavBar;