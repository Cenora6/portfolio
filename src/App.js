import React from 'react';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
      <HashRouter>
          <Switch>
              <div className="transition-container">
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/contact' component={Contact}/>
              <Route exact path='/projects' component={Projects}/>
              <Route exact path='/skills' component={Skills}/>
              </div>
          </Switch>
      </HashRouter>
  );
}

export default App;
