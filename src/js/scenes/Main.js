import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../layouts/Full';
import Home from './Home';

class Main extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route component={Home} path="/" />
        </Switch>
      </Layout>
    );
  }
}

export default Main;
