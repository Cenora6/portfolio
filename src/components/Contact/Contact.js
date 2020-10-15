import React, {Component} from 'react';
import ContactSingle from './ContactSingle/ContactSingle';

class Contact extends Component {
    state = {
        hoverNavigation: false,
    };

    toggleNavigation = () => {
        this.setState((prevState) => {
            return {
                hoverNavigation: !prevState.hoverNavigation,
            }
        })
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

                    <ContactSingle name='linkedin' link='https://www.linkedin.com/in/aleksandra-gasidlo/'>
                        <i className="fab fa-linkedin-in"></i>
                    </ContactSingle>
                    <ContactSingle name='facebook' link='https://www.facebook.com/Cenora06/'>
                        <i className="fab fa-facebook"></i>
                    </ContactSingle>
                    <ContactSingle name='github' link='https://github.com/Cenora6/'>
                        <i className="fab fa-github"></i>
                    </ContactSingle>
                    <ContactSingle name='email' link='mailto:aleksandra.gasidlo@gmail.com'>
                        <i className="fas fa-envelope"></i>
                    </ContactSingle>
                    <ContactSingle name='instagram' link='https://www.instagram.com/wonthirst/'>
                        <i className="fab fa-instagram"></i>
                    </ContactSingle>

                </div>
            </div>
        )
    }
}

export default Contact;