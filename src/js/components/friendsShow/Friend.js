import React, { Component } from 'react';
import FriendItem from './FriendItem'


class Friend extends Component {
  constructor() {
    super();
    this.state = {
      postsLoaded: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.getFriend.friend != this.props.getFriend.friend){
      this.setState({
        postsLoaded: true
      })
    }
  }


  render () {
    let getFriend = this.props.getFriend;
    console.log('Friend, getFriend', getFriend);

    return (
      <div>
        <FriendItem getFriend={getFriend} login={this.props.login} myId={this.props.myId} />

      </div>
    )
  }
}
export default Friend;
