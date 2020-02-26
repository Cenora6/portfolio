import React, {Component} from 'react';

class Contact extends Component {
    state = {
        click: false,
        opacity1: true,
        opacity2: true,
        opacity3: true,
        opacity4: true,
    };

    onClick = () => {
        this.setState({
            click: !this.state.click,
            opacity1: !this.state.opacity1,
        });

        setTimeout(() => {
            this.setState({
                opacity2: !this.state.opacity2,
            })
        }, 1000);

        setTimeout(() => {
            this.setState({
                opacity3: !this.state.opacity3,
            })
        }, 2000);

        setTimeout(() => {
            this.setState({
                opacity4: !this.state.opacity4,
            })
        }, 3000);
        setTimeout(() => {
            this.setState({
                click: false,
                opacity1: true,
            })
        }, 5000);
        setTimeout(() => {
            this.setState({
                opacity2: !this.state.opacity1,
            })
        }, 5500);
        setTimeout(() => {
            this.setState({
                opacity2: !this.state.opacity2,
            })
        }, 6000);
        setTimeout(() => {
            this.setState({
                opacity3: !this.state.opacity3,
            })
        }, 6500);
        setTimeout(() => {
            this.setState({
                opacity4: !this.state.opacity4,
            })
        }, 7000);
    };

    render() {
        return (
            <section className='contact'>
                <div className='contact_circles'>
                    <div className='contact_circles_single main' onClick={this.onClick}>
                        <i className="far fa-address-book"></i>
                    </div>
                    <a href="https://www.linkedin.com/in/aleksandra-gasid%C5%82o-8b0338190/">
                        <div className={`contact_circles_single linkedin ${this.state.click ? "icons_show" : "icons_disappear"}`}
                             style={{ opacity: this.state.opacity1 ? '0' : '0.8' }}>
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/Cenora06/">
                        <div className={`contact_circles_single facebook ${this.state.click ? "icons_show" : "icons_disappear"}`}
                             style={{opacity: this.state.opacity2 ? '0' : '0.8' }}>
                            <i className="fab fa-facebook"></i>
                        </div>
                    </a>

                    <a href="https://github.com/Cenora6/">
                        <div className={`contact_circles_single github ${this.state.click ? "icons_show" : "icons_disappear"}`}
                             style={{opacity: this.state.opacity3 ? '0' : '0.8' }}>
                            <i className="fab fa-github"></i>
                        </div>
                    </a>

                    <a href="mailto:aleksandra.gasidlo@gmail.com">
                        <div className={`contact_circles_single email ${this.state.click ? "icons_show" : "icons_disappear"}`}
                             style={{opacity: this.state.opacity4 ? '0' : '0.8' }}>
                            <i className="fas fa-envelope"></i>
                        </div>
                    </a>
                </div>
            </section>
        )
    }
}

export default Contact;