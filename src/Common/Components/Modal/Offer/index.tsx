import React, {useState} from "react";
import {Offer} from "../../../Types/Offer";
import './index.modules.css'
import {createOrUpdateData} from "../../../../Providers/dataProvider";
import {getUserId} from "../../../../Providers/userDetailsProvider";

const OfferModal: React.FC<{
    offer: Offer
}> = (props) => {
    const {offer} = props;
    const [data, setData] = useState<Offer>(offer);
    const [message, setMessage] = useState<string>();
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    const [messageStatus,setStatus] = useState<string>("error")
    return (
        <div className={"inputs"}>
            <input type={"button"} value={`${isUpdating ? `modifying` : `modify`}`}
                   onClick={() => setIsUpdating((prevState) => !prevState)}
            />
            <span className={messageStatus}>
                {message}
            </span>
            <span>
                <p>ID</p>
                <input type={"number"}
                       disabled={true}
                       value={offer.id}
                />
            </span>
            <span>
                <p>Domain</p>
                <input
                    type={"text"}
                    onChange={(event) => setData((prevState) => {
                        prevState.domainName = event.target.value
                        return prevState;
                    })}
                    defaultValue={data.domainName}
                    disabled={!isUpdating}
                />
            </span>
            <span>
                <p>Mission</p>
                <input type={"text"}
                       onChange={(event) => setData((prevState) => {
                           prevState.mission = event.target.value
                           return prevState;
                       })}
                       defaultValue={offer.mission}
                       disabled={!isUpdating}
                />
            </span>
            <span>
                <p>Position</p>
                <input type={"text"}
                       onChange={(event) => setData((prevState) => {
                           prevState.position = event.target.value
                           return prevState;
                       })}
                       defaultValue={offer.position}
                       disabled={!isUpdating}
                />
            </span>
            <span>
                <p>Profile</p>
                <input type={"text"}
                       onChange={(event) => setData((prevState) => {
                           prevState.profile = event.target.value
                           return prevState;
                       })}
                       defaultValue={offer.profile}
                       disabled={!isUpdating}
                />
            </span>
            <span>
                <p>Location</p>
                <input type={"text"}
                       onChange={(event) => setData((prevState) => {
                           prevState.location = event.target.value
                           return prevState;
                       })}
                       defaultValue={offer.location}
                       disabled={!isUpdating}
                />
            </span>
            <span>
                <input
                    type={"button"}
                    defaultValue={"create"}
                    onClick={() =>
                        createOrUpdateData(`/users/${getUserId()}/offers`, [data])
                            .then(() => {
                                setStatus("success");
                                setMessage("Requesting Changes ... please wait");
                                setTimeout(() => window.location.reload(), 1500)
                            })
                            .catch((error) => {
                                setStatus("error");
                                setMessage(error.message)
                            })
                    }
                    disabled={!isUpdating}
                />
            </span>

        </div>
    )
}
export default OfferModal;