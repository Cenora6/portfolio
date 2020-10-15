import React from "react";
import {projectsDetails_en, projectsDetails_pl} from "../../../database/projects";
import {Text} from "../../../language/LanguageProvider";

const projectDetails = (props) => {
    const {activeProject, details} = props;

    let project;
    const language = props.context;
    if (language === "pl") {
        project = projectsDetails_pl[activeProject]
    } else {
        project = projectsDetails_en[activeProject]
    }

    return (
        <>
            <div
                className={`projects__images__details ${details ? "projects__images--show" : "projects__images--hide"}`}>
                <div className='projects__images__details__photos'>
                    {project.image.map((image, index) =>
                        <img key={index} src={image} alt='project__photo'/>)}
                </div>
                <div className='projects__images__details__text'>
                    <p>
                        <i className="fas fa-check"></i>
                        <span className='decorative'> <Text tid='projects3'/>: </span> {project.details}
                    </p>
                    <p>
                        <i className="fas fa-check"></i>
                        <span className='decorative'> <Text tid='projects4'/>: </span>
                        {project.language.map((language, index) =>
                            <img key={index} src={language} alt='project__language'/>)}
                    </p>
                </div>
            </div>
            <div
                className={`projects__images__description ${details ? "projects__images--show" : "projects__images--hide"}`}>
                <p>{project.description}</p>
                <div className='projects__images__description__links'>
                    <button><a href={project.code}><Text tid='projects5'/></a></button>
                    <button><a href={project.live}><Text tid='projects6'/></a></button>
                </div>
            </div>
        </>
    );
}

export default projectDetails;