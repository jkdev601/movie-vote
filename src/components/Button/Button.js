import React from 'react';
import './Button.css';

const button = (props) => (
    <button className={["Button", [props.BtnType]].join(' ')}
            onClick={props.clicked}>{props.children}</button>
);

export default button;