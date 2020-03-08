import React, {Component} from 'react';
import Contact from "./Contact";
import { projects, projectsDetails_pl, projectsDetails_en } from "./../database/projects"
import CV from "./CV";
import LanguageSelector from "../language/LanguageSelector";
import {LanguageContext, Text} from "./../language/LanguageProvider"

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
        width: window.innerWidth,
    };

    static contextType = LanguageContext;

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({
            width: window.innerWidth
        });
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
        const { changePage } = this.state;
        this.setState({
            changePage: !changePage,
        });

        setTimeout(() => {
            this.setState({
                currentPage: i + 1,
                changePage: false,
            })
        },700)
    };

    previousPage = (e, i) => {
        const { changePage } = this.state;
        this.setState({
            changePage: !changePage,
        });

        setTimeout(() => {
            this.setState({
                currentPage: i - 1,
                changePage: false,
            })
        },700)
    };

    backToProjects = () => {
        const { details, showProjectDetails } = this.state;
        this.setState({
            details: !details,
        });

        setTimeout(() => {
            this.setState({
                showProjectDetails: !showProjectDetails,
            });
        },700)
    };

    showButtons = () => {
        const { projectsPerPage, currentPage, clicked, changePage } = this.state;

        let projectsNumber;
        if(this.state.width < 768) {
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
                        <i className="fas fa-angle-left " onClick={ (e) => this.previousPage(e, i)}
                           style={previousButtonStyle}></i>
                        <button className={`${currentPage === i ? "projects__buttons--active" : ""}`}>{i}</button>
                        <i className="fas fa-angle-right" onClick={ (e) => this.nextPage(e, i)}
                           style={nextButtonStyle}></i>
                        <span className='projects__buttons__big'></span>
                        <span className='projects__buttons__small'></span>
                    </div>
                )
            )
        }
        return buttons;
    };

    backButtons = () => {
        const { clicked, changePage } = this.state;
        return (
            <div className={`projects__buttons ${changePage ? "fade--out" : "fade--in"}
            ${clicked ? "fade--out" : "fade--in"} `} >
                <span className='projects__buttons__small'></span>
                <span className='projects__buttons__big'></span>
                <button className={`back projects__buttons--active`}
                        onClick={this.backToProjects}><Text tid='projects2'/></button>
                <span className='projects__buttons__big'></span>
                <span className='projects__buttons__small'></span>
            </div>
        )
    };

    showProjectDetails = (e) => {
        const { showProjectDetails, details, currentPage, changePage } = this.state;
        (currentPage === 1) ?
            this.setState({
                changePage: !changePage,
                activeProject: e.target.id,
            })
            :
            this.setState({
                changePage: !changePage,
                activeProject: parseInt(e.target.id) + 9,
            });

        setTimeout(() => {
            this.setState({
                changePage: false,
                showProjectDetails: !showProjectDetails,
                details: !details,
            });
        },700)
    };

    buildList = () => {

        const {currentPage, projectsPerPage, changePage} = this.state;

        let indexFirst;
        let indexLast;
        if(this.state.width < 768) {
            indexLast = currentPage * 4;
            indexFirst = indexLast - 4;
        } else {
            indexLast = currentPage * projectsPerPage;
            indexFirst = indexLast - projectsPerPage;
        }

        const visibleProjects = projects.link.slice(indexFirst, indexLast);

        return (
            <>
                {visibleProjects.map( (project, index) => {
                    return (
                        <img key={index} id={index} className={`projects__images__single 
                        ${changePage ? "projects__images--hide" : "projects__images--show"}`}
                             src={project} alt="projects"
                             onClick={(e) => this.showProjectDetails(e, index)}/>
                    )
                })}
            </>
        );
    };

    projectDetails = () => {
        const { activeProject, details } = this.state;

        let project;
        const language = this.context.language.id;
        if(language === "pl") {
            project = projectsDetails_pl[activeProject]
        } else {
            project = projectsDetails_en[activeProject]
        }

        return (
            <>
                <div className={`projects__images__details ${details ? "projects__images--show" : "projects__images--hide"}`}>
                    <div className='projects__images__details__photos'>
                        {project.image.map( (image, index) =>
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
                            {project.language.map( (language, index) =>
                                <img key={index} src={language} alt='project__language'/>)}
                        </p>
                    </div>
                </div>
                <div className={`projects__images__description ${details ? "projects__images--show" : "projects__images--hide"}`}>
                    <p>{project.description}</p>
                    <div className='projects__images__description__links'>
                        <button><a href={project.code}><Text tid='projects5'/></a></button>
                        <button><a href={project.live}><Text tid='projects6'/></a></button>
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
                <LanguageSelector/>
                <section className={`projects background ${clicked && "back--to--home3"}`}>
                    <h2 className={`${clicked ? "fade--out" : "fade--in"}`}><Text tid='projects1'/></h2>
                    <div className={`projects__images ${clicked ? "fade--out" : "fade--in"}`}>
                        {projectsList}
                    </div>
                    {buttonList}
                    <div className={`go--back ${hoverBackButton ? "back"  : "stay"} ${clicked ? "fade--out" : "fade--in"}`}
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