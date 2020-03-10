import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import Contact from "./Contact";
import LanguageSelector from "../language/LanguageSelector";
import {Text} from "./../language/LanguageProvider"

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
                <LanguageSelector/>
                <section className='header'>
                    <div className='header__background'>
                        <div className={`header__title ${(clicked1 || clicked2 || clicked3) ? "fade--out" : "fade--in"}`}>
                            <h1>Aleksandra Gasidło</h1>
                            <p>
                                <i className="fas fa-vial"></i> <Text tid="home1"/>.
                            </p>
                            <p>
                                <i className="fas fa-code"></i> Front-end Developer.
                            </p>
                        </div>
                        <div className={`header__links ${(clicked1 || clicked2 || clicked3) ? "fade--out" : "fade--in"}`}>
                            <ul className='header__links__list'>
                                <li className={`header__links__list__single first__box ${link === "about" && hoverSection ? "hover" : "hidden"}`}
                                    id='about' onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.goToAboutMe}>
                                    <span><Text tid="home2"/></span>
                                </li>
                                <li className={`header__links__list__single second__box ${link === "skills" && hoverSection ? "hover" : "hidden"}`}
                                    id='skills' onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.goToSkills}>
                                    <span><Text tid="home3"/></span>
                                </li>
                                <li className={`header__links__list__single ${link === "projects" && hoverSection ? "hover" : "hidden"}`}
                                    id='projects' onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.goToProjects}>
                                    <span><Text tid="home4"/></span>
                                </li>
                            </ul>
                        </div>
                        <div className={`transition1 ${clicked1 && "show"}`}></div>
                        <div className={`transition2 ${clicked2 && "show"}`}></div>
                        <div className={`transition3 ${clicked3 && "show"}`}></div>
                    </div>
                </section>
            </>
        );
    }
}

export default withRouter(Home);