import React, {Dispatch, SetStateAction} from "react";
import {Appliance} from "../../../Types/Appliance";
import {createOrUpdateData} from "../../../../Providers/dataProvider";
import {getUserId} from "../../../../Providers/userDetailsProvider";

const ApplianceList: React.FC<{
    appliances: Appliance[],
    setAppliance: Dispatch<SetStateAction<Appliance>>,
    setIsShown: Dispatch<SetStateAction<boolean>>,
    readonly: boolean
}> = (props) => {
    const {appliances, setAppliance, setIsShown, readonly} = props;
    return (
        <>
            <thead>
            <tr>
                <th>id</th>
                <th>offer Id</th>
                <th>Offer Reference</th>
                <th>Sender Email</th>
                <th>Status</th>
                <th>Creation Instant</th>
            </tr>
            </thead>
            <tbody>
            {appliances.map((appliance) => (
                <tr key={appliance.id}>
                    <td onClick={() => {
                        setAppliance(appliance)
                        setIsShown(true);
                    }}>{appliance.id}</td>
                    <td>{appliance.offerId}</td>
                    <td>{appliance.offerRef}</td>
                    <td>{appliance.userEmail}</td>
                    <td>{appliance.status}</td>
                    <td>{appliance.creationInstant}</td>
                        <td>
                            <input type={"button"}
                                   onClick={() =>
                                       createOrUpdateData(`users/${getUserId()}/offers/${appliance.offerId}/appliances/${appliance.id}/act`, {status: "APPROVED"})
                                           .then(() => window.location.reload())
                                   }
                                   defaultValue={"accept"}
                                   disabled={readonly}/>
                            <input type={"button"}
                                   onClick={() =>
                                       createOrUpdateData(`users/${getUserId()}/offers/${appliance.offerId}/appliances/${appliance.id}/act`, {status: "REJECTED"})
                                           .then(() => window.location.reload())
                                   }
                                   defaultValue={"reject"}
                                   disabled={readonly}/>
                        </td>
                </tr>
            ))}
            </tbody>
        </>
    );
}
export default ApplianceList;