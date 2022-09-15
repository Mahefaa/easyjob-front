import React from "react";
import Header from "../Header";
import './index.modules.css';
import Navbar from "../Sidebar";
const Body: React.FC<{ children: React.ReactNode }> = (props) => {
    return (
        <>
            <Header/>
            <Navbar/>
                {props.children}
        </>
    )
}
export default Body;