import React from "react";
import './index.modules.css'
import Message from "../Messages";
import {logout} from "../../../Providers/authProvider";
import {useNavigate} from "react-router-dom";
import Navbar from "../Navbar";

const Header: React.FC<{}> = () => {
    const navigate = useNavigate();
    // should add this here{<Message shown={true}/>}
    return (
        <header className="navigation">
            <div className="menu">
                <div className="logout">
                    <p>
                        welcome
                        <b>
                            {` ${window.localStorage.getItem("email")}`}
                        </b>
                    </p>
                    <input type={"button"} onClick={() => {
                        logout();
                    }} value={"log out"}
                           className={"logout__btn"}
                    />
                </div>
            </div>
        </header>
    );
}
export default Header;