import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import Contact from "../Contact/Contact";
import LanguageSelector from "../../language/LanguageSelector";
import {Text} from "../../language/LanguageProvider"
import HomeLink from './HomeLink/HomeLink';

class Home extends Component {
    state = {
        link: "",
        clicked1: false,
        clicked2: false,
        clicked3: false,
        hoverSection: false
    };

    toggleHoverLink = (e) => {
        this.setState((prevState) => {
            return {
                hoverSection: !prevState.hoverSection,
            }
        })
        this.setState({
            link: e.currentTarget.id,
        });
    };

    goToAboutMe = (e) => {
        this.setState({
            clicked1: true,
            link: ""
        });
        e.preventDefault();
        setTimeout(() => {
            this.props.history.push('/about');
            this.setState({
                clicked1: false,
            });
        },3000)
    };

    goToSkills = (e) => {
        this.setState({
            clicked2: true,
            link: ""
        });
        e.preventDefault();
        setTimeout(() => {
            this.props.history.push('/skills');
            this.setState({
                clicked2: false,
            });
        },3000)
    };

    goToProjects = (e) => {
        this.setState({
            clicked3: true,
            link: ""
        });
        e.preventDefault();
        setTimeout(() => {
            this.props.history.push('/projects');
            this.setState({
                clicked3: false,
            });
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

                                <HomeLink box='first__box' link={link} name='about' hovered={hoverSection}
                                hover={this.toggleHoverLink} clicked={this.goToAboutMe} title='home2'/>

                                <HomeLink box='second__box' link={link} name='skills' hovered={hoverSection}
                                hover={this.toggleHoverLink} clicked={this.goToSkills} title='home3'/>

                                <HomeLink box='third__box' link={link} name='projects' hovered={hoverSection}
                                hover={this.toggleHoverLink} clicked={this.goToProjects} title='home4'/>

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