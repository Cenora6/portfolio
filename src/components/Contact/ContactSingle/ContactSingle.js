import React from "react";

const contactSingle = (props) => (
    <span className={`contact__circles__single ${props.name}`}>
        <a target="_blank" rel="noopener noreferrer" href={props.link}>
            {props.children}
        </a>
    </span>
);

export default contactSingle;