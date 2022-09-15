import React, {Dispatch, SetStateAction} from "react";
import './index.modules.css'

const Modal: React.FC<{
    children: React.ReactNode,
    setIsShown: Dispatch<SetStateAction<boolean>>
}> = (props) => {
    const {children, setIsShown} = props;
    let onClick = () => {
        setIsShown(false);
        window.removeEventListener("click", onClick);
    }
    return (
        <div className={"touchable"} onMouseLeave={() => {
            window.addEventListener("click", onClick);
        }}
             onMouseEnter={() => {
                 window.removeEventListener("click", onClick);
             }}
        >
            <form id={"formID"}>
                {children}
            </form>

        </div>
    )
}
export default Modal;