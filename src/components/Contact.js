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
        const { hoverNavigation } = this.state;
        return (
            <div className='contact'>
                <div className={`contact__circles ${hoverNavigation ? "show--navigation" : "hide--navigation"}`}
                     onMouseEnter={this.toggleNavigation} onMouseLeave={this.toggleNavigation} onClick={this.hoverNavigation}>
                        <span className='contact__circles__main home'>
                            <i className="far fa-address-book"></i>
                        </span>
                        <span className="contact__circles__single linkedin">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/aleksandra-gasidlo/">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </span>
                        <span className="contact__circles__single facebook">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Cenora06/">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </span>
                        <span className="contact__circles__single github">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Cenora6/">
                                <i className="fab fa-github"></i>
                            </a>
                        </span>
                        <span className="contact__circles__single email">
                            <a target="_blank" rel="noopener noreferrer" href="mailto:aleksandra.gasidlo@gmail.com">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </span>
                        <span className="contact__circles__single instagram">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/wonthirst/">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </span>
                </div>
            </div>
        )
    }
}

export default Contact;