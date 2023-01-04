import { Link, useNavigate as navigate } from "react-router-dom";
import { useState } from "react";
import {
    App,
    Introduction,
    Register
} from "./signupStyles.js"
import axios from "axios"

function SignUp() {

    /* ------ useStates ------ */

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUser] = useState("");
    const [url, setPicture] = useState("");

    /* ----------------------- */

    const api = ""

    function Teste(e) {
        e.preventDefault();
        RegisterUser();
    }

    function RegisterUser() {

        if (password.length < 3) {
            return alert("A senha é insegura, por favor digite uma senha com mais de 3 caracteres!");
        }

        alert("teste")

        const userObj = {
            email,
            password,
            username,
            url
        }

        const promise = axios.post(userObj, api)
        promise.then(() => {
            navigate("/");

        })
        promise.catch((error) => {
            console.log(error);
        })


    }

    return (
        <App>
            <Introduction>
                <h1>
                    linktr
                </h1>
                <p>
                    save, share and discover
                    the best links on the web
                </p>
            </Introduction>
            <Register onSubmit={Teste}>
                <input onChange={(e) => setEmail(e.target.value)} placeholder="e-mail" type="email" required />
                <input onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" required />
                <input onChange={(e) => setUser(e.target.value)} type="text" placeholder="username" required />
                <input onChange={(e) => setPicture(e.target.value)} placeholder="picture url" type="text" required />
                <button type="submit"><h1>Sign Up</h1></button>
                <Link to="/"><p>Switch back to log in</p></Link>
            </Register>
        </App>
    )

}

export default SignUp;