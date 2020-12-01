import React, { Component } from 'react';
import {
  Router, Route, Switch
} from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { history } from './store';
import Main from './scenes/Main';

class App extends Component {
  render() {
    return (
      <Router history={history} onUpdate={() => { window.scrollTo(0, 0); }}>
        <Switch>
          <Route path="/" name="Main" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default hot(module)(App);
