import React, {Component} from 'react';
import Contact from "./Contact";
import gulp from "./../assets/icons/gulp.png"
import webpack from "./../assets/icons/webpack.png"
import css from "./../assets/icons/css.png"
import html from "./../assets/icons/html.png"
import git from "./../assets/icons/git.png"
import es6 from "./../assets/icons/es6.png"
import javascript from "./../assets/icons/javascript.png"
import jQuery from "./../assets/icons/jQuery.png"
import react from "./../assets/icons/react.png"
import sass from "./../assets/icons/sass.png"
import ubuntu from "./../assets/icons/ubuntu.png"
import babel from "./../assets/icons/babel.png"
import npm from "./../assets/icons/npm.png"
import firebase from "./../assets/icons/firebase.png"

class Skills extends Component {
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
                <section className={`skills background ${this.state.clicked && "back_to_home"}`}>
                    <div className='fadeIn_background skills_section'>
                        <h2>Skills</h2>
                        <div className='skills_section_images'>
                            <div className='skills_section_images_titles'>
                                <h3>Front End</h3>
                                <h3>Back End</h3>
                                <h3>Tools/other</h3>
                            </div>
                            <div className='skills_section_images_tools'>
                                <div className='skills_section_images_tools_single'>
                                    <img src={css} alt='css'/>
                                    <img src={html} alt='html'/>
                                    <img src={es6} alt='es6'/>
                                    <img src={sass} alt='sass'/>
                                    <img src={javascript} alt='javascript'/>
                                    <img src={jQuery} alt='jQuery'/>
                                    <img src={react} alt='react'/>
                                </div>
                                <div className='skills_section_images_tools_single'>
                                    <img src={firebase} alt='firebase'/>
                                </div>
                                <div className='skills_section_images_tools_single'>
                                    <img src={git} alt='git'/>
                                    <img src={ubuntu} alt='ubuntu'/>
                                    <img src={gulp} alt='gulp'/>
                                    <img src={webpack} alt='webpack'/>
                                    <img src={babel} alt='babel'/>
                                    <img src={npm} alt='npm'/>
                                </div>
                            </div>
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

export default Skills;