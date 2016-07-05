import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../actions/auth.js';

class LogIn extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit() {

    console.log('Login submitted');

  }

  render() {
    return(
      <div>
        <h1>Log in</h1>
        <input type="text" name="email" required placeholder="Email" />
        <input type="password" name="password" required placeholder="Password" />

        {
          this.props.auth.isRequesting ?
            <Loading /> :
            <button onClick={ this.handleSubmit.bind(this) }>Send</button>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { logIn })( LogIn )