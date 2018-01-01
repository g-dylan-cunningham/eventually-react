import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFriends } from '../../../actions/getFriends';
import { Link } from 'react-router-dom';
import axios from 'axios'

class Friend extends Component {
  constructor() {
    super();
    this.state = {
      theFriend: null,
      updated: false
    }
  }

componentWillMount(){
  var thefriend = null;
  axios.get(`http://localhost:1337/users/${this.props.friend}`)
  .then(res => {
    thefriend  = res.data;
    this.setState({
      theFriend: thefriend,
      updated: true
    });
    // console.log('thefriend', thefriend);
  })
}


  render () {

    if(this.state.updated){
      let pathid = "/friends/" + this.state.theFriend.id
      return (

        <Link to={pathid} className="link friendBox">

          <div className="friendNameBox center">
            {this.state.theFriend.username}
          </div>

          <div className="friendImageBox">
            <img src={this.state.theFriend.picUrl} className="friendImageImg"/>
          </div>

        </Link>

      )
    } else {
      return <div>technical problems getting friend</div>
    }
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

export default connect(mapStateToProps, null)(Friend);
