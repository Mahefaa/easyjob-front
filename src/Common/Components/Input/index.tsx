import React from "react";
import "./index.modules.css";
const Input: React.FC<{
    className?: string,
    id: string,
    label?: string,
    inputClassName?:string,
    value: string,
    type: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    disabled: boolean,
    onClick?: React.MouseEventHandler<HTMLInputElement>
}>
    = (props) => {
    const {className,inputClassName, disabled, id, label, onChange, type, onClick, value} = props;
    return (
        <span className={className}>
            <label htmlFor={id} className={"label"} aria-details={value}>{label}</label>
            <input
                className={inputClassName}
                value={value}
                type={type}
                id={id}
                placeholder={" "}
                onChange={onChange}
                onClick={onClick}
                disabled={disabled}
            />
        </span>
    );
}
export default Input;