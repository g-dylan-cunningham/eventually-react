import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { putEvent } from '../../actions/getEvent';


class Event extends Component {


  acceptButton = (e) => {
    let userId = this.props.login.userData.id
    let inviteesObj = this.props.elem.inviteesObj
    let eventId = this.props.elem.id;
    // console.log('accept button', inviteesObj, eventId);
    inviteesObj[userId] = "accepted";
    this.props.putEventAction(eventId, inviteesObj)
    e.preventDefault()
    e.stopPropagation()

  }

  maybeButton = (e) => {
    let userId = this.props.login.userData.id
    let inviteesObj = this.props.elem.inviteesObj
    let eventId = this.props.elem.id;
    inviteesObj[userId] = "maybe";
    this.props.putEventAction(eventId, inviteesObj)
    e.preventDefault()
  }

  declineButton = (e) => {
    let userId = this.props.login.userData.id
    let inviteesObj = this.props.elem.inviteesObj
    let eventId = this.props.elem.id;
    inviteesObj[userId] = "declined";
    this.props.putEventAction(eventId, inviteesObj)
    e.preventDefault()
  }



  render () {


    let userId = this.props.login.userData.id
    let eventType = null;
    let pathid = "/events/" + this.props.elem.id
    let event = this.props.elem

    // CREATED TRUNCATED TITLE TEXT
    var truncatedTit = (str, n) => {
      var result;
      if(str.length > n){
        result = str.substring(0, n) + "..."
      } else {
        result = str
      }
      return result
    }

    let truncatedTitle = truncatedTit(event.title, 24)





    // CREATED TRUNCATED BODY TEXT
    var truncatedBody = (str, n) => {
      var result;
      var index = n;
      var firstSpaceBeforeN = null
      if(str.length > n){
        while(firstSpaceBeforeN === null) {
          if(str[index] === " "){
            firstSpaceBeforeN = index;
          }
          index --;
        }
        result = str.substring(0, firstSpaceBeforeN) + "..."
      } else {
        result = str;
      }
      return result
    }

    let truncatedText = truncatedBody(event.body, 42)



    // console.log('event', event.invitees[userId])
    switch(event.inviteesObj[userId]) {
      case "invited":
        // console.log("they type is invited");
        eventType = "invited";
        break;
      case "declined":
        // console.log("they type is declined");
        eventType = "declined";
        break;
      case "accepted":
        // console.log("they type is accepted");
        eventType = "accepted";
        break;
      case "maybe":
        // console.log("they type is maybe");
        eventType = "maybe";
        break;
      case "hosting":
        // console.log("they type is hosting");
        eventType = "hosting";
        break;
      default:
        eventType = null;
    }


    return (
      <div className="linkElement">
        <Link to={pathid} >

            <div className="col-md-10 eventText">
              <div className={eventType}>
                <h3 className="title">{truncatedTitle}</h3>
                <p>{truncatedText}</p>
              </div>
            </div>

            <div className="col-md-2 margin-top eventButtons">
              {eventType === "invited" ? <div><button type="button" className="btn btn-primary btn-xs" onClick={this.acceptButton}>Accept</button><button type="button" className="btn btn-primary btn-xs margin-top-sm" onClick={this.declineButton}>Decline</button><button type="button" className="btn btn-primary btn-xs margin-top-sm" onClick={this.maybeButton}>Maybe</button></div> : ''}
              {eventType === "declined" ? <div><button type="button" className="btn btn-primary btn-xs" onClick={this.acceptButton}>Accept</button><button type="button" className="btn btn-primary btn-xs margin-top-sm" onClick={this.maybeButton}>Maybe</button></div> : ''}
              {eventType === "maybe" ? <div><button type="button" className="btn btn-primary btn-xs" onClick={this.acceptButton}>Accept</button><button type="button" className="btn btn-primary btn-xs margin-top-sm" onClick={this.declineButton}>Decline</button></div> : ''}
              {eventType === "accepted" ? <div><button type="button" className="btn btn-primary btn-xs" onClick={this.declineButton}>Decline</button><button type="button" className="btn btn-primary btn-xs margin-top-sm" onClick={this.maybeButton}>Maybe</button></div> : ''}
              {eventType === "hosting" ? <h4 id="hosting">Hosting</h4> : ''}
            </div>


        </Link>

      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    getEvent: state.getEvent,
    // getEvent: state.getEvent,
    login: state.login
  }
}

function matchDispatchToProps(dispatch){
  return {
    // getEventAction: bindActionCreators(getEvent, dispatch),
    putEventAction: bindActionCreators(putEvent, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Event);
