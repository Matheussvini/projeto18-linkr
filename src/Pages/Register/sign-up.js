import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {

    /* ------ useStates ------ */

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUser] = useState("");
    const [url, setPicture] = useState("");

    /* ----------------------- */

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
            <Register>
                <input onChange={(e) => setEmail(e.target.value)} placeholder="e-mail" type="email" required />
                <input onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" required />
                <input onChange={(e) => setUser(e.target.value)} type="text" placeholder="username"  required />
                <input onChange={(e) => setPicture(e.target.value)} placeholder="picture url" type="text" required />
                <button type="submit"><h1>Sign Up</h1></button>
                <Link to="/"><p>Switch back to log in</p></Link>
            </Register>
        </App>
    )

}

const App = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #151515;
`

const Introduction = styled.div`
    box-sizing: border-box;
    padding-left: 144px;
    padding-top: 301px;
    width: 65%;
    height: 100vh;
    background-color: #151515;
    h1{
        width: 233px;
        height: 117px;
        font-family: 'Passion One';
        font-style: normal;
        font-weight: 700;
        font-size: 106px;
        line-height: 117px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
    } 
    
    p {
        width: 442px;
        height: 128px;
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 43px;
        line-height: 64px;
        color: #FFFFFF;
    }
`

const Register = styled.form`
    box-sizing: border-box;
    padding-top: 274px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35%;
    height: 100vh;
    background-color: #333333;
    gap: 13px;
    input{
        width: 429px;
        height: 65px;
        background: #FFFFFF;
        border-radius: 6px;
    }

    button{
        width: 429px;
        height: 65px;
        background: #1877F2;
        border-radius: 6px;
        border: none;
    }
`

export default SignUp;