import React, {Component} from 'react';
import Contact from "./Contact";
import { projects, projectsDetails } from "./../database/projects"

class Projects extends Component {
    state = {
        currentPage: 1,
        projectsPerPage: 9,
        back: false,
        clicked: false,
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
        this.setState({
            currentPage: i + 1,
        });
    };

    previousPage = (e, i) => {
        (i > 1) ?
            this.setState({
                currentPage: i - 1,
                changePage: !this.state.changePage,
            })
            :
            this.setState({
                currentPage: i,
                changePage: !this.state.changePage,
            });
    };

    backToProjects = () => {
        this.setState({
            activeProject: "",
            showProjectDetails: false,
        })
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
                activeProject: e.target.id,
                showProjectDetails: true,
            })
            :
            this.setState({
                activeProject: parseInt(e.target.id) + 9,
                showProjectDetails: true,
            })
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
                            <img key={index} id={index} className={`projects_images_single 
                            ${this.state.changePage ? "animated" : ""}`} src={project} alt="projects"
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
        console.log([...project.image]);
        return (
            <>
                <div className='projects_images_details'>
                    {project.image.length > 1 ?
                        <>
                            <img src={project.image[0]} alt='project_details'/>
                            <img src={project.image[1]} alt='project_details'/>
                        </>
                        :
                        <img src={project.image[0]} alt="images"/>
                    }
                    <p>{project.details}</p>
                </div>
                <p className='projects_images_description'>{project.description}</p>
            </>
        );

    };

    render() {
        let buttonList;
        this.state.showProjectDetails ? buttonList = this.backButtons() : buttonList = this.showButtons();
        let projectsList;
        this.state.showProjectDetails ? projectsList = this.projectDetails()  : projectsList = this.buildList();

        return (
            <>
                <Contact/>
                <section className={`projects background ${this.state.clicked && "back_to_home3"}`}>
                    <h2>Projects</h2>
                    <div className={`fadeIn_background projects_images ${this.state.clicked && "fadeOut_background"}`}>
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