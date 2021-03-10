import React from "react";
import API from "../utils/API";

function Login() {

    function adminLogIn() {
        var username = document.getElementById("usernameID").value
        var password = document.getElementById("passwordID").value
        var admin = {
            username: username,
            password: password
        }
        API.loginAdmin(admin)
    }

    return (
        <>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Log In Here</label>
                    <input type="text" className="form-control" id="usernameID" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="passwordID" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={(() => { adminLogIn() })}>Submit</button>
            </form>
        </>

    )
}

export default Login;