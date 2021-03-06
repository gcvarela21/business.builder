import React from "react";
import "./Header.css";

function Header() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <i className="fas fa-user-alt pro"></i><p className="cart">cart</p><p id="cart"></p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <img src="https://via.placeholder.com/1500x200/000000/FFFFFF/?text=Danielle M. Estrella" alt="Logo Header for Danielle M. Estrella" />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Header;
