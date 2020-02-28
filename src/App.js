import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ImplicitCallback from './ImplicitCallback';
import Navbar from './components/NavBar'
import Posts from './components/Posts';
import Profile from './components/Profile';
import Landing from "./components/Landing";
import SecureRoute from './SecureRoute';


const App = () => (
  <>
    <Navbar />
    <Router>
      <Switch>
        <Route path="/" exact render={()=> <Redirect to="/posts" />}/>
        <Route path="/landing" exact component={Landing} />
        <SecureRoute path="/posts" component={Posts} />
        <SecureRoute path="/profile" component={Profile} />
        <Route path="/implicit/callback" component={ImplicitCallback} />
      </Switch>
    </Router>
  </>
);

export default App;
