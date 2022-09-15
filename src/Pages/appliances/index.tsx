import React, {useEffect, useState} from "react";
import axiosPromise from "../../Providers/axios";
import {Appliance} from '../../Common/Types/Appliance'
import {getAuthorization} from "../../Providers/authProvider";
import List from "../../Common/Components/List";
import ApplianceList from "../../Common/Components/List/Appliance";
import {getUserId, getUserRole} from "../../Providers/userDetailsProvider";
import Modal from "../../Common/Components/Modal";
import ApplianceModal from "../../Common/Components/Modal/Appliance";
import {useParams} from "react-router-dom";
import Body from "../../Common/Components/Body";
import {getData} from "../../Providers/dataProvider";

const Appliances: React.FC<{}> = (props) => {
    const [appliances, setAppliances] = useState<Appliance[]>([]);
    const [appliance, setAppliance] = useState<Appliance>({} as Appliance);
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(25);
    const [isShown, setIsShown] = useState<boolean>(false);
    const [domainName, setDomainName] = useState<string>("");
    const [status, setStatus] = useState<string>()
    const {offerId} = useParams();
    const readonly = getUserRole() !== 'ADMIN';
    const url: string = `users/${getUserId()}${offerId === undefined ? `` : `/offers/${offerId}`}/appliances`;
    useEffect(() => {
        getData(
            url,
        {
            page,
                pageSize,
                domainName,
                status
        }
        ).then((data) => setAppliances(data.data as Appliance[]))
            .catch((e) => alert(e.message))
    }, [page, pageSize, url, domainName, status])
    return (
            <Body children={
                <>
                    {isShown && <Modal setIsShown={setIsShown} children={
                        <div className={"container__modal"}>
                            <ApplianceModal appliance={appliance}/>
                        </div>
                    }/>}
                    <List
                        children={
                            <>
                                <tbody>
                                <tr>
                                    <td>
                                        <input id={"add__button"} type={"button"} value={"add"} onClick={() => {
                                            setAppliance({} as Appliance);
                                            setIsShown(true)
                                        }}/>
                                        <select onChange={(event) => setStatus(event.target.value)}>
                                            <option value={""}>ALL</option>
                                            <option value={"ONGOING"}>ONGOING</option>
                                            <option value={"APPROVED"}>APPROVED</option>
                                            <option value={"REJECTED"}>REJECTED</option>
                                        </select>
                                    </td>
                                </tr>
                                </tbody>
                                <ApplianceList readonly={readonly} appliances={appliances} setIsShown={setIsShown}
                                               setAppliance={setAppliance}/>
                            </>
                        }
                        setPage={setPage}
                        setSize={setPageSize}
                        setFilter={setDomainName}
                    />
                </>
            }/>
    )
}
export default Appliances;