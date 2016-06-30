import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import DashBoard from './components/dash_board';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ DashBoard } />
  </Route>
)