import React, {useEffect, useState} from "react";
import {Message} from "../../Common/Types/Message";
import {getData} from "../../Providers/dataProvider";
import {getUserId} from "../../Providers/userDetailsProvider";
import Body from "../../Common/Components/Body";
import List from "../../Common/Components/List";

const Messages: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(25);
    const [date, setDate] = useState<string>("");
    //to implement : filter by date
    useEffect(() => {
        getData(`users/${getUserId()}/messages`,{
            page,
            pageSize
        })
            .then((data) => setMessages(data.data as Message[]));
    }, [page,pageSize])
    return (
        <Body children={
            <List setPage={setPage} setSize={setPageSize} setFilter={setDate} children={
                <>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                    </tr>
                    </thead>
                    <tbody>
                {
                    messages.map((message)=>(
                    <tr key={message.email}>
                    <td>{message.email}</td>
                    <td>{message.content}</td>
                    <td>{message.otherEmail}</td>
                    </tr>
                    ))
                }
                    </tbody>
                </>
            }/>
        }/>
    );
}
export default Messages;