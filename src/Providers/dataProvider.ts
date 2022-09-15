import axiosPromise from "./axios";
import {getAuthorization} from "./authProvider";
import {AxiosPromise} from "axios";

export const getData = (url: string, params?: any) => {
    return axiosPromise({
        url,
        headers: {
            'Authorization': getAuthorization()
        },
        params: params
    })
}
export const createOrUpdateData: (url: string, data?: any) => AxiosPromise = (url, data) => {
    return axiosPromise({
        url,
        method: "put",
        headers: {
            'Authorization': getAuthorization()
        },
        data
    });
}
export const createDataAnonymously: (url: string, data?: any) => AxiosPromise = (url, data) => {
    return axiosPromise({
        url,
        method: "post",
        data
    });
}
export const createData: (url: string, data?: any) => AxiosPromise = (url, data) => {
    return axiosPromise({
        url,
        headers: {
            'Authorization': getAuthorization()
        },
        method: "post",
        data
    });
}