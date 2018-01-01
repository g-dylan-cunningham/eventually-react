import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EventShow2 from './EventShow2';
import { getFriends } from '../../actions/getFriends'

class EventShow1 extends Component {
  constructor() {
    super();
    this.state = {
      updated: false
    }
  }

  componentDidMount(){
    this.props.getFriendsAction()
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.getFriends != this.props.getFriends){
      this.setState({
        updated: true
      })
    }
  }

  render () {

    let inviteesObj = this.props.elem.inviteesObj;

    let invitedArr = [];
    let acceptedArr = [];
    let declinedArr = [];
    let maybeArr = [];

    for (const id in inviteesObj){
      switch(inviteesObj[id]){
        case "invited":
          // invitedArr.push(parseInt(id));
          invitedArr.push(id);
          break;
        case "accepted":
          acceptedArr.push(id);
          // acceptedArr.push(parseInt(id));
          break;
        case "declined":
          declinedArr.push(id);
          // declinedArr.push(parseInt(id));
          break;
        case "maybe":
          maybeArr.push(id);
          // maybeArr.push(parseInt(id));
          break;
      }
    }



    let invitedFriends
    let acceptedFriends
    let declinedFriends
    let maybeFriends
    let accepteesTotalCount = null

    if(this.state.updated){
      invitedFriends =this.props.getFriends.user.filter(elem => {
        if(invitedArr.includes(elem.id)){
          // console.log('invitee', elem);
          return elem;
        }
      }).map(el => {
      return <EventShow2 key={el.id} elem={el} status="invited" />;
      });

      accepteesTotalCount = 0;

      acceptedFriends = this.props.getFriends.user.filter(elem => {
        if(acceptedArr.includes(elem.id)){
          // console.log('accepted', elem);
          accepteesTotalCount ++;
          return elem;
        }
      }).map(el => {
      return <EventShow2 key={el.id} elem={el} status="accepted" />;
      });


      declinedFriends = this.props.getFriends.user.filter(elem => {
        if(declinedArr.includes(elem.id)){
          // console.log('declined', elem);
          return elem;
        }
      }).map(el => {
      return <EventShow2 key={el.id} elem={el} status="declined" />;
      });


      maybeFriends = this.props.getFriends.user.filter(elem => {
        if(maybeArr.includes(elem.id)){
          // console.log('maybe', elem);
          return elem;
        }
      }).map(el => {
      return <EventShow2 key={el.id} elem={el} status="maybe" />;
      });

    }


    return (
      <div className="row">
        <div className="col-md-4 eventShowLeftBlock">
          <div className="eventShowLeftContent">
            <h2>{this.props.elem.title}</h2>
            <p>{this.props.elem.body}</p>
            <img id="friendShowImage" src={this.props.elem.picUrl}/>
          </div>
        </div>

        <div className="col-md-8" id="friendsOuterContainer">
          <h2 id="title">RSVP List</h2>
          {accepteesTotalCount != 1 ? <h4> {accepteesTotalCount} have accepted</h4> : "1 has accepted"}
          <div className="friendsContainer">
            <div>
              {invitedFriends ? invitedFriends : "no friends have been invited"}
              {acceptedFriends ? acceptedFriends : "no friends have accepted"}
              {declinedFriends ? declinedFriends : "no friends have declined"}
              {maybeFriends ? maybeFriends : "no friends are maybe"}
            </div>
          </div>
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
    getFriendsAction: bindActionCreators(getFriends, dispatch),
  }
}
export default connect(mapStateToProps, matchDispatchToProps)(EventShow1);
