import React, {Component} from 'react';
import Contact from "./Contact";

class About extends Component {
    state = {
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

    render() {
        return (
            <>
                <Contact/>
                <section className='about'>
                    <div className={`background ${this.state.clicked && "back_to_home1"}`}>
                        <div className={`fadeIn_background about_title ${this.state.clicked && "fadeOut_background"}`}>
                            <div className='about_title_name'>
                                <h1>Hello!</h1>
                                <h2>I'm Aleksandra Gasidlo </h2>
                                <p>
                                    A<span className='decorative'> frontend developer </span>and
                                    <span className='decorative'> medical laboratory scientist </span>
                                </p>
                            </div>
                            <div className='about_title_image'>
                                <span className='about_title_image_shape first'></span>
                                <span className='about_title_image_shape second'></span>
                                <span className='about_title_image_shape third'></span>
                            </div>
                        </div>
                        <div className={`fadeIn_background about_description ${this.state.clicked && "fadeOut_background"}`}>
                            <p>
                                I've started<span className='decorative'> programming </span>recently and discovered
                                it's something I want to do for the rest of the life. Previously I was working as a
                                <span className='decorative' >medical laboratory scientist </span>in a laboratory at the
                                hospital.
                            </p>
                            <p>
                                Couple years ago my interest in <span className='decorative'> Korean culture </span>started
                                and that's how I ended up <span className='decorative'> learning Korean language </span>
                                by my own (I'm aiming to speak Korean fluently) and traveling to
                                <span className='decorative'> South Korea</span>.
                            </p>
                            <p>
                                In the free time I love playing <span className='decorative'> computer games </span> and
                                <span className='decorative'> visiting new countries (especially their zoos) </span>
                                since I love animals. This is why I love keeping an eye on my lovely pet - a
                                <span className='decorative'> snake named Freya </span>. I can't live without the
                                <span className='decorative'> music </span>.
                            </p>
                        </div>
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

export default About;