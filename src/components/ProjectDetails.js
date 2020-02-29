import React, {Component} from 'react';
import Contact from "./Contact";
import mobile1 from "./../assets/projects/NasaApiChallenge_Mobile.png";
import desktop1 from "./../assets/projects/NasaApiChallenge_Desktop.png";

class ProjectDetails extends Component {
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
                <section className={`projects background ${this.state.clicked && "back_to_home3"}`}>
                    <div className={`fadeIn_background projects_images ${this.state.clicked && "fadeOut_background"}`}>
                        <div className='projects_images_single'>
                            <img src={mobile1} alt='project1'/>
                            <img src={desktop1} alt='project1'/>
                            <div className='projects_images_single_description'>
                                <p>teskttesktteskttesktteskttesktteskttesktteskttesktteskttesktteskttesktteskttesktteskttes
                                    kttesktteskttesktteskttesktteskttesktteskttesktteskt</p>
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

export default ProjectDetails;