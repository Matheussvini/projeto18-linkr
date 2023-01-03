import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Register/sign-up.js"
import Login from "./Pages/Login/login.js"
import Home from "./Pages/Home/home.js"

function PagesRoute() {

    return (

        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/home" element={<Home />} />
        </Routes>

    )

}

export default PagesRoute;