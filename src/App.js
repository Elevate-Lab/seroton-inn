import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import SignUp from "./components/auth-components/signup";
import SignIn from "./components/auth-components/signin";
import Compose from "./components/compose-components/Compose";
import Dashboard from "./components/dashboard-components/Dashboard";
import BottomNav from "./components/BottomNav";
import { EditProfile }  from './components/EditProfile';

import Profile from "./components/profile-components/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path = "/profile" component={Profile} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/compose" component={Compose} />
          <Route path="/footer" component={BottomNav} />
          <Route exact path = "/editProfile" component = {EditProfile} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
