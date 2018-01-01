import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { getFriends } from '../../actions/getFriends';
import Event4UserRSVP from './Event4UserRSVP'

class Event4Details extends Component {
  constructor() {
    super();
  }

  componentWillMount(){
    this.props.getFriendsAction();
  }



  render () {
    let elem = this.props.elem;


    var allUsers = this.props.getFriends.user;
    var inviteesObj = elem.inviteesObj;
    var eventId = this.props.eventCreation.eventId

    // lets filter out all but the the invited users:
    function filterOutAllButInvited(allArr, invitedObj){
      let invitedArr = [];
      let invitedUsers = [];
      for(let invitee in invitedObj){
        if(invitedObj[invitee] === "invited"){
          invitedArr.push(invitee)
        }
      }
      allArr.filter(elem => {
        if(invitedArr.includes(elem.id.toString())){
          invitedUsers.push(elem)
        }
      })
      return invitedUsers
    }
    let theInvitedArr = filterOutAllButInvited(allUsers, inviteesObj)
    console.log('theInvitedArr', theInvitedArr);
    let theinvited = theInvitedArr.map(elem => {
      return <Event4UserRSVP elem={elem} key={elem.id} eventId={eventId}/>
    })

    // lets filter out all but the the maybe users:
    function filterOutAllButMaybe(allArr, invitedObj){
      let invitedArr = [];
      let invitedUsers = [];
      for(let invitee in invitedObj){
        if(invitedObj[invitee] === "maybe"){
          invitedArr.push(invitee)
        }
      }
      allArr.filter(elem => {
        if(invitedArr.includes(elem.id.toString())){
          invitedUsers.push(elem)
        }
      })
      return invitedUsers
    }
    let theMaybeArr = filterOutAllButMaybe(allUsers, inviteesObj)
    console.log('theMaybeArr', theMaybeArr);
    let themaybe = theMaybeArr.map(elem => {
      return <Event4UserRSVP elem={elem} key={elem.id} eventId={eventId}/>
    })



    // lets filter out all but the the accepted users:
    function filterOutAllButAccepted(allArr, invitedObj){
      let invitedArr = [];
      let invitedUsers = [];
      for(let invitee in invitedObj){
        if(invitedObj[invitee] === "accepted"){
          invitedArr.push(invitee)
        }
      }
      allArr.filter(elem => {
        if(invitedArr.includes(elem.id.toString())){
          invitedUsers.push(elem)
        }
      })
      return invitedUsers
    }
    let theAcceptedArr = filterOutAllButAccepted(allUsers, inviteesObj)
    console.log('theAcceptedArr', theAcceptedArr);
    let theaccepted = theAcceptedArr.map(elem => {
      return <Event4UserRSVP elem={elem} key={elem.id} eventId={eventId}/>
    })


    // lets filter out all but the the declined users:
    function filterOutAllButDeclined(allArr, invitedObj){
      let invitedArr = [];
      let invitedUsers = [];
      for(let invitee in invitedObj){
        if(invitedObj[invitee] === "declined"){
          invitedArr.push(invitee)
        }
      }
      allArr.filter(elem => {
        if(invitedArr.includes(elem.id.toString())){
          invitedUsers.push(elem)
        }
      })
      return invitedUsers
    }
    let theDeclinedArr = filterOutAllButDeclined(allUsers, inviteesObj)
    console.log('theDeclinedArr', theDeclinedArr);
    let thedeclined = theDeclinedArr.map(elem => {
      return <Event4UserRSVP elem={elem} key={elem.id} eventId={eventId}/>
    })


    return (
      <div className={this.props.elem.id == this.props.eventCreation.eventId ? "selectedEvent" : "unSelectedEvent"}>

        <h4>{elem.title}</h4>
        <h6>{elem.body}</h6>

        {theInvitedArr.length > 0 ? <h4>Invited</h4> : ''}
        <div>{theinvited}</div>
        {theAcceptedArr.length > 0 ? <h4>Accepted</h4> : ''}
        <div>{theaccepted}</div>
        {theMaybeArr.length > 0 ? <h4>Maybe</h4> : ''}
        <div>{themaybe}</div>
        {theDeclinedArr.length > 0 ? <h4>Declined</h4> : ''}
        <div>{thedeclined}</div>
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    // login: state.login,
    getFriends: state.getFriends,
    eventCreation: state.eventCreation,
    // getEvent: state.getEvent
  }
}

function matchDispatchToProps(dispatch){
  return {
    getFriendsAction: bindActionCreators(getFriends, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Event4Details);
