import React from 'react';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import {LanguageProvider} from "./language/LanguageProvider";

function App() {

    return (
        <HashRouter>
            <Switch>
                <LanguageProvider>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/projects' component={Projects}/>
                <Route exact path='/skills' component={Skills}/>
                </LanguageProvider>
            </Switch>
        </HashRouter>
    )
}

export default App;
