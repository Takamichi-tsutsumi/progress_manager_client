import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProgresses } from '../actions/index';

class DashBoard extends Component {
  constructor(props) {
    super(props)
  }
  
  componentWillMount() {
    this.props.fetchProgresses();
  }

  render() {
    return(
      <div>Hello this is DashBoard</div>
    )
  }
}

function mapStateToProps(state) {
  "use strict";
  return { progresses: state.progresses.all }
}

export default connect(mapStateToProps, { fetchProgresses })(DashBoard);