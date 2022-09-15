import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import {getLocalData} from "../Providers/localStorageData";

const ProtectedRoutes: React.FC = (props) => {
    return getLocalData("token") !== null ? <Outlet/> : <Navigate to={"/"}/>
}
export const AnonymousRoutes: React.FC = (props) =>{
    return getLocalData("token") !== null ?< Navigate to={"/home/offers"}/>:<Outlet/>
}
export default ProtectedRoutes;