import React from 'react';
import "./style.scss"

export default function Form({ handleSubmit, children }) {
  return (
    <form onSubmit={handleSubmit}>
      {children}
    </form>
    )
}