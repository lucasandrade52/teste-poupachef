import React from 'react';
import "./style.scss";

export default function Input(props) {
    const { type, id, name, placeholder, disabled, onChange, }  = props;
    
    return (
    <input 
        type={type} 
        id={id} 
        name={name} 
        placeholder={placeholder} 
        disabled={disabled} 
        onChange={onChange}
    />
    )
}