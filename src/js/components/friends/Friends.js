import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Friend from './Friend';
import { getFriend } from '../../actions/getFriends';

class Friends extends Component {
  constructor() {
    super();
  }

  componentWillMount(){
    this.props.getFriendAction(this.props.login.userData.id)
  }

  render () {
    // if(this.props.getFriends.friend && this.props.getFriends.user){
    //
    // }
    let usersFriends = null;
    if(this.props.getFriends.friend && this.props.getFriends.user){

      let friendsList = this.props.getFriends.friend.friends

      usersFriends = this.props.getFriends.user
      .filter((elem, i) => {
        console.log('elem', elem.id, friendsList);
        // if (friendsList.includes(parseInt(elem.id))){
        if (friendsList.includes(elem.id)){
          return elem
        }
      })
      .map(elem => {
        console.log('asdf');
        return <Friend key={elem.id} elem={elem} />
      })
    }

    if(this.props.getFriends.friend){
      // if(-1 > 0){
      return (
        <div className="friendsContainer ">{usersFriends}</div>
      )

    } else {
      return <div>Not updated on Friends component</div>
    }
  }
}

function mapStateToProps(state, props){
  return {
    getFriends: state.getFriends
  }
}

function matchDispatchToProps(dispatch){
  return {
    getFriendAction: bindActionCreators(getFriend, dispatch)
  }
}
export default connect(mapStateToProps, matchDispatchToProps)(Friends);
