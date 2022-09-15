import axiosPromise from "./axios";
import {getAuthorization} from "./authProvider";
import {AxiosPromise} from "axios";
import {Offer} from "../Common/Types/Offer";
import {Appliance} from "../Common/Types/Appliance";

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
export const createData: (url: string, params?: any, data?: any) => AxiosPromise = (url, params, data) => {
    return axiosPromise({
        url,
        headers: {
            'Authorization': getAuthorization()
        },
        method: "post",
        data
    });
}