import React from "react";

const backButton = (props) => (
    <div className={`go--back ${props.hovered ? "back" : "stay"} ${props.clicked ? "fade--out" : "fade--in"}`}
         onClick={props.goHome} onMouseEnter={props.hover} onMouseLeave={props.hover}>
        <span className={`${props.hovered ? "back"  : "stay"}`}></span>
    </div>
);

export default backButton;