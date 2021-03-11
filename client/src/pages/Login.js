import React from "react";
import API from "../utils/API";

function Login() {

    function adminLogIn(event) {
        event.preventDefault()
        var username = document.getElementById("usernameID").value
        var password = document.getElementById("passwordID").value
        var admin = {
            username: username,
            password: password
        }
        console.log(admin)
        API.loginAdmin(admin)
            .then(() => {
                window.location.replace("/admin");
            })
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-0 col-4"></div>
                    <div className="col-sm-0 col-4 d-flex justify-content-center">
                        <form className="row">
                            <div id="log-border">
                                <div className="col-12 mb-3 d-flex justify-content-center">
                                    <label for="exampleInputEmail1" className="form-label">Log In Here</label>
                                </div>
                                <div className="col-12 mb-3 d-flex justify-content-center">
                                    <input type="text" className="form-control" id="usernameID" aria-describedby="emailHelp" />
                                </div>


                                <div className="col-12 mb-3 d-flex justify-content-center">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                </div>
                                <div className="col-12 mb-3 d-flex justify-content-center">
                                    <input type="password" className="form-control" id="passwordID" />
                                </div>

                                <div className="col-12 mb-3 d-flex justify-content-center">
                                    <button type="submit" className="btn btn-dark" onClick={((event) => { adminLogIn(event) })}>Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-0 col-4"></div>
                </div>
            </div>

        </>

    )
}

export default Login;