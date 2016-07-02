import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../actions/auth.js';


class UserOnly extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentWillMount() {
    this.guestWillTransfer(this.props, this.context.router);
  }

  componentWillUpdate(nextProps) {
    this.guestWillTransfer(nextProps, this.context.router);
  }

  guestWillTransfer(props, router) {
    const { isLoggedIn } = props.auth;
    if (!isLoggedIn) {
      router.replace('/login');
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

export default connect(mapStateToProps, { logIn })(UserOnly);