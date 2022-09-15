import React, {Dispatch, SetStateAction} from "react";
import './index.modules.css'

const Pagination: React.FC<{ setPage: Dispatch<SetStateAction<number>>, setSize: Dispatch<SetStateAction<number>> }> = (props) => {
    const {setPage, setSize} = props;
    const pages: number[] = [];
    for (let i = 1; i <= 500; i++) {
        pages.push(i);
    }
    return (
        <>
            <select onChange={(event) => setSize(parseInt(event.target.value))}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
            </select>
            <span>
                <span></span>
                <input type={"number"} min={1} max={500} defaultValue={1}
                       onChange={(event) => setPage(event.target.valueAsNumber)}/>
                <span></span>
            </span>
        </>
    );
}
export default Pagination;