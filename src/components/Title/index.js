import React from 'react';
import "./style.scss";

export default function Title({ head, title }) {
    const headLevel = {
    h1: <h1>{title}</h1>,
    h2: <h2>{title}</h2>,
    h3: <h3>{title}</h3>,
    h4: <h4>{title}</h4>,
    h5: <h5>{title}</h5>,
    h6: <h6>{title}</h6>,
    }
    return headLevel[head]
}