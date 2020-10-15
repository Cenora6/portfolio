import React, {Component} from 'react';
import Contact from "../Contact/Contact";
import gulp from "../../assets/icons/gulp.png";
import webpack from "../../assets/icons/webpack.png";
import css from "../../assets/icons/css.png";
import html from "../../assets/icons/html.png";
import git from "../../assets/icons/git.png";
import es6 from "../../assets/icons/es6.png";
import javascript from "../../assets/icons/javascript.png";
import jQuery from "../../assets/icons/jQuery.png";
import react from "../../assets/icons/react.png";
import sass from "../../assets/icons/sass.png";
import ubuntu from "../../assets/icons/ubuntu.png";
import babel from "../../assets/icons/babel.png";
import npm from "../../assets/icons/npm.png";
import firebase from "../../assets/icons/firebase.png";
import trello from "../../assets/icons/trello.png";
import slack from "../../assets/icons/slack.png";
import typescript from "../../assets/icons/typescript.png";
import bootstrap from "../../assets/icons/bootstrap.png";
import redux from "../../assets/icons/redux.png";
import LanguageSelector from "../../language/LanguageSelector";
import {Text} from "../../language/LanguageProvider"
import SingleSkill from './SkillSingle/SingleSkill';
import BackButton from './../BackButton/BackButton';

class Skills extends Component {
    state = {
        tooltip: false,
        tooltipTitle: "",
    };

    showTooltip = (e) => {
        this.setState((prevState) => {
            return {
                tooltip: !prevState.tooltip,
            }
        })
        this.setState({
            tooltipTitle: e.currentTarget.id,
        })
    };

    hideToolTip = () => {
        this.setState((prevState) => {
            return {
                tooltip: !prevState.tooltip,
                tooltipTitle: "",
            }
        })
    };

    render() {
        const { tooltipTitle } = this.state;
        const { clicked, hovered, hoverBack, goHome } = this.props;

        return (
            <>
                <Contact/>
                <LanguageSelector/>
                <section className={`skills background ${clicked && "back--to--home2"}`}>
                    <div className={`skills__section ${clicked ? "fade--out" : "fade--in"}`}>
                        <h2><Text tid="skills1"/></h2>
                        <div className='skills__section__images'>
                            <div className='skills__section__images__tools'>

                                <h5>Front End</h5>
                                <article className='skills__section__images__tools__single'>

                                    <SingleSkill image={css} icon='css' name='CSS3' hide={this.hideToolTip}
                                                 show={this.showTooltip} title={tooltipTitle}/>
                                    <SingleSkill image={html} icon='html' name='HTML5' hide={this.hideToolTip}
                                                 show={this.showTooltip} title={tooltipTitle}/>
                                    <SingleSkill image={es6} icon='es6' name='ES6' hide={this.hideToolTip}
                                                 show={this.showTooltip} title={tooltipTitle}/>
                                    <SingleSkill image={sass} icon='sass' name='SASS' hide={this.hideToolTip}
                                                 show={this.showTooltip} title={tooltipTitle}/>
                                    <SingleSkill image={javascript} icon='javascript' name='JavaScript' hide={this.hideToolTip}
                                                 show={this.showTooltip} title={tooltipTitle}/>
                                    <SingleSkill image={react} icon='react' name='React' hide={this.hideToolTip}
                                                 show={this.showTooltip} title={tooltipTitle}/>
                                    <SingleSkill image={jQuery} icon='jQuery' name='jQuery' hide={this.hideToolTip}
                                                 show={this.showTooltip} title={tooltipTitle}/>
                                    <SingleSkill image={typescript} icon='typescript' name='TypeScript' hide={this.hideToolTip}
                                                 show={this.showTooltip} title={tooltipTitle}/>
                                    <SingleSkill image={bootstrap} icon='bootstrap' name='Bootstrap 4' hide={this.hideToolTip}
                                                 show={this.showTooltip} title={tooltipTitle}/>

                                </article>

                                <h5>Back End</h5>
                                <article className='skills__section__images__tools__single'>

                                    <SingleSkill image={firebase} icon='firebase' name='Firebase' hide={this.hideToolTip}
                                                 show={this.showTooltip} title={tooltipTitle}/>

                                </article>

                                <h5><Text tid="skills2"/></h5>
                                <article className='skills__section__images__tools__single'>

                                    <SingleSkill image={git} icon='git' name='Git' hide={this.hideToolTip}
                                                 show={this.showTooltip} title={tooltipTitle}/>

                                    <SingleSkill image={ubuntu} icon='ubuntu' name='Linux Ubuntu' hide={this.hideToolTip}
                                                 show={this.showTooltip} title={tooltipTitle}/>

                                    <SingleSkill image={gulp} icon='gulp' name='Gulp' hide={this.hideToolTip}
                                                 show={this.showTooltip} title={tooltipTitle}/>

                                    <SingleSkill image={webpack} icon='webpack' name='Webpack' hide={this.hideToolTip}
                                                 show={this.showTooltip} title={tooltipTitle}/>

                                    <SingleSkill image={babel} icon='babel' name='Babel' hide={this.hideToolTip}
                                                 show={this.showTooltip} title={tooltipTitle}/>

                                    <SingleSkill image={npm} icon='npm' name='npm' hide={this.hideToolTip}
                                                 show={this.showTooltip} title={tooltipTitle}/>

                                    <SingleSkill image={trello} icon='trello' name='Trello' hide={this.hideToolTip}
                                                 show={this.showTooltip} title={tooltipTitle}/>

                                    <SingleSkill image={slack} icon='slack' name='Slack' hide={this.hideToolTip}
                                                 show={this.showTooltip} title={tooltipTitle}/>

                                </article>

                                <h5><Text tid="skills3"/></h5>
                                <article className='skills__section__images__tools__single'>

                                    <SingleSkill image={redux} icon='redux' name='React Redux' hide={this.hideToolTip}
                                                 show={this.showTooltip} title={tooltipTitle}/>

                                </article>

                            </div>
                        </div>
                    </div>

                    <BackButton hovered={hovered} clicked={clicked} goHome={goHome} hover={hoverBack}/>

                </section>
            </>
        )
    }
}

export default Skills;