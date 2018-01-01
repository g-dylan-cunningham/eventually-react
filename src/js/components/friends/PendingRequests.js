import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PendingRequestAPI from './PendingRequestAPI';
import { getFriend } from '../../actions/getFriends';



class PendingRequests extends Component {
  constructor() {
    super();
    this.state = {
      update: false
    }
  }



  render () {


    let friendRequests = null;

    if(this.props.getFriends.friend){

      var friendsReqArr = this.props.getFriends.friend.friendRequestsArr


      friendRequests = friendsReqArr.map(friendId => {
        return <PendingRequestAPI friendId={friendId} key={friendId} userId={this.props.userId} friendsReqArr={friendsReqArr}/>
      })
    }

    if (this.props.getFriends.friend) {

      return (
        <div className="container col-md-12" id="">
          {this.props.getFriends.friend.friendRequestsArr.length > 0 ? <h4 id="title">Pending Requests</h4> : ''}

          {friendRequests ? friendRequests : 'you have no friend requests'}

        </div>
      )
    } else {
      return <div>You have no new friend requests</div>
    }
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
    getFriendAction: bindActionCreators(getFriend, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(PendingRequests);
