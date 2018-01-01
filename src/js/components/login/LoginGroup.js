import React, { Component } from 'react';
import SignUp from './SignUp'
import Login from './Login'
import { connect } from 'react-redux';
import { Redirect } from 'react-router'

class LoginGroup extends Component {
  constructor() {
    super();
  }
  render () {

    if(this.props.login.loggedIn) {
      return <Redirect to="/"/>
    }

    return (
      <div className="container">

        <div className="row">
          <div className="col-md-4 col-md-offset-2">
            <h2>Create Account</h2>
            {this.props.login.loggedIn === true ? "" : <SignUp /> }

          </div>
          <div className="col-md-4">
            <h2>Log in</h2>
            {this.props.login.loggedIn === true ? "" : <Login /> }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, null)(LoginGroup);
