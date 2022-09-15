import React, {useState} from "react";
import {createOrUpdateData} from "../../../../Providers/dataProvider";
import {User} from "../../../Types/User";
import {getLocalData} from "../../../../Providers/localStorageData";

const UserModal: React.FC<{ user: User }> = (props) => {
    const [data, setData] = useState<User>(props.user);
    const [message, setMessage] = useState<string>();
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    const [messageStatus, setStatus] = useState<string>("error");
    const [role, setRole] = useState<string>("candidates")
    return (
        <>
            <input type={"button"} value={`${isUpdating ? `modifying` : `modify`}`}
                   onClick={() => setIsUpdating((prevState) => !prevState)}
            />
            <span className={messageStatus}>
                {message}
            </span>
            <span>
                <p>User Id</p>
                <input type={"number"}
                       defaultValue={data.id}
                       onChange={(event) => setData(() => {
                           data.id = parseInt(event.target.value)
                           return data;
                       })}
                       disabled={true}
                />
            </span>
            <span>
                <p>User Email</p>
                <input type={"text"} defaultValue={data.email}
                       onChange={(event) => setData(() => {
                           data.email = event.target.value;
                           return data;
                       })}
                       disabled={!isUpdating}
                />
            </span>
            <span>
                <p>User Password</p>
                <input type={"text"} defaultValue={data.password}
                       onChange={(event) => setData(() => {
                           data.password = event.target.value;
                           return data;
                       })}
                       disabled={!isUpdating}
                />
            </span>
            <select onChange={(event) => {
                event.preventDefault();
                setRole(event.target.value);
            }}>
                <option value={"recruiters"}>RECRUITER</option>
                <option value={"candidates"}>CANDIDATE</option>
                {
                    getLocalData("role") === "ADMIN"
                    &&
                    <option value={"admins"}>ADMIN</option>
                }
            </select>
            <input type={"button"} onClick={() => {
                createOrUpdateData(`/users`, [data])
                    .then(() => {
                        setStatus("success");
                        setMessage("Saving Changes ... please wait");
                        setTimeout(() => window.location.reload(), 1500)
                    })
                    .catch((error) => {
                        setStatus("error");
                        setMessage(error.message)
                    })
            }
            }
                   defaultValue={"create"}
            />
        </>
    );
}
export default UserModal;