import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Header extends Component {
    state = {
        hover: false,
        title: "",
    };

    toggleHoverTop = (e) => {
        this.setState({
            hover: !this.state.hover,
            title: e.target.id,
        });
    };

    render() {

        const linkStyle = {
            color: "#FFF",
            textDecoration: "none",
        };

        return (
            <section className='header'>
                <div className='header_title'>
                    <h1>Aleksandra Gasidlo</h1>
                    <p>Portfolio</p>
                </div>
                <div className='header_arrows'>
                    <NavLink style={linkStyle} to={'/contact'}>
                        <div className='header_arrows_top'>
                            <i className="fas fa-angle-double-up" id='top'
                               onMouseEnter={this.toggleHoverTop} onMouseLeave={this.toggleHoverTop}></i>
                            <span className={this.state.hover && this.state.title === "top" ? "shown" : "hidden"}>Contact</span>
                        </div>
                    </NavLink>
                    <NavLink style={linkStyle} to={'/skills'}>
                        <div className='header_arrows_left'>
                            <i className="fas fa-angle-double-left" id='left'
                               onMouseEnter={this.toggleHoverTop} onMouseLeave={this.toggleHoverTop}></i>
                            <span className={this.state.hover && this.state.title === "left" ? "shown" : "hidden"}>My skills</span>
                        </div>
                    </NavLink>
                    <NavLink style={linkStyle} to={'/about'}>
                        <div className='header_arrows_down'>
                            <span className={this.state.hover && this.state.title === "down" ? "shown" : "hidden"}>About me</span>
                            <i className="fas fa-angle-double-down" id='down'
                               onMouseEnter={this.toggleHoverTop} onMouseLeave={this.toggleHoverTop}></i>
                        </div>
                    </NavLink>
                    <NavLink style={linkStyle} to={'/contact'}>
                        <div className='header_arrows_right'>
                            <span className={this.state.hover && this.state.title === "right" ? "shown" : "hidden"}>My projects</span>
                            <i className="fas fa-angle-double-right" id='right'
                               onMouseEnter={this.toggleHoverTop} onMouseLeave={this.toggleHoverTop}></i>
                        </div>
                    </NavLink>
                </div>
            </section>
        );
    }
}

export default Header;