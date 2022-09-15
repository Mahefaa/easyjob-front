import React, {Dispatch, SetStateAction} from "react";
import {Domain} from "../../../Types/Domain";

const DomainList: React.FC<{
    domains:Domain[],
    setDomain:Dispatch<SetStateAction<Domain>>,
    setIsShown: Dispatch<SetStateAction<boolean>>,
    readonly : boolean
}> = (props) => {
    const {domains,setDomain,readonly,setIsShown} = props;
    return (
        <>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                {
                    domains.map((domain)=>(
                        <tr key={domain.id}>
                            <td onClick={()=> {
                                if(!readonly){
                                    setDomain(domain)
                                    setIsShown(true)
                                }
                            }} className={readonly?"readonly":""}>{domain.id}</td>
                            <td>{domain.name}</td>
                        </tr>
                    ))
                }
            </tbody>
        </>
    )
}
export default DomainList;