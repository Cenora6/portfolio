import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Skills extends Component {

    render() {
        const linkStyle = {
            color: "#FFF",
            textDecoration: "none",
        };

        return (
            <section className='skills'>
                <div className='header_arrows arrows'>
                    <NavLink style={linkStyle} to={'/'}>
                        <div className='header_arrows_right'>
                            <i className="fas fa-angle-double-right"></i>
                        </div>
                    </NavLink>
                </div>
                <h2>Skills</h2>
                <div className='skills_header'></div>
                <div className='skills_canvas'>
                    <ul className='skills_canvas_numbers'>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                        <li>14</li>
                        <li>15</li>
                        <li>16</li>
                        <li>17</li>
                        <li>18</li>
                        <li>19</li>
                    </ul>
                    <ul className='skills_canvas_html'>
                        <li>&lt;html&gt;</li>
                        <li className='first'>&lt;head&gt;</li>
                        <li className='second'>&lt;title&gt;<span className='html'>Skills</span>&lt;/title&gt;</li>
                        <li className='first'>&lt;/head&gt;</li>
                        <li className='first'>&lt;body&gt;</li>
                        <li className='second'>&lt;ul <span className='html'>class</span><span className='class'>="skills"</span> &gt;</li>
                        <li className='third'>&lt;li&gt;<span className='html'>HTML5</span>&lt;/li&gt;</li>
                        <li className='third'>&lt;li&gt;<span className='html'>CSS</span>&lt;/li&gt;</li>
                        <li className='third'>&lt;li&gt;<span className='html'>SCSS / Sass</span>&lt;/li&gt;</li>
                        <li className='third'>&lt;li&gt;<span className='html'>Javascript</span>&lt;/li&gt;</li>
                        <li className='third'>&lt;li&gt;<span className='html'>jQuery</span>&lt;/li&gt;</li>
                        <li className='third'>&lt;li&gt;<span className='html'>ES6</span>&lt;/li&gt;</li>
                        <li className='third'>&lt;li&gt;<span className='html'>React</span>&lt;/li&gt;</li>
                        <li className='third'>&lt;li&gt;<span className='html'>Gulp</span>&lt;/li&gt;</li>
                        <li className='third'>&lt;li&gt;<span className='html'>Webpack</span>&lt;/li&gt;</li>
                        <li className='third'>&lt;li&gt;<span className='html'>Firebase</span>&lt;/li&gt;</li>
                        <li className='second'>&lt;/ul&gt;</li>
                        <li className='first'>&lt;/body&gt;</li>
                        <li>&lt;/html&gt;</li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Skills;