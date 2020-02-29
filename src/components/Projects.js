import React, {Component} from 'react';
import Contact from "./Contact";
import project1 from "./../assets/projects/project1.png";
import project2 from "./../assets/projects/project2.png";
import project3 from "./../assets/projects/project3.png";
import project4 from "./../assets/projects/project4.png";
import project5 from "./../assets/projects/project5.png";
import project6 from "./../assets/projects/project6.png";
import project7 from "./../assets/projects/project7.png";
import project8 from "./../assets/projects/project8.png";
import project9 from "./../assets/projects/project9.png";
import project10 from "./../assets/projects/project10.png";
import project11 from "./../assets/projects/project11.png";
import project12 from "./../assets/projects/project12.png";

const projects = {
    link: [
        project1,
        project2,
        project3,
        project4,
        project5,
        project6,
        project7,
        project8,
        project9,
        project10,
        project11,
        project12
    ],
};

class Projects extends Component {
    state = {
        currentPage: 1,
        projectsPerPage: 9,
        back: false,
        clicked: false,
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
            })
            :
            this.setState({
                currentPage: i,
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

    buildList = () => {

        const {currentPage, projectsPerPage} = this.state;
        let itemArray;
        itemArray = projects.link;

        const indexLast = currentPage * projectsPerPage;
        const indexFirst = indexLast - projectsPerPage;
        const visibleProjects = itemArray.slice(indexFirst, indexLast);

        return (
            <>
                {visibleProjects.map( (project) => {
                    return (
                        <img className='projects_images_single' src={project} alt="projects"/>
                    )
                })}
            </>
        );
    };

    render() {

        let buttonList;
        buttonList = this.showButtons();

        let projectsList;
        projectsList = this.buildList();

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