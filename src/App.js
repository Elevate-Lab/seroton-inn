import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import SignUp from './components/auth-components/signup';
import SignIn from './components/auth-components/signin';
import Profile from './components/Profile';
import Dashboard from './components/dashboard-components/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/dashboard" component = {Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
