import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import './index.modules.css';
import Navbar from "../Navbar";
const Body: React.FC<{ children: React.ReactNode }> = (props) => {
    return (
        <>
            <Header/>
            <Navbar/>
                {props.children}
            <Footer/>
        </>
    )
}
export default Body;