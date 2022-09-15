import {createContext, Dispatch, SetStateAction, useContext, useState} from "react";

export interface Context {
    page: number;
    pageSize: number;
    setPage: Dispatch<SetStateAction<number>>;
    setPageSize: Dispatch<SetStateAction<number>>;
}

export const Context = createContext<Context | null>(null);