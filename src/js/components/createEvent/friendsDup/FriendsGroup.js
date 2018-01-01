import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Friends from './Friends';
import { getFriends } from '../../../actions/getFriends';

class FriendsGroup extends Component {
  constructor() {
    super();
  }

  componentWillMount(){
    this.props.getFriendsAction()
  }


  render () {

    return (
      <div className="" id="friendsOuterContainer">
        <h2 id="title">Invite some friends!</h2>
        {this.props.login.userData.friends ? <Friends login={this.props.login} fetchedEvents={this.props.fetchedEvents} selectedEvent={this.props.selectedEvent}/> : 'friendsgrouprenderfail'}
      </div>
    )
  }
}
function mapStateToProps(state, props){
  return {
    login: state.login
  }
}

function matchDispatchToProps(dispatch){
  return {
    getFriendsAction: bindActionCreators(getFriends, dispatch),
  }
}
export default connect(mapStateToProps, matchDispatchToProps)(FriendsGroup);
