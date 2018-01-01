import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import Friend from './Friend';

class FriendsGroup extends Component {
  constructor() {
    super();
  }



  render () {


    let selectedFriendArr = this.props.getFriend.friend.friends

    let thefriends = selectedFriendArr.map(friend => {
      return <Friend key={friend} friend={friend} />

    })

    return (
      <div className="container col-md-12" id="friendsOuterContainer">
        <div className="friendsContainer ">
          <div><h4 id="title">{this.props.getFriend.friend.username}&rsquo;s Friends</h4></div>
          <div>{thefriends}</div>
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
//     getFriendsAction: bindActionCreators(getFriends, dispatch),
//   }
// }
export default connect(mapStateToProps, null)(FriendsGroup);
