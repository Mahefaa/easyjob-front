import React, {useEffect, useState} from "react";
import Header from "../../Common/Components/Header";
import List from "../../Common/Components/List";
import Footer from "../../Common/Components/Footer";
import {getData} from "../../Providers/dataProvider";
import {User} from "../../Common/Types/User";
import UserList from "../../Common/Components/List/User";
import Body from "../../Common/Components/Body";

const Users: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [user, setUser] = useState<User>({} as User);
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(25);
    const [mail, setMail] = useState<string>("");
    const [role, setRole] = useState<string>("");
    const [isShown, setIsShown] = useState<boolean>(false);
    useEffect(() => {
        getData(
            "/users",
            {
                page,
                pageSize,
                mail,
                role
            }
        )
            .then(data => setUsers(data.data as User[]))
            .catch((error) => alert(error.message))
        ;
    }, [page, pageSize, mail, role])
    return (
        <Body children={
            <>
                <List children={
                    <>
                        <input id={"add__button"} type={"button"} value={"add"} onClick={() => {
                            setUser({} as User);
                            setIsShown(true)
                        }}/>
                        <UserList users={users}/>
                    </>
                }
                      setPage={setPage}
                      setSize={setPageSize}
                      setFilter={setMail}
                />
            </>
        }
        />
    )
}
export default Users;