import React from 'react';
import {
    HashRouter,
    Route,
} from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: `translateX(${100*styles.translateX}%) `,
    };
}

function bounce(val) {
    return spring(val, {
        stiffness: 100,
        damping: 15,
    });
}

const transition = {
    atEnter:{
        opacity: 0,
        translateX: 1,
    },
    atLeave:{
        opacity:bounce(1),
        translateX:bounce(0),
    },
    atActive:{
        opacity:bounce(1),
        translateX:bounce(0),
    }
};

function App() {

    return (
        <HashRouter>
            <AnimatedSwitch
                atEnter={transition.atEnter}
                atLeave={transition.atLeave}
                atActive={transition.atActive}
                mapStyles={mapStyles}
                className="switch-wrapper"
            >
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/projects' component={Projects}/>
                <Route exact path='/skills' component={Skills}/>
            </AnimatedSwitch>
        </HashRouter>
    )
};

export default App;
