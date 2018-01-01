import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { putFriendRequestArray } from '../../actions/getFriends';
import { putFriendsArray } from '../../actions/getFriends';
import { friendsReqArrState } from '../../actions/getFriends';
// import { getFriends } from '../../actions/getFriends';
// import { refresh } from '../../actions/login';
import { friendsArrState } from '../../actions/getFriends';

class PendingRequestAPI extends Component {
  constructor() {
    super();
    this.state = {
      accepted: null
    }

  }



  acceptFriend = () => {
    let userId = this.props.userId
    let userFriendRequests = this.props.getFriends.friend.friendRequestsArr;
    let friendId = this.props.theFriend.id;
    let friendFriends = this.props.theFriend.friends;


    // make a new array of friend requests without the // accepted request
    let newUserFriendRequests = userFriendRequests.filter(elem => {
      if(elem != friendId){
        return elem
      }
    })
    this.props.putFriendRequestArrayAction(newUserFriendRequests, userId)


    // update friend's friend array to include
    // the userId
    let newFriendFriends = friendFriends.concat(userId)
    this.props.putFriendsArrayAction(newFriendFriends, friendId)

    // update user's friend array to include accepted request
    let origUsersFriendArr = this.props.login.userData.friends
    let newUsersFriendArr = origUsersFriendArr.concat(friendId)
    this.props.putFriendsArrayAction(newUsersFriendArr, userId)



    this.setState({
      accepted : true
    })
  }


  render () {
    // console.log('login props', this.props.login);
    // console.log('PendingRequest', this.props.theFriend);

    let pathid = "/friends/" + this.props.theFriend.id

    return (
      <div>
        <Link to={pathid} className="link friendBox center">

          <div className="friendNameBox center">
            {this.props.theFriend.username}
          </div>

          <div className="friendImageBox">
            <img src={this.props.theFriend.picUrl} className="friendImageImg"/>
          </div>

        </Link>
        <div className="center">
          {this.state.accepted ? 'request accepted' : <button className="btn btn-primary btn-sm center" onClick={this.acceptFriend}>Accept Request</button>}
        </div>
      </div>
    )

  }
}

function mapStateToProps(state, props){
  return {
    login: state.login,
    getFriends: state.getFriends
  }
}

function matchDispatchToProps(dispatch){
  return {
    putFriendRequestArrayAction: bindActionCreators(putFriendRequestArray, dispatch),
    putFriendsArrayAction: bindActionCreators(putFriendsArray, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(PendingRequestAPI);
