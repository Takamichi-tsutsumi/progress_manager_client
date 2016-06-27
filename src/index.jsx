import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

class App extends Component {
  constructor(props, context) {
    super(props, context)
  }
  
  render() {
    return (
      <div>Hello from react-redux</div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);