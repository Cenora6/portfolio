import React from "react";
import {projects} from "../../../database/projects";

const projectList = (props) => {
    const {currentPage, projectsPerPage, changedPage, width, showDetails} = props;

    let indexFirst;
    let indexLast;
    if (width < 768) {
        indexLast = currentPage * 4;
        indexFirst = indexLast - 4;
    } else {
        indexLast = currentPage * projectsPerPage;
        indexFirst = indexLast - projectsPerPage;
    }

    const visibleProjects = projects.link.slice(indexFirst, indexLast);

    return (
        <>
            {visibleProjects.map((project, index) => {
                return (
                    <img key={index} id={index} className={`projects__images__single 
                        ${changedPage ? "projects__images--hide" : "projects__images--show"}`}
                         src={project} alt="projects"
                         onClick={(e) => showDetails(e, index)}/>
                )
            })}
        </>
    );
}

export default projectList;