import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import Contact from "./Contact";
import CV from "./CV";

class Home extends Component {
    state = {
        link: "",
        clicked1: false,
        clicked2: false,
        clicked3: false,
        hoverSection: false,
    };

    toggleHover = (e) => {
        this.setState({
            hoverSection: !this.state.hoverSection,
            link: e.currentTarget.id,
        });
    };

    goToAboutMe = (e) => {
        this.setState({
            link: "",
            clicked1: !this.state.clicked1,
        });
        e.preventDefault();
        setTimeout(() => {
            this.props.history.push('/about');
            this.setState({
                clicked1: !this.state.clicked1,
                link: "",
            })
        },3000)
    };

    goToSkills = (e) => {
        this.setState({
            link: "",
            clicked2: !this.state.clicked2,
        });
        e.preventDefault();
        setTimeout(() => {
            this.props.history.push('/skills');
            this.setState({
                clicked2: !this.state.clicked2,
                link: "",
            })
        },3000)
    };

    goToProjects = (e) => {
        this.setState({
            link: "",
            clicked3: !this.state.clicked3,
        });
        e.preventDefault();
        setTimeout(() => {
            this.props.history.push('/projects');
            this.setState({
                clicked3: !this.state.clicked3,
                link: "",
            })
        },3000)
    };

    render() {
        const { clicked1, clicked2, clicked3, link, hoverSection } = this.state;
        return (
            <>
                <Contact/>
                <section className='header'>
                    <div className='header__background'>
                        <div className={`header__title ${(clicked1 || clicked2 || clicked3) ? "fade--out" : "fade--in"}`}>
                            <h1>Aleksandra Gasidlo</h1>
                            <p>
                                <i className="fas fa-vial"></i> Medical Laboratory Scientist.
                            </p>
                            <p>
                                <i className="fas fa-code"></i> Front-end Developer.
                            </p>
                        </div>
                        <div className={`header__links ${(clicked1 || clicked2 || clicked3) ? "fade--out" : "fade--in"}`}>
                            <ul className='header__links__list'>
                                <li className={`header__links__list__single first__box ${link === "about" && hoverSection ? "hover" : "hidden"}`}
                                    id='about' onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.goToAboutMe}>
                                    <span>About Me</span>
                                </li>
                                <li className={`header__links__list__single second__box ${link === "skills" && hoverSection ? "hover" : "hidden"}`}
                                    id='skills' onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.goToSkills}>
                                    <span>My Skills</span>
                                </li>
                                <li className={`header__links__list__single ${link === "projects" && hoverSection ? "hover" : "hidden"}`}
                                    id='projects' onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.goToProjects}>
                                    <span>My Projects</span>
                                </li>
                            </ul>
                        </div>
                        <div className={`transition1 ${clicked1 && "show"}`}></div>
                        <div className={`transition2 ${clicked2 && "show"}`}></div>
                        <div className={`transition3 ${clicked3 && "show"}`}></div>
                    </div>
                </section>
                <CV/>
            </>
        );
    }
}

export default withRouter(Home);