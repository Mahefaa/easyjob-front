import React, {useEffect, useState} from "react";
import {Message} from "../../Types/Message";
import axiosPromise from "../../../Providers/axios";

const Messages : React.FC<{shown:boolean}> = (props)=>{
    const {shown} = props;
    const [messages,setMessages] = useState<Message[]>([]);
    const id = window.localStorage.getItem("id") || null;
    useEffect(()=>{
        if(id!==null){
            axiosPromise({
                url:`users/${id}/`,
                params:{
                    page:1,
                    pageSize:500,
                }
            })
                .then((data)=>setMessages(data.data as Message[]))
            ;
        }
    },[shown,id])
    return (
        <>{JSON.stringify(messages)}</>
    )
}
export default Messages;