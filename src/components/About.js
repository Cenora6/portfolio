import React, {Component} from 'react';
import Contact from "./Contact";
import CV from "./CV";
import selfPhoto from "./../assets/photo.png";
import border from "./../assets/border.png";
import LanguageSelector from "../language/LanguageSelector";
import {Text} from "./../language/LanguageProvider"

class About extends Component {
    state = {
        back: false,
        clicked: false,
        width: window.innerWidth,
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({
            width: window.innerWidth
        });
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
        const { back, clicked, width } = this.state;
        return (
            <>
                <Contact/>
                <LanguageSelector/>
                <section className='about'>
                    <div className={`background ${clicked && "back--to--home1"}`}>
                        <div className={`about__title ${clicked ? "fade--out" : "fade--in"}`}>
                            <div className='about__title__name'>
                                <h1><Text tid="about1"/></h1>
                                <h2>Aleksandra Gasidło</h2>
                                {width < 768 ?
                                    <>
                                        <p>
                                            <span className='decorative'> <Text tid="about3"/> </span>
                                            <Text tid="about4"/>
                                        </p>
                                        <p>
                                            <span className='decorative'> <Text tid="about5"/> </span>
                                        </p>
                                    </>
                                    :
                                    <p>
                                        <span className='decorative'> <Text tid="about3"/> </span>
                                        <Text tid="about4"/>
                                        <span className='decorative'> <Text tid="about5"/> </span>
                                    </p>
                                }
                            </div>
                            <div className='about__title__image'>
                                <span className='about__title__image__shape first'></span>
                                <span className='about__title__image__shape second'></span>
                                <span className='about__title__image__shape third'></span>
                                <img src={border} alt='border'/>
                                <img src={selfPhoto} alt='self__photo'/>
                            </div>
                        </div>
                        <div className={`about__description ${clicked ? "fade--out" : "fade--in"}`}>
                            <p>
                                <Text tid="about6"/>
                                <span className='decorative'> <Text tid="about7"/> </span>
                                <Text tid="about8"/>
                                <span className='decorative'> <Text tid="about5"/> </span>
                                <Text tid="about9"/>
                            </p>
                            <p>
                                <Text tid="about10"/>
                                <span className='decorative'> <Text tid="about11"/></span>
                                <Text tid="about12"/>
                                <span className='decorative'> <Text tid="about13"/> </span>
                                <Text tid="about14"/>
                                <span className='decorative'> <Text tid="about15"/></span>
                            </p>
                            <p>
                                <Text tid="about16"/>
                                <span className='decorative'> <Text tid="about17"/> </span>
                                <Text tid="about4"/>
                                <span className='decorative'> <Text tid="about18"/> </span>
                                <Text tid="about19"/>
                                <span className='decorative'> <Text tid="about20"/> </span>
                                <Text tid="about21"/>
                                <span className='decorative'> <Text tid="about22"/> </span>
                            </p>
                        </div>
                    </div>
                    <div className={`go--back ${back ? "back" : "stay"} ${clicked ? "fade--out" : "fade--in"}`}
                         onClick={this.goHome} onMouseEnter={this.goBack} onMouseLeave={this.goBack}>
                        <span className={`${back ? "back"  : "stay"}`}></span>
                    </div>
                </section>
                <CV/>
            </>
        )
    }
}

export default About;