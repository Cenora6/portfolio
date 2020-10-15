import React, {Component} from 'react';
import {
    Route,
    Switch,
    withRouter
} from 'react-router-dom';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import {LanguageProvider} from "./language/LanguageProvider";


class App extends Component {
    state = {
        hovered: false,
        clicked: false,
        width: window.innerWidth,
    }

    componentDidMount() {
        this.handleWindowSizeChange();
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

    handleHoverBack = () => {
        this.setState((prevState) => {
            return {
                hovered: !prevState.back,
            }
        })
    };

    goHome = () => {
        this.setState((prevState) => {
            return { clicked: !prevState.clicked }
        })
        setTimeout(() => {
            this.props.history.push('/');
            this.setState((prevState) => {
                return { clicked: !prevState.clicked }
            })
        },3000)
    };

    render() {
        const { hovered, clicked, width,} = this.state;

        return (
            <Switch>
                <LanguageProvider>
                    <Route exact path='/' component={Home}/>

                    <Route
                        exact path='/about'
                        render={(props) => (
                            <About {...props} hovered={hovered} clicked={clicked} width={width}
                                   hoverBack={this.handleHoverBack} goHome={this.goHome}/>
                        )}
                    />
                    <Route
                        exact path='/projects'
                        render={(props) => (
                            <Projects {...props} hovered={hovered} clicked={clicked} width={width}
                                      hoverBack={this.handleHoverBack} goHome={this.goHome}/>
                        )}
                    />
                    <Route
                        exact path='/skills'
                        render={(props) => (
                            <Skills {...props} hovered={hovered} clicked={clicked} width={width}
                                    hoverBack={this.handleHoverBack} goHome={this.goHome}/>
                        )}
                    />
                </LanguageProvider>
            </Switch>
        )
    }
}

export default withRouter(App);
