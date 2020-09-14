import React, {Component} from 'react';

import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


import Main from './main'
import Actual from './actualfr'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Actual} />
        </Switch>
      </div>
    );
  }
}
