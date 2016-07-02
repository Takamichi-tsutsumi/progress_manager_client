import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import UserOnly from './components/auth/useronly';
import GuestOnly from './components/auth/guestonly';
import LogIn from './components/auth/login';
import DashBoard from './components/dash_board';

export default (
  <Route path="/" component={ App }>
    <Route component={ UserOnly }>
      <IndexRoute component={ DashBoard } />
    </Route>
    <Route component={ GuestOnly }>
      <Route path="/login" component={ LogIn } />
    </Route>
  </Route>
)