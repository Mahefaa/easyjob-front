import React, {Dispatch, SetStateAction} from "react";
import Pagination from "../Pagination";
import './index.modules.css'
const List: React.FC<{
    setPage: Dispatch<SetStateAction<number>>,
    setSize: Dispatch<SetStateAction<number>>,
    children: React.ReactNode,
    setFilter:Dispatch<SetStateAction<string>>
}> = (props) => {
    const {children, setPage, setSize,setFilter} = props;
    return (
        <div className={"list__container"}>
            <span className={"pagination"}>
                <Pagination setPage={setPage} setSize={setSize}/>
                <input
                    type={"text"}
                    placeholder={"search . . ."}
                    onChange={(event) => setFilter(event.target.value)}
                    className={"search__bar"}
                />
            </span>
            <table className={"mainTable"}>
                {children}
            </table>
        </div>
    )
}
export default List;