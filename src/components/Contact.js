import React, {Component} from 'react';

class Contact extends Component {
    state = {
        hoverNavigation: false,
    };

    toggleNavigation = () => {
        this.setState({
            hoverNavigation: !this.state.hoverNavigation,
        });
    };

    render() {
        console.log(this.state.hoverNavigation);
        return (
            <div className='contact'>
                <div className={`contact_circles ${this.state.hoverNavigation ? "show_navigation" : "hide_navigation"}`}
                     onMouseEnter={this.toggleNavigation} onMouseLeave={this.toggleNavigation}>
                        <span className='contact_circles_main home'>
                            <i className="far fa-address-book"></i>
                        </span>
                        <span className="contact_circles_single linkedin">
                            <a href="https://www.linkedin.com/in/aleksandra-gasid%C5%82o-8b0338190/" className="menu-item">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </span>
                        <span className="contact_circles_single facebook">
                            <a href="https://www.facebook.com/Cenora06/" className="menu-item facebook">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </span>
                        <span className="contact_circles_single github">
                            <a href="https://github.com/Cenora6/" className=" menu-item github">
                                <i className="fab fa-github"></i>
                            </a>
                        </span>
                        <span className="contact_circles_single email">
                            <a href="mailto:aleksandra.gasidlo@gmail.com" className=" menu-item email">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </span>
                        <span className="contact_circles_single instagram">
                            <a href="https://www.instagram.com/wonthirst/" className=" menu-item instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </span>
                </div>
            </div>
        )
    }
}

export default Contact;