import React, {Component} from 'react';
import Contact from "../Contact/Contact";
import LanguageSelector from "../../language/LanguageSelector";
import {LanguageContext, Text} from "../../language/LanguageProvider";
import BackButton from './../BackButton/BackButton';
import PageButtons from './Buttons/PageButtons/PageButtons';
import BackToButton from './Buttons/BackToButton/BackToButton';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import ProjectList from './ProjectList/ProjectList';

class Projects extends Component {
    state = {
        currentPage: 1,
        projectsPerPage: 9,
        showCurrent: true,
        changedPage: false,
        activeProject: "",
        showProjectDetails: false,
        details: false,
    };

    static contextType = LanguageContext;

    changePage = (e, i) => {
        this.setState((prevState) => {
            return {
                changedPage: !prevState.changedPage,
            }
        });

        if(e.target.id === "next") {
            setTimeout(() => {
                this.setState({
                    currentPage: i + 1,
                    changedPage: false,
                })
            },700)
        } else {
            setTimeout(() => {
                this.setState({
                    currentPage: i - 1,
                    changedPage: false,
                })
            },700)
        }
    }

    backToProjects = () => {
        this.setState((prevState) => {
            return {
                details: !prevState.details,
            }
        })

        setTimeout(() => {
            this.setState((prevState) => {
                return {
                    showProjectDetails: !prevState.showProjectDetails,
                }
            })
        },700)
    };

    handleShowProjectDetails = (e) => {
        this.setState((prevState) => {
            return {
                changedPage: !prevState.changedPage,
            }
        });

        (this.state.currentPage === 1) ?
            this.setState({
                activeProject: e.target.id,
            })
            :
            this.setState({
                activeProject: parseInt(e.target.id) + 9,
            });

        setTimeout(() => {
            this.setState((prevState) => {
                return {
                    changedPage: !prevState.changedPage,
                    showProjectDetails: !prevState.showProjectDetails,
                    details: !prevState.details,
                }
            })
        },700)
    };

    render() {
        const { showProjectDetails, changedPage, projectsPerPage, currentPage, activeProject, details } = this.state;
        const { hovered, clicked, hoverBack, goHome, width } = this.props;


        let buttonList;
        showProjectDetails ?
            buttonList = <BackToButton changePage={changedPage} clicked={clicked} back={this.backToProjects}/>
            :
            buttonList = <PageButtons change={this.changePage} clicked={clicked} projectsPerPage={projectsPerPage}
                                      currentPage={currentPage} changePage={changedPage} width={width}/>;

        let projectsList;
        showProjectDetails ?
            projectsList = <ProjectDetails activeProject={activeProject} details={details}
                                           context={this.context.language.id}/>
            :
            projectsList = <ProjectList currentPage={currentPage} projectsPerPage={projectsPerPage}
                                        changedPage={changedPage} width={width} showDetails={this.handleShowProjectDetails}/>;

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

                    <BackButton hovered={hovered} clicked={clicked} goHome={goHome} hover={hoverBack}/>

                </section>
            </>
        )
    }
}

export default Projects;