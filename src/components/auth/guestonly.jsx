import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../actions/auth.js';


class GuestOnly extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  
  componentWillMount() {
    this.userWillTransfer(this.props, this.context.router);
  }
  
  componentWillUpdate(nextProps) {
    this.userWillTransfer(nextProps, this.context.router);
  }
  
  userWillTransfer(props, router) {
    const { isLoggedIn } = props.auth;
    if (isLoggedIn) {
      router.replace('/');
    }
  }
  
  render() {
    return <div>{ this.props.children }</div>
  }
}

const mapStateToProps = state => {
  "use strict";
  return { auth: state.auth }
};

export default connect(mapStateToProps, { logIn })(GuestOnly);