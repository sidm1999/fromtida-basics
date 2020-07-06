import React from 'react';
import './App.css';
import {Home} from './components/Home'
import {Login} from './components/Login'
import {About} from './components/About'
import {OurTeam} from './components/OurTeam'
import {ContactUs} from './components/ContactUs'
import {Navigation} from './components/Navigation'
import {BrowserRouter, Route , Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="container">
      {/* <h2 className="m-3 d-flex justify-content-center">
        Frontida
      </h2> */}
      <Navigation/>
     <Switch>
       <Route path="/" component={Home} exact />
       <Route path="/About" component={About}/>
       <Route path="/Our Team" component={OurTeam}/>
       <Route path="/Contact Us" component={ContactUs}/>
       <Route path="/Login" component={Login}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
