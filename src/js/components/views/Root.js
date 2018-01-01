import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import FriendGroup from '../friends/FriendsGroup';
import Events from '../events/Events';
import PendingRequests from '../friends/PendingRequests';

// import { bindActionCreators } from 'redux';


class Root extends Component {
  constructor() {
    super();
  }



  render () {
    if (!this.props.login.loggedIn) {
      return (
        <Redirect to={ '/login'}/>
      )
    }

    return (
      <div className="container">
      <div className="row">
        <h1>Welcome, {this.props.login.userData.username}</h1>
        <div className="col-md-7">
          <PendingRequests userId={this.props.login.userData.id}/>
          <FriendGroup />
        </div>

        <div className="col-md-5">
          <Events />
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

// function matchDispatchToProps(dispatch){
//   return {
//     loginAction: bindActionCreators(login, dispatch),
//   }
// }

export default connect(mapStateToProps, null)(Root);
