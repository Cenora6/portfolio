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
import CV from "./CV";

class Skills extends Component {
    state = {
        back: false,
        clicked: false,
        tooltip: false,
        tooltipTitle: "",
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

    showTooltip = (e) => {
        this.setState({
            tooltip: !this.state.tooltip,
            tooltipTitle: e.currentTarget.id,
        });
    };

    hideToolTip = (e) => {
        this.setState({
            tooltip: !this.state.tooltip,
            tooltipTitle: "",
        });
    };

    render() {
        return (
            <>
                <Contact/>
                <section className={`skills background ${this.state.clicked && "back--to--home2"}`}>
                    <div className={`skills__section ${this.state.clicked ? "fade--out" : "fade--in"}`}>
                        <h2>Skills</h2>
                        <div className='skills__section__images'>
                            <div className='skills__section__images__tools'>
                                <h5>Front End</h5>
                                <article className='skills__section__images__tools__single'>
                                    <div className="tooltip" onMouseLeave={this.hideToolTip} onMouseEnter={this.showTooltip} id='css'>
                                        <img src={css} alt='css'/>
                                        <span className="tooltiptext" style={{opacity: `${this.state.tooltipTitle === "css" ? "0.5" : "0"}`}}>CSS3</span>
                                    </div>
                                    <div className="tooltip" onMouseLeave={this.hideToolTip} onMouseEnter={this.showTooltip} id='html'>
                                        <img src={html} alt='html'/>
                                        <span className="tooltiptext" style={{opacity: `${this.state.tooltipTitle === "html" ? "0.5" : "0"}`}}>HTML5</span>
                                    </div>
                                    <div className="tooltip" onMouseLeave={this.hideToolTip} onMouseEnter={this.showTooltip} id='es6'>
                                        <img src={es6} alt='es6'/>
                                        <span className="tooltiptext" style={{opacity: `${this.state.tooltipTitle === "es6" ? "0.5" : "0"}`}}>ES6</span>
                                    </div>
                                    <div className="tooltip" onMouseLeave={this.hideToolTip} onMouseEnter={this.showTooltip} id='sass'>
                                        <img src={sass} alt='sass'/>
                                        <span className="tooltiptext" style={{opacity: `${this.state.tooltipTitle === "sass" ? "0.5" : "0"}`}}>SASS</span>
                                    </div>
                                    <div className="tooltip" onMouseLeave={this.hideToolTip} onMouseEnter={this.showTooltip} id='javascript'>
                                        <img src={javascript} alt='javascript'/>
                                        <span className="tooltiptext" style={{opacity: `${this.state.tooltipTitle === "javascript" ? "0.5" : "0"}`}}>JavaScript</span>
                                    </div>
                                    <div className="tooltip" onMouseLeave={this.hideToolTip} onMouseEnter={this.showTooltip} id='react'>
                                        <img src={react} alt='react'/>
                                        <span className="tooltiptext" style={{opacity: `${this.state.tooltipTitle === "react" ? "0.5" : "0"}`}}>React</span>
                                    </div>
                                    <div className="tooltip" onMouseLeave={this.hideToolTip} onMouseEnter={this.showTooltip} id='jQuery'>
                                        <img src={jQuery} alt='jQuery'/>
                                        <span className="tooltiptext" style={{opacity: `${this.state.tooltipTitle === "jQuery" ? "0.5" : "0"}`}}>jQuery</span>
                                    </div>
                                </article>
                                <h5>Back End</h5>
                                <article className='skills__section__images__tools__single'>
                                    <div className="tooltip" onMouseLeave={this.hideToolTip} onMouseEnter={this.showTooltip} id='firebase'>
                                        <img src={firebase} alt='firebase'/>
                                        <span className="tooltiptext" style={{opacity: `${this.state.tooltipTitle === "firebase" ? "0.5" : "0"}`}}>Firebase</span>
                                    </div>
                                </article>
                                <h5>Tools/other</h5>
                                <article className='skills__section__images__tools__single'>
                                    <div className="tooltip" onMouseLeave={this.hideToolTip} onMouseEnter={this.showTooltip} id='git'>
                                        <img src={git} alt='git'/>
                                        <span className="tooltiptext" style={{opacity: `${this.state.tooltipTitle === "git" ? "0.5" : "0"}`}}>Git</span>
                                    </div>
                                    <div className="tooltip" onMouseLeave={this.hideToolTip} onMouseEnter={this.showTooltip} id='ubuntu'>
                                        <img src={ubuntu} alt='ubuntu'/>
                                        <span className="tooltiptext" style={{opacity: `${this.state.tooltipTitle === "ubuntu" ? "0.5" : "0"}`}}>Ubuntu</span>
                                    </div>
                                    <div className="tooltip" onMouseLeave={this.hideToolTip} onMouseEnter={this.showTooltip} id='gulp'>
                                        <img src={gulp} alt='gulp'/>
                                        <span className="tooltiptext" style={{opacity: `${this.state.tooltipTitle === "gulp" ? "0.5" : "0"}`}}>Gulp</span>
                                    </div>
                                    <div className="tooltip" onMouseLeave={this.hideToolTip} onMouseEnter={this.showTooltip} id='webpack'>
                                        <img src={webpack} alt='webpack'/>
                                        <span className="tooltiptext" style={{opacity: `${this.state.tooltipTitle === "webpack" ? "0.5" : "0"}`}}>Webpack</span>
                                    </div>
                                    <div className="tooltip" onMouseLeave={this.hideToolTip} onMouseEnter={this.showTooltip} id='babel'>
                                        <img src={babel} alt='babel'/>
                                        <span className="tooltiptext" style={{opacity: `${this.state.tooltipTitle === "babel" ? "0.5" : "0"}`}}>Babel</span>
                                    </div>
                                    <div className="tooltip" onMouseLeave={this.hideToolTip} onMouseEnter={this.showTooltip} id='npm'>
                                        <img src={npm} alt='npm' style={{height: "3rem"}}/>
                                        <span className="tooltiptext" style={{opacity: `${this.state.tooltipTitle === "npm" ? "0.5" : "0"}`}}>Npm</span>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className={`go--back ${this.state.back ? "back"  : "stay"}  ${this.state.clicked ? "fade--out" : "fade--in"}`}
                         onClick={this.goHome} onMouseEnter={this.goBack} onMouseLeave={this.goBack}>
                        <span className={`${this.state.back ? "back"  : "stay"}`}></span>
                    </div>
                </section>
                <CV/>
            </>
        )
    }
}

export default Skills;