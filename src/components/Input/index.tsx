import React, { InputHTMLAttributes } from 'react';

import InputStyle from './style';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    type: string;
}

const Input: React.FC<InputProps> = ({type, label, name, ...rest}) => {
    return (
        <InputStyle className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} {...rest}/>
        </InputStyle>
    )
}

export default Input;