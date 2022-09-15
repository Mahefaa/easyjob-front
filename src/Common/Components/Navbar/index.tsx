import {Link} from "react-router-dom";
import './index.modules.css'
import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className={"navbar"}>
            <Link to={"/home/appliances"} className={"link"}>APPLIANCES</Link>
            <Link to={"/home/domains"} className={"link"}>DOMAINS</Link>
            <Link to={"/home/users"} className={"link"}>USERS</Link>
            <Link to={"/home/offers"} className={"link"}>OFFERS</Link>
        </nav>
    )
}
export default Navbar;