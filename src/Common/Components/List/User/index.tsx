import React from "react";
import {User} from "../../../Types/User";

const UserList: React.FC<{users:User[]}> = (props) => {
    const {users} = props;
    return (
        <>
            <thead>
            <tr>
                <th>id</th>
                <th>email</th>
                <th>password</th>
                <th>role</th>
                <th>joined instant</th>
                <th>role</th>
                <th>active</th>
            </tr>
            </thead>
            <tbody>
            {users.map((offer)=>(
                <tr key={offer.id}>
                    <td>{offer.id}</td>
                    <td>{offer.email}</td>
                    <td>{offer.password}</td>
                    <td>{offer.role}</td>
                    <td>{offer.joinedInstant}</td>
                    <td>{offer.role}</td>
                    <td>{offer.enabled?"true":"false"}</td>
                </tr>
            ))}
            </tbody>
        </>
    )
}
export default UserList;