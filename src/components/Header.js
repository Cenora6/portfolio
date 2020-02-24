import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class Header extends Component {
    state = {
        hover: false,
        link: "",
        clicked1: false,
        clicked2: false,
        clicked3: false,
    };

    toggleHover = (e) => {
        this.setState({
            hover: !this.state.hover,
            link: e.target.id,
        })
    };

    goToAboutMe = (e) => {
        this.setState({
            link: "",
            clicked1: !this.state.clicked1,
        });
        e.preventDefault();
        setTimeout(() => {
            this.props.history.push('/about')
        },5000)
    };

    render() {
        return (
            <section className='header'>
                <div className={`transition ${(this.state.clicked1 || this.state.clicked2 || this.state.clicked3) && "show"}`}></div>
                <div className={`header_title ${(this.state.clicked1 || this.state.clicked2 || this.state.clicked3) && "hide"}`}>
                    <h1>Aleksandra Gasidlo</h1>
                    <p>
                        <i className="fas fa-vial"></i> Medical Laboratory Scientist.
                    </p>
                    <p>
                        <i className="fas fa-code"></i> Front-end Developer.
                    </p>
                </div>
                <div className={`header_links ${(this.state.clicked1 || this.state.clicked2 || this.state.clicked3) && "hide"}`}>
                    <ul className='header_links_list'>
                        <li className={`header_links_list_single ${this.state.link === "about" && this.state.hover ? "hover" : "hidden"}`}
                            id='about' onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.goToAboutMe}>
                            <span>About Me</span>
                        </li>
                        <li className={`header_links_list_single ${this.state.link === "skills" && this.state.hover ? "hover" : "hidden"}`}
                            id='skills' onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                            <span>My Skills</span>
                        </li>
                        <li className={`header_links_list_single ${this.state.link === "projects" && this.state.hover ? "hover" : "hidden"}`}
                            id='projects' onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                            <span>My Projects</span>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default withRouter(Header);