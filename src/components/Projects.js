import React, {Component} from 'react';
import Contact from "./Contact";
import { projects, projectsDetails } from "./../database/projects"

class Projects extends Component {
    state = {
        currentPage: 1,
        projectsPerPage: 9,
        back: false,
        clicked: false,
        showCurrent: true,
        changePage: false,
        activeProject: "",
        showProjectDetails: false,
    };

    goBack = () => {
        this.setState({
            back: !this.state.back,
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
            showProjectDetails: false,
        });

        setTimeout(() => {
            this.setState({
                changePage: false,
                showProjectDetails: false
            });
        },700)
    };

    showButtons = () => {
        const projectsNumber = Math.floor(projects.link.length / this.state.projectsPerPage);
        let buttons = [];
        for (let i = 1; i <= projectsNumber + 1; i++) {
            this.state.currentPage === i && (
                buttons.push (
                    <>
                        <i className="fas fa-angle-left" onClick={ (e) => this.previousPage(e, i) }></i>
                        <button key={i} className={`buttons ${this.state.currentPage === i ? "active" : ""}`}>{i}</button>
                        <i className="fas fa-angle-right" onClick={ (e) => this.nextPage(e, i)}></i>
                    </>
                )
            )
        }
        return buttons;
    };

    backButtons = () => {
        return (
            <>
                <button className="back active" onClick={this.backToProjects}>back</button>
            </>
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
                showProjectDetails: !this.state.showProjectDetails
            });
        },700)
    };

    buildList = () => {

        const {currentPage, projectsPerPage} = this.state;
        let itemArray;
        itemArray = projects.link;

        const indexLast = currentPage * projectsPerPage;
        const indexFirst = indexLast - projectsPerPage;
        const visibleProjects = itemArray.slice(indexFirst, indexLast);

        return (
            <>
                {visibleProjects.map( (project, index) => {
                    return (
                        <>
                            <img key={index} id={index} className={`projects_images_single ${this.state.changePage ? "hiddenPage" : "shownPage"}`} src={project} alt="projects"
                                 onClick={(e) => this.showProjectDetails(e, index)}/>
                        </>
                    )
                })}
            </>
        );
    };

    projectDetails = () => {
        const { activeProject } = this.state;
        const project = projectsDetails[activeProject];
        return (
            <>
                <div className={`projects_images_details ${this.state.showProjectDetails ? "shownPage" : "hiddenPage"}`}>
                    {project.image.length > 1 ?
                        <div className='projects_images_details_photos'>
                            <img src={project.image[0]} alt='project_details'/>
                            <img src={project.image[1]} alt='project_details'/>
                        </div>
                        :
                        <div className='projects_images_details_photos'>
                            <img src={project.image[0]} alt="images"/>
                        </div>
                    }
                    <div className='projects_images_details_text'>
                        <p>
                            <i className="fas fa-check"></i>
                            <span className='decorative'> Used: </span> {project.details}
                        </p>
                        <p>
                            <i className="fas fa-check"></i>
                            <span className='decorative'> Language: </span>
                            {project.language.length > 1 ?
                                <>
                                    <img src={project.language[0]} alt='language'/>
                                    <img src={project.language[1]} alt='language'/>
                                </>
                                :
                                <img src={project.language} alt='language'/>
                            }
                        </p>
                    </div>
                </div>
                <div className={`projects_images_description ${this.state.showProjectDetails ? "shownPage" : "hiddenPage"}`}>
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
        let buttonList;
        this.state.showProjectDetails ? buttonList = this.backButtons() : buttonList = this.showButtons();
        let projectsList;
        this.state.showProjectDetails ? projectsList = this.projectDetails() : projectsList = this.buildList();
        return (
            <>
                <Contact/>
                <section className={`projects background ${this.state.clicked && "back_to_home3"}`}>
                    <h2 className={`${this.state.clicked && "fadeOut_background"}`}>Projects</h2>
                    <div className={`fadeIn_background projects_images ${this.state.clicked && "fadeOut_background"}
                    `}>
                        {projectsList}
                    </div>
                    <div className={`fadeIn_background projects_buttons ${this.state.clicked && "fadeOut_background"}`} >
                        <div className='projects_buttons_small'></div>
                        <div className='projects_buttons_big'></div>
                        {buttonList}
                        <div className='projects_buttons_big'></div>
                        <div className='projects_buttons_small'></div>
                    </div>
                    <div className={`fadeIn_background go_back ${this.state.back ? "back"  : "stay"} ${this.state.clicked && "fadeOut_background"}`}
                         onClick={this.goHome} onMouseEnter={this.goBack} onMouseLeave={this.goBack}>
                        <span className={`${this.state.back ? "back"  : "stay"}`}></span>
                    </div>
                </section>
            </>
        )
    }
}

export default Projects;