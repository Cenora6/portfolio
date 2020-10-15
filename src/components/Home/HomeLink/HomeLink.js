import React from "react";
import {Text} from "../../../language/LanguageProvider";

const homeLink = (props) => (
    <li className={`header__links__list__single ${props.box} ${props.link === props.name && props.hovered ? "hover" : "hidden"}`}
        id={props.name} onMouseEnter={props.hover} onMouseLeave={props.hover} onClick={props.clicked}>
        <span><Text tid={props.title}/></span>
    </li>
);

export default homeLink;