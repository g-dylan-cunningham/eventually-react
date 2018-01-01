import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { getFriend } from '../../actions/getFriends';
import Friend from './Friend';



class FriendsShowGroup extends Component {
  constructor() {
    super();
  }



render() {
console.log("FriendsShowGroup", this.props);

  return (
    <div>
      <Friend
        getFriend={this.props.getFriend}
        myId={this.props.myId}
        login={this.props.login}
        />
    </div>

  )

}
}

// function mapStateToProps(state, props){
//   return {
//     getFriend: state.getFriends
//   }
// }

// function matchDispatchToProps(dispatch){
//   return {
//     getFriendAction: bindActionCreators(getFriend, dispatch),
//   }
// }


export default connect(null, null)(FriendsShowGroup);
