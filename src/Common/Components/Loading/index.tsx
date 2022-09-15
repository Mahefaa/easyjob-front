import React from "react";
import './index.modules.css';
const Loading:React.FC<{hidden:boolean}> = (props) =>{
    return(
        <span className={"loading__container"} hidden={props.hidden}>
            <div className={"loading"}></div>
        </span>
    )
}
export default Loading;