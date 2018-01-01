import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { putFriendRequestArray } from '../../actions/getFriends';
import FriendsGroup from './friendsfriends/FriendsGroup';
// import { withRouter } from 'react-router'

class FriendItem extends Component {
  constructor() {
    super();
    this.state = {
      requested: false
    }
  }


  updated = () =>{
    this.setState({
      requested: true
    })
  }

  render () {

    let getFriend = this.props.getFriend

    let friendId = this.props.myId;

    let isFriend = null;

    // having issues with this request being slow
    if(this.props.login.userData.friends){
      var loggedInUsersFriends = this.props.login.userData.friends
      isFriend = false;
      if(loggedInUsersFriends.includes(friendId)){
        isFriend = true;
      }

    }

    // friend request function = invite()
    let invite = () => {
      let friendObj = getFriend.friend;
      if(friendObj["friendRequestsArr"]){
        var arr = friendObj["friendRequestsArr"];
      } else {
        arr = []
      }
      // console.log("inviteProcess friendObj.id, login", friendObj.id, this.props.login.userData.id);

      let updatedArr = arr.concat(this.props.login.userData.id)
      this.props.putFriendRequestArrayAction(updatedArr, friendObj.id)
      this.updated()
    }

    if(!this.props.login.userData){
      return <div>No login data</div>
    }

    return (

      <div className="row">
        <div className="col-md-4 eventShowLeftBlock">
          <div className="eventShowLeftContent">
            <h2>{getFriend.friend.username}</h2>
            <div>{isFriend ? "You are friends" : this.state.requested ? "friendship requested" : <button onClick={invite} className="btn btn-primary btn-sm">add friend</button>}</div>
            <img id="friendShowImage" src={getFriend.friend.picUrl}/>
          </div>
        </div>
        <div className="col-md-8">

          <FriendsGroup getFriend={getFriend}  />
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

function matchDispatchToProps(dispatch){
  return {
    putFriendRequestArrayAction: bindActionCreators(putFriendRequestArray, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(FriendItem);
