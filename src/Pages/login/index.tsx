import React, {Dispatch, SetStateAction, useState} from "react";
import './index.modules.css';
import {useNavigate} from "react-router-dom";
import Loading from "../../Common/Components/Loading";
import Input from "../../Common/Components/Input";
import {authentify} from "../../Providers/authProvider";
import {saveData} from "../../Providers/localStorageData";
import {User} from "../../Common/Types/User";
import {createDataAnonymously} from "../../Providers/dataProvider";

const Login: React.FC<{}> = (props) => {
    const navigate = useNavigate();
    const sign: () => void = () => {
        const userToken = window.btoa(`${username}:${password}`);
        return authentify(userToken)
            .then((data) => {
                const whoami = data.data as User;
                saveData("token",userToken);
                saveData("email",whoami.email);
                saveData("role",whoami.role.toString())
                saveData("userId",whoami.id.toString())
                navigate("/home/offers")
            })
            .catch(() => {
                setLoading(false);
                setMessage("wrong credentials")
            })
            ;
    }
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [message, setMessage] = useState<string>();
    const [isLoading, setLoading] = useState<boolean>(false);
    const [create, setCreate] = useState<boolean>(false);
    const [confirmPass, setConfirmPass] = useState<string>("");
    const [role,setRole] = useState<string>("candidates");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, setter: Dispatch<SetStateAction<string>>) => {
        setter(event.target.value);
    }
    return (
        <div className={"login__card"}>
            <form className={"login__form"}>
                <Input
                    className={"login__input"}
                    id={"login__username"}
                    label={"Email ID"}
                    type={"text"}
                    value={username}
                    onChange={(event) => handleChange(event, setUsername)}
                    disabled={isLoading}
                />
                <Input
                    className={"login__input"}
                    id={"login__password"}
                    label={"Password"}
                    type={"Password"}
                    value={password}
                    onChange={(event) => handleChange(event, setPassword)}
                    disabled={isLoading}
                />
                {create &&
                    <>
                        <Input
                            className={"login__input"}
                            id={"login__password__confirm"}
                            label={"Confirm Password"}
                            type={"password"}
                            value={confirmPass}
                            onChange={(event) => handleChange(event, setConfirmPass)}
                            disabled={isLoading}
                        />
                        <select onChange={(event)=>setRole(event.target.value)} defaultValue={role}>
                            <option value={"candidates"}>CANDIDATE</option>
                            <option value={"recruiters"}>RECRUITER</option>
                        </select>
                    </>
                }
                <strong style={{opacity: 0.8, color: "white", textAlign: "center"}}>{message}</strong>
                <Input
                    inputClassName={"login__button"}
                    id={"login"}
                    type={"button"}
                    disabled={isLoading}
                    onClick={() => {
                        if (confirmPass !== password && create) {
                            setMessage("passwords don't match");
                        }
                        else if(create){
                            createDataAnonymously(`/users/${role}`,{
                                email:username,
                                password
                            })
                                .then(sign)
                                .catch((error)=>alert(error.message))
                        }
                        else {
                            setMessage("");
                            setLoading(true);
                            sign();
                        }
                    }}
                    value={create?"create":"login"}
                />
                <span
                    className={"option"}
                    onClick={
                        () => setCreate((prevState) => !prevState)}
                >{!create ? "create account ?" : "sign in"}
                </span>
                <Loading hidden={!isLoading}/>
            </form>
        </div>
    )
}
export default Login;