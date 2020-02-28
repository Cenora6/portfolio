import React, {Component} from 'react';
import Contact from "./Contact";

class Projects extends Component {
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
                <section className={`projects background ${this.state.clicked && "back_to_home"}`}>
                    <div className='fadeIn_background'>
                        <p>tekst tekst</p>
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

export default Projects;