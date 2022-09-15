import React, {useEffect, useState} from "react";
import {Appliance} from "../../../Types/Appliance";
import {createOrUpdateData, getData} from "../../../../Providers/dataProvider";
import {Offer} from "../../../Types/Offer";
import {getUserId} from "../../../../Providers/userDetailsProvider";

const ApplianceModal: React.FC<{ appliance: Appliance }> = (props) => {
    const [data, setData] = useState<Appliance>(props.appliance);
    const [offerIds, setOfferIds] = useState<number[]>([]);
    useEffect(() => {
        getData("/offers", {
            page: 1,
            pageSize: 500,
            filter: "AVAILABLE"
        }).then((data) => {
            setOfferIds(data.data.map((offer: Offer) => offer.id))
        });
    }, [])
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
                <p>AVAILABLE OFFER IDS</p>
                <p>{offerIds.join(",").toString()}</p>
            </span>
            <span>
                <p>Appliance ID</p>
                <input type={"number"}
                       defaultValue={data.id}
                       onChange={(event) => setData(() => {
                           if (offerIds.includes(Number(event.target.value)))
                               data.id = parseInt(event.target.value)
                           return data;
                       })}
                       disabled={true}
                />
            </span>
            <span>
                <p>Offer ID</p>
                <input type={"number"} defaultValue={data.offerId}
                       onChange={(event) => setData(() => {
                           data.offerId = parseInt(event.target.value);
                           return data;
                       })}
                       disabled={!isUpdating}
                />
            </span>
            <input type={"button"} onClick={() => {
                if (offerIds.includes(data.offerId)) {
                    createOrUpdateData(`/users/${getUserId()}/appliances`, data)
                        .then(() => {
                            setStatus("success");
                            setMessage("Saving Changes ... please wait");
                            setTimeout(() => window.location.reload(), 1500)
                        })
                        .catch((error) => {
                            setStatus("error");
                            setMessage(error.message)
                        })
                } else {
                    alert("verify offer ID")
                }
            }
            }
                   defaultValue={"create"}
            />
        </>
    );
}
export default ApplianceModal;
