import React, {useEffect, useState} from "react";
import {createOrUpdateData, getData} from "../../../../Providers/dataProvider";
import {Domain} from "../../../Types/Domain";

const DomainModal: React.FC<{ domain: Domain }> = (props) => {
    const [data, setData] = useState<Domain>(props.domain);
    const [message, setMessage] = useState<string>();
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    const [messageStatus, setStatus] = useState<string>("error")
    return (
        <>
            <input type={"button"} value={`${isUpdating ? `modifying` : `modify`}`}
                   onClick={() => setIsUpdating((prevState) => !prevState)}
            />
            <span className={messageStatus}>
                {message}
            </span>
            <span>
                <p>Domain ID</p>
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
                <p>Domain Name</p>
                <input type={"text"} defaultValue={data.name}
                       onChange={(event) => setData(() => {
                           data.name = event.target.value;
                           return data;
                       })}
                       disabled={!isUpdating}
                />
            </span>
            <input type={"button"} onClick={() => {
                createOrUpdateData(`/domains`, [data])
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
export default DomainModal;