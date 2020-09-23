import React from 'react';
import "./style.scss"

export default function Button(props) {
  const { type, id, disabled, onClick, className, text }  = props;
  
  return (
    <button
      type={type} 
      id={id} 
      disabled={disabled} 
      onClick={onClick}
      className={className}
    >{text}</button>
  )
}