import {getLocalData} from "./localStorageData";

export const getUserId: () => string|null = () => {
    return getLocalData("userId");
}
export const getUserRole : ()=> string|null=()=>{
    return getLocalData("role");
}