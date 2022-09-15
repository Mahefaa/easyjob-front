import React from "react";
import './index.modules.css'
import {logout} from "../../../Providers/authProvider";
import {useNavigate} from "react-router-dom";

const Header: React.FC<{}> = () => {
    const navigate = useNavigate();
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