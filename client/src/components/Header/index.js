import React from "react";
import "./Header.css";

function checkCart() {
    var cartNum = localStorage.length
    return cartNum
}

function Header() {

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <a className="cart" href="/cart">
                            <p >Cart({checkCart()})</p>
                        </a>

                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <img src="https://hosting.photobucket.com/images/i/danielle-m-estrella/logo_DME_crafter.png?width=1920&height=1080&fit=bounds" alt="Logo Header for Danielle M. Estrella" />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Header;
