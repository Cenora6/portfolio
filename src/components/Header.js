import React, {Component} from 'react';

class Header extends Component {
    state = {
        hover: false,
        link: "",
    };

    toggleHover = (e) => {
        this.setState({
            hover: !this.state.hover,
            link: e.target.id,
        })
    };

    render() {
        console.log(this.state.link, this.state.hover)

        return (
            <section className='header'>
                <div className='header_title'>
                    <h1>Aleksandra Gasidlo</h1>
                    <p>
                        <i className="fas fa-vial"></i> Medical Laboratory Scientist.
                    </p>
                    <p>
                        <i className="fas fa-code"></i> Front-end Developer.
                    </p>
                </div>
                <div className='header_links'>
                    <ul className='header_links_list'>
                        <li className={`header_links_list_single ${this.state.link === "about" && this.state.hover ? "hover" : "hidden"}`}
                            id='about' onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
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

export default Header;