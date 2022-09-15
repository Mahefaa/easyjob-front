import React, {useEffect, useState} from "react";
import {getData} from "../../Providers/dataProvider";
import List from "../../Common/Components/List";
import DomainList from "../../Common/Components/List/Domain";
import {Domain} from "../../Common/Types/Domain";
import Modal from "../../Common/Components/Modal";
import DomainModal from "../../Common/Components/Modal/Domain";
import {getUserRole} from "../../Providers/userDetailsProvider";
import Body from "../../Common/Components/Body";

const Domains: React.FC = () => {
    const [domains, setDomains] = useState<Domain[]>([]);
    const [domain, setDomain] = useState<Domain>({} as Domain);
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(25);
    const [name, setName] = useState<string>("");
    const [isShown, setIsShown] = useState<boolean>(false);
    const readonly: boolean = getUserRole() !== "ADMIN";

    useEffect(() => {
        getData(
            "/domains",
            {
                page,
                pageSize,
                name
            }
        )
            .then(data => setDomains(data.data as Domain[]))
            .catch((error) => alert(error.message))
        ;
    }, [page, pageSize, name])
    return (
        <Body children={
            <>
                {isShown && <Modal
                    setIsShown={setIsShown}
                    children={
                        <DomainModal domain={domain}/>
                    }/>}
                <List children={
                    <>
                        <input id={"add__button"} type={"button"} value={"add"} onClick={() => {
                            setDomain({} as Domain);
                            setIsShown(true)
                        }} disabled={readonly}/>
                        <DomainList domains={domains} readonly={readonly} setDomain={setDomain}
                                    setIsShown={setIsShown}/>
                    </>
                }
                      setPage={setPage}
                      setSize={setPageSize}
                      setFilter={setName}
                />
            </>
        }
        />
    )
}
export default Domains;