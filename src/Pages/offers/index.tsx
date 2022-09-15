import React, {useEffect, useState} from "react";
import List from "../../Common/Components/List";
import {Offer} from "../../Common/Types/Offer";
import {getData} from "../../Providers/dataProvider";
import OfferList from "../../Common/Components/List/Offer";
import {getLocalData} from "../../Providers/localStorageData";
import Modal from "../../Common/Components/Modal";
import OfferModal from "../../Common/Components/Modal/Offer";
import input from "../../Common/Components/Input";
import Body from "../../Common/Components/Body";

const Offers: React.FC = (props) => {
    const [offers, setOffers] = useState<Offer[]>([]);
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(25);
    const [filter, setFilter] = useState<string>("");
    const [isShown, setIsShown] = useState<boolean>(false);
    const [offer, setOffer] = useState<Offer>({} as Offer);
    useEffect(() => {
        getData(
            "/offers",
            {
                page: page,
                pageSize: pageSize,
                filter: filter
            }
        )
            .then(data => setOffers(data.data as Offer[]))
            .catch((error) => alert(error.message))
        ;
    }, [page, pageSize, filter])
    return (
        <Body children={
            <>
                {isShown && <Modal setIsShown={setIsShown} children={
                    <div className={"container"}>
                        <OfferModal offer={offer}/>
                    </div>
                }/>}
                <input
                    id={"choice__button"}
                    type={"button"}
                    defaultValue={"My Offers"}
                    onClick={() => setFilter((prevState) => {
                        if (prevState === getLocalData("email")) {
                            return "";
                        }
                        return getLocalData("email") as string;
                    })}
                />
                <List children={
                    <>
                        <input id={"add__button"} type={"button"} value={"add"} onClick={() => {
                            setOffer({} as Offer);
                            setIsShown(true)
                        }}/>
                        <OfferList offers={offers} setOffer={setOffer} setIsShown={setIsShown}/>
                    </>
                }
                      setPage={setPage}
                      setSize={setPageSize}
                      setFilter={setFilter}
                />
            </>
        }
        />
    )
}
export default Offers;