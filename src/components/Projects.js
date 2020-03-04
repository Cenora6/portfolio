import React, {Component} from 'react';
import Contact from "./Contact";
import { projects, projectsDetails } from "./../database/projects"
import CV from "./CV";

class Projects extends Component {
    state = {
        currentPage: 1,
        projectsPerPage: 9,
        hoverBackButton: false,
        clicked: false,
        showCurrent: true,
        changePage: false,
        activeProject: "",
        showProjectDetails: false,
        details: false,
    };

    goBack = () => {
        this.setState({
            hoverBackButton: !this.state.hoverBackButton,
        })
    };

    goHome = () => {
        this.setState({
            clicked: !this.state.clicked,
        });
        setTimeout(() => {
            this.props.history.push('/');
        },3000)
    };

    nextPage = (e, i) => {
        const { projectsPerPage } = this.state;
        const projectsNumber = Math.floor(projects.link.length / projectsPerPage);

        this.setState({
            changePage: !this.state.changePage,
        });

        (i <= projectsNumber) ?
            setTimeout(() => {
                this.setState({
                    currentPage: i + 1,
                    changePage: !this.state.changePage,
                })
            },700)
            :
            this.setState({
                currentPage: i,
            });
    };

    previousPage = (e, i) => {
        this.setState({
            changePage: !this.state.changePage,
        });

        (i > 1) ?
            setTimeout(() => {
                this.setState({
                    currentPage: i - 1,
                    changePage: !this.state.changePage,
                })
            },700)
            :
            this.setState({
                currentPage: i,
            });
    };

    backToProjects = () => {
        this.setState({
            details: !this.state.details,
        });

        setTimeout(() => {
            this.setState({
                showProjectDetails: !this.state.showProjectDetails,
            });
        },700)
    };

    showButtons = () => {
        const projectsNumber = Math.floor(projects.link.length / this.state.projectsPerPage);
        let buttons = [];
        for (let i = 1; i <= projectsNumber + 1; i++) {
            this.state.currentPage === i && (
                buttons.push (
                    <div key={i} className={`projects_buttons ${this.state.changePage ? "hide_buttons" : "show_buttons"} 
                     ${this.state.clicked ? "fade_out" : "fade_in"} `} >
                        <span className='projects_buttons_small'></span>
                        <span className='projects_buttons_big'></span>
                        <i className="fas fa-angle-left " onClick={ (e) => this.previousPage(e, i) }></i>
                        <button className={`buttons ${this.state.currentPage === i ? "active" : ""}`}>{i}</button>
                        <i className="fas fa-angle-right" onClick={ (e) => this.nextPage(e, i)}></i>
                        <span className='projects_buttons_big'></span>
                        <span className='projects_buttons_small'></span>
                    </div>
                )
            )
        }
        return buttons;
    };

    backButtons = () => {
        return (
            <div className={`projects_buttons ${this.state.changePage ? "hide_buttons" : "show_buttons"}
            ${this.state.clicked ? "fade_out" : "fade_in"} `} >
                <span className='projects_buttons_small'></span>
                <span className='projects_buttons_big'></span>
                <button className={`back active ${this.state.details ? "fade_in" : "fade_out"}`} onClick={this.backToProjects}>back</button>
                <span className='projects_buttons_big'></span>
                <span className='projects_buttons_small'></span>
            </div>
        )
    };

    showProjectDetails = (e) => {
        (this.state.currentPage === 1) ?
            this.setState({
                changePage: !this.state.changePage,
                activeProject: e.target.id,
            })
            :
            this.setState({
                changePage: !this.state.changePage,
                activeProject: parseInt(e.target.id) + 9,
            });

        setTimeout(() => {
            this.setState({
                changePage: !this.state.changePage,
                showProjectDetails: !this.state.showProjectDetails,
                details: !this.state.details,
            });
        },700)
    };

    buildList = () => {

        const {currentPage, projectsPerPage, changePage} = this.state;

        const indexLast = currentPage * projectsPerPage;
        const indexFirst = indexLast - projectsPerPage;
        const visibleProjects = projects.link.slice(indexFirst, indexLast);

        return (
            <>
                {visibleProjects.map( (project, index) => {
                    return (
                        <img key={index} id={index} className={`projects_images_single ${changePage ? "hiddenPage" : "shownPage"}`} src={project} alt="projects"
                             onClick={(e) => this.showProjectDetails(e, index)}/>
                    )
                })}
            </>
        );
    };

    projectDetails = () => {
        console.log(this.state.showProjectDetails)
        const { activeProject, details } = this.state;
        const project = projectsDetails[activeProject];
        return (
            <>
                <div className={`projects_images_details ${details ? "shownPage" : "hiddenPage"}`}>
                    <div className='projects_images_details_photos'>
                        {project.image.map( (image, index) => <img key={index} src={image} alt='project_photo'/>)}
                    </div>
                    <div className='projects_images_details_text'>
                        <p>
                            <i className="fas fa-check"></i>
                            <span className='decorative'> Used: </span> {project.details}
                        </p>
                        <p>
                            <i className="fas fa-check"></i>
                            <span className='decorative'> Language: </span>
                            {project.language.map( (language, index) => <img key={index} src={language} alt='project_language'/>)}
                        </p>
                    </div>
                </div>
                <div className={`projects_images_description ${details ? "shownPage" : "hiddenPage"}`}>
                    <p>{project.description}</p>
                    <div className='projects_images_description_links'>
                        <button><a href={project.code}>Code</a></button>
                        <button><a href={project.live}>Live</a></button>
                    </div>
                </div>
            </>
        );

    };

    render() {
        const { showProjectDetails, clicked, hoverBackButton } = this.state;

        let buttonList;
        showProjectDetails ? buttonList = this.backButtons() : buttonList = this.showButtons();
        let projectsList;
        showProjectDetails ? projectsList = this.projectDetails() : projectsList = this.buildList();
        return (
            <>
                <Contact/>
                <section className={`projects background ${clicked && "back_to_home3"}`}>
                    <h2 className={`${clicked ? "fade_in" : "fade_out"}`}>Projects</h2>
                    <div className={`projects_images ${clicked ? "fade_out" : "fade_in"}`}>
                        {projectsList}
                    </div>
                    {buttonList}
                    <div className={`go_back ${hoverBackButton ? "back"  : "stay"} ${clicked ? "fade_out" : "fade_in"}`}
                         onClick={this.goHome} onMouseEnter={this.goBack} onMouseLeave={this.goBack}>
                        <span className={`${hoverBackButton ? "back"  : "stay"}`}></span>
                    </div>
                </section>
                <CV/>
            </>
        )
    }
}

export default Projects;