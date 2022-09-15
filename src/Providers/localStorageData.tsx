export const saveData: (name:string,value: string) => void = (name,value) => {
    window.localStorage.setItem(name, value);
}
export const removeData : (name:string) => void = (name)=>{
    window.localStorage.removeItem(name);
}
export const getLocalData:(name:string) => string|null = (name)=>{
    return window.localStorage.getItem(name);
}