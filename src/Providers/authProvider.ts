import {getData} from "./dataProvider";
import {AxiosPromise} from "axios";
import axiosPromise from "./axios";
import {getLocalData,removeData} from "./localStorageData";

export const getAuthorization: () => string = () => {
    return `Basic ${getLocalData("token")}`;
}
export const authentify: (token:string) => AxiosPromise = (token) => {
    return axiosPromise({
        url:'/whoami',
        headers:{
            'Authorization':`Basic ${token}`
        }
    });
}
export const logout: () => void = () => {
    removeData("token");
    getData("/logout")
        .finally(() => window.location.reload());
}
