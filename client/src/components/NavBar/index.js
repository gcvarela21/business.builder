import React from "react";

import "./index.css";

function NavBar() {
    return (
        <>

            <nav className="brand navbar-brand navBar container-fluid d-none d-md-inline">
                <ul className="d-flex justify-content-center">
                    <li className="navItem">
                        <a className="navLink" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="navItem dropdown">
                        <a className="navItem dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropItem" href="/shop/cakes">Cakes</a></li>
                            <li><a className="dropItem" href="/shop/cookies">Cookies</a></li>
                            <li><a className="dropItem" href="/shop/special_treats">Special Treats</a></li>
                        </ul>
                    </li>
                    <li className="navItem">
                        <a className="navLink" href="/gallery">Gallery</a>
                    </li>
                    <li className="navItem">
                        <a className="navLink" href="/about">About</a>
                    </li>
                    <li className="navItem">
                        <a className="navLink" href="/contact">Contact</a>
                    </li>
                </ul>
            </nav >

            <div className="brand navbar-brand navBar container-fluid d-md-none">
                <div className="d-flex justify-content-end col-12">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>

                    </button>
                </div>
                <div className="d-flex justify-content-end col-12">
                    <div id="inBlock" className="collapse" id="navbarToggleExternalContent">
                        <ul id="inBlock" className="">
                            <li className="navItem">
                                <a className="navLink" aria-current="page" href="/">Home</a>
                            </li>
                            <li id="shop" className="navItem dropdown">
                                <a className="navItem dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropItem" href="/shop/cakes">Cakes</a></li>
                                    <li><a className="dropItem" href="/shop/cookies">Cookies</a></li>
                                    <li><a className="dropItem" href="/shop/special_treats">Special Treats</a></li>
                                </ul>
                            </li>
                            <li className="navItem">
                                <a className="navLink" href="/gallery">Gallery</a>
                            </li>
                            <li className="navItem">
                                <a className="navLink" href="/about">About</a>
                            </li>
                            <li className="navItem">
                                <a className="navLink" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default NavBar;