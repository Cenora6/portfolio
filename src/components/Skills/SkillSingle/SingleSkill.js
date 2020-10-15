import React from "react";

const singleSkill = (props) => (
    <div className="tooltip" onMouseLeave={props.hide} onMouseEnter={props.show} id={props.icon}>
        <img src={props.image} alt={props.icon}/>
        <span className="tooltiptext" style={{opacity: `${props.title === props.icon ? "0.5" : "0"}`}}>
            {props.name}
        </span>
    </div>
);

export default singleSkill;