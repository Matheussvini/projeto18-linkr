import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Register/SignUp.js"
import Login from "./Pages/Login/login.js"
import Timeline from "./Pages/Timeline/Timeline.js"

function PagesRoute() {

    return (

        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/timeline" element={<Timeline />} />
        </Routes>

    )

}

export default PagesRoute;