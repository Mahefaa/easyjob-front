import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Offers from "./Pages/offers";
import Login from "./Pages/login";
import Users from "./Pages/users";
import Appliances from "./Pages/appliances";
import Domains from "./Pages/domains";
import ProtectedRoutes, {AnonymousRoutes} from "./Utils/ProtectedRoutes";
import {getUserId} from "./Providers/userDetailsProvider";
import Messages from "./Pages/Messages";

function App() {
    return (
        <div className={"body"}>
            <BrowserRouter>
                <Routes>
                    <Route path={"home"} element={<ProtectedRoutes/>}>
                        <Route path={"messages"} element={<Messages/>}/>
                        <Route path={"appliances"}>
                            <Route path={""} element={<Appliances/>}/>
                        </Route>
                        <Route path={"domains"} element={<Domains/>}/>
                        <Route path={"users"} element={<Users/>}/>
                        <Route path={"offers"} >
                            <Route path={""} element={<Offers/>}/>
                            <Route path={":offerId/appliances"} element={<Appliances/>}/>
                        </Route>
                    </Route>
                    <Route path={"*"} element={<AnonymousRoutes/>}>
                        <Route path={"*"} element={<Login/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
