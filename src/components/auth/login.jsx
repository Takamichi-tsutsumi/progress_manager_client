import React, { Component } from 'react';

export default class LogIn extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit() {

    console.log('Login submitted');

  }

  render() {
    // const { auth } = this.props;
    return(
      <div>
        <h1>Log in</h1>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input type="text" name="email" required placeholder="Email" />
          <input type="password" name="password" required placeholder="Password" />

          {
            this.props.auth.isRequesting ?
              <Loading /> :
              <button type="submit">Send</button>
          }
        </form>
      </div>
    )
  }
}