import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import Contact from "./Contact";

class Home extends Component {
    state = {
        hoverSection: false,
        link: "",
        clicked1: false,
        clicked2: false,
        clicked3: false,
    };

    toggleHover = (e) => {
        this.setState({
            hoverSection: !this.state.hoverSection,
            link: e.target.id,
        })
    };

    goToAboutMe = (e) => {
        this.setState({
            link: "",
            clicked1: true,
        });
        e.preventDefault();
        setTimeout(() => {
            this.props.history.push('/about');
            this.setState({
                clicked1: false,
                hoverSection: false,
                link: "",
            })
        },5000)
    };

    goToSkills = (e) => {
        this.setState({
            link: "",
            clicked2: true,
        });
        e.preventDefault();
        setTimeout(() => {
            this.props.history.push('/skills');
            this.setState({
                clicked2: false,
                hoverSection: false,
                link: "",
            })
        },5000)
    };

    goToProjects = (e) => {
        this.setState({
            link: "",
            clicked3: true,
        });
        e.preventDefault();
        setTimeout(() => {
            this.props.history.push('/projects');
            this.setState({
                clicked3: false,
                hoverSection: false,
                link: "",
            })
        },5000)
    };

    render() {
        return (
            <>
                <Contact/>
                <section className='header'>
                    <div className='header_background'>
                        <div className={`fadeIn_background header_title ${(this.state.clicked1 || this.state.clicked2 || this.state.clicked3) && "hide"}`}>
                            <h1>Aleksandra Gasidlo</h1>
                            <p>
                                <i className="fas fa-vial"></i> Medical Laboratory Scientist.
                            </p>
                            <p>
                                <i className="fas fa-code"></i> Front-end Developer.
                            </p>
                        </div>
                        <div className={`fadeIn_background header_links ${(this.state.clicked1 || this.state.clicked2 || this.state.clicked3) && "hide"}`}>
                            <ul className='header_links_list'>
                                <li className={`header_links_list_single first_box ${this.state.link === "about" && this.state.hoverSection ? "hover" : "hidden"}`}
                                    id='about' onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.goToAboutMe}>
                                    <span>About Me</span>
                                </li>
                                <li className={`header_links_list_single second_box ${this.state.link === "skills" && this.state.hoverSection ? "hover" : "hidden"}`}
                                    id='skills' onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.goToSkills}>
                                    <span>My Skills</span>
                                </li>
                                <li className={`header_links_list_single ${this.state.link === "projects" && this.state.hoverSection ? "hover" : "hidden"}`}
                                    id='projects' onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.goToProjects}>
                                    <span>My Projects</span>
                                </li>
                            </ul>
                        </div>
                        <div className={`transition1 ${this.state.clicked1 && "show"}`}></div>
                        <div className={`transition2 ${this.state.clicked2 && "show"}`}></div>
                        <div className={`transition3 ${this.state.clicked3 && "show"}`}></div>
                    </div>
                </section>
            </>
        );
    }
}

export default withRouter(Home);