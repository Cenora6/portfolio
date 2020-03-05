import React, {Component} from 'react';
import Contact from "./Contact";
import CV from "./CV";
import selfPhoto from "./../assets/photo.png";
import border from "./../assets/border.png";

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
                    <div className={`background ${this.state.clicked && "back--to--home1"}`}>
                        <div className={`about__title ${this.state.clicked ? "fade--out" : "fade--in"}`}>
                            <div className='about__title__name'>
                                <h1>Hello!</h1>
                                <h2>I'm Aleksandra Gasidlo</h2>
                                <p>
                                    A<span className='decorative'> frontend developer </span>and
                                    <span className='decorative'> medical laboratory scientist </span>
                                </p>
                            </div>
                            <div className='about__title__image'>
                                <span className='about__title__image__shape first'></span>
                                <span className='about__title__image__shape second'></span>
                                <span className='about__title__image__shape third'></span>
                                <img src={border} alt='border'/>
                                <img src={selfPhoto} alt='self__photo'/>
                            </div>
                        </div>
                        <div className={`about__description ${this.state.clicked ? "fade--out" : "fade--in"}`}>
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
                    <div className={`go--back ${this.state.back ? "back" : "stay"} ${this.state.clicked ? "fade--out" : "fade--in"}`}
                         onClick={this.goHome} onMouseEnter={this.goBack} onMouseLeave={this.goBack}>
                        <span className={`${this.state.back ? "back"  : "stay"}`}></span>
                    </div>
                </section>
                <CV/>
            </>
        )
    }
}

export default About;