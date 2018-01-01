import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Friend from './Friend';



class Friends extends Component {
  constructor() {
    super();
  }

  render () {
    // friendsList is the friendId array from user json
    let friendsList = this.props.getFriends.friend.friends
    // console.log('Friends: login friends', this.props.login.userData.friends);
    // console.log('Friends: getFriends friends', this.props.getFriends.friend.friends);

    let usersFriends = null;
    if(this.props.getFriends.user){
      // console.log('Friends:', this.props.getFriends.user);
      usersFriends = this.props.getFriends.user
      .filter((elem, i) => {
        // if (friendsList.includes(parseInt(elem.id))){
        // console.log('friends: elem filter', elem.id, friendsList);
        if (friendsList.includes(elem.id)){
          // console.log('friends past filter', elem);
          return elem
        }
      })
      .map(elem => {
        // console.log('friends: elem map', elem);
        return <Friend key={elem.id} elem={elem} fetchedEvents={this.props.fetchedEvents} selectedEvent={this.props.selectedEvent}/>
      })
    }

    return (
      <div className="friendsContainer">{usersFriends}</div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    getFriends: state.getFriends
  }
}

// function matchDispatchToProps(dispatch){
//   return {
//     getFriendsAction: bindActionCreators(getFriends, dispatch),
//   }
// }
export default connect(mapStateToProps, null)(Friends);
