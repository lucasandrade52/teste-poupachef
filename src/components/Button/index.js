import React from "react";
import "./style.scss";

export default function Button(props) {
  const { type, id, disabled, onClick, className, children } = props;

  return (
    <button
      type={type}
      id={id}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}