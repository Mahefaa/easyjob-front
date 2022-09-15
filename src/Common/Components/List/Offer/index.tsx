import React, {Dispatch, SetStateAction} from "react";
import {Offer} from "../../../Types/Offer";
import {getData} from "../../../../Providers/dataProvider";
import {getLocalData} from "../../../../Providers/localStorageData";
import {getUserId} from "../../../../Providers/userDetailsProvider";
import './index.modules.css'
import {useNavigate} from "react-router-dom";

const OfferList: React.FC<{
    offers: Offer[],
    setOffer: Dispatch<SetStateAction<Offer>>,
    setIsShown: Dispatch<SetStateAction<boolean>>
}> = (props) => {
    const {offers, setOffer, setIsShown} = props;
    const navigate = useNavigate();
    return (
        <>
            <thead>
            <tr>
                <th>id</th>
                <th>STATUS</th>
                <th>domain</th>
                <th>mission</th>
                <th>position</th>
                <th>profile</th>
                <th>sender</th>
                <th>location</th>
            </tr>
            </thead>
            <tbody>
            {offers.map((offer) => (
                <tr key={offer.id}>
                    <td onClick={() => {
                        setOffer(offer)
                        setIsShown(true);
                    }}>{offer.id}</td>
                    <td>{offer.status}</td>
                    <td>{offer.domainName}</td>
                    <td>{offer.mission}</td>
                    <td>{offer.position}</td>
                    <td>{offer.profile}</td>
                    <td>{offer.senderEmail}</td>
                    <td>{offer.location}</td>
                    {offer.senderEmail === getLocalData("email") && <td>
                        <input
                            type={"button"}
                            defaultValue={"get appliances"}
                            onClick={() => {

                                navigate(`${offer.id}/appliances`)
                                }
                            }
                        />
                        <span>
                            <input
                                type={"button"}
                                onClick={() =>
                                    getData(`/users/${getUserId()}/offers/${offer.id}/close`)
                                        .then(() => setTimeout(() => window.location.reload(), 1000))
                                }
                                defaultValue={"close"}
                            />
                        </span>
                    </td>}
                </tr>
            ))}
            </tbody>
        </>
    )
}
export default OfferList;