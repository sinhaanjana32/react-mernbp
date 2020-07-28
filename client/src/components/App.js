import React from 'react';
import { Route, Switch } from "react-router-dom";
import About from './about'
import Home from './home'
import Login from './RegisterLogin'


function App() {
  return (
    <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
    <Switch>
    <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </div>
  );
}

export default App;
