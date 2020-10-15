import React from "react";
import {projects} from "../../../../database/projects";

const pageButtons = (props) => {
    const { clicked, projectsPerPage, currentPage, changePage, width, change  } = props;

    let projectsNumber;
    if(width < 768) {
        projectsNumber = Math.ceil(projects.link.length / 4);
    } else {
        projectsNumber = Math.ceil(projects.link.length / projectsPerPage);
    }
    const previousButtonStyle = {
        display: currentPage === 1 && "none",
    };
    const nextButtonStyle = {
        display: currentPage === projectsNumber && "none",
    };

    let buttons = [];
    for (let i = 1; i <= projectsNumber + 1; i++) {
        currentPage === i && (
            buttons.push (
                <div key={i} className={`projects__buttons ${changePage ?  "fade--out" : "fade--in"} 
                     ${clicked ? "fade--out" : "fade--in"}`}>
                    <span className='projects__buttons__small'></span>
                    <span className='projects__buttons__big'></span>
                    <i id="previous" className="fas fa-angle-left " onClick={ (e) => change(e, i)}
                       style={previousButtonStyle}></i>
                    <button className={`${currentPage === i ? "projects__buttons--active" : ""}`}>{i}</button>
                    <i id="next" className="fas fa-angle-right" onClick={ (e) => change(e, i)}
                       style={nextButtonStyle}></i>
                    <span className='projects__buttons__big'></span>
                    <span className='projects__buttons__small'></span>
                </div>
            )
        )
    }
    return buttons;
}

export default pageButtons;