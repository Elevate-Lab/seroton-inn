import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import SignUp from './components/auth-components/signup';
import SignIn from './components/auth-components/signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={SignIn} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
