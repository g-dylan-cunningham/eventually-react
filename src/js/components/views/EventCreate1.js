import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
import EventHeader1 from '../createEvent/EventHeader1';
import Event1Form from '../createEvent/Event1Form';
import { bindActionCreators } from 'redux';
import { findEventByCreatorId } from '../../actions/getEvents';
import Event2Event from '../createEvent/Event2Event';

class EventCreate1 extends Component {
  constructor() {
    super();
    this.state = {
      postSubmitted: false,
      updatedPosts: false
    }
  }


  componentWillMount(){
    this.props.findEventByCreatorIdAction(this.props.login.userData.id)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.getEvent.eventsByUser != this.props.getEvent.eventsByUser){
   // console.log('props changing - updatedPosts', nextProps, this.props);
      this.setState({
        updatedPosts: true
      })
    }
    if(nextProps.getEvent.event != this.props.getEvent.event){
   // console.log('props changed getEvent.event', nextProps.getEvent.event);
      this.setState({
        postSubmitted: true
      })
    }
  }



  render () {
    if (!this.props.login.loggedIn) {
      return (
        <Redirect to={ '/login'}/>
      )
    }



    let myEvents;

    if(this.props.getEvent.eventsByUser){

      // console.log('postSubmitted', this.props.getEvent.event);

      let fetchedEvents = this.props.getEvent.eventsByUser.eventData
      console.log('fetch-pre', this.props.getEvent);
      console.log('fetchedEvents', fetchedEvents, this.state.postSubmitted);

      if(this.state.postSubmitted){
        fetchedEvents.push(this.props.getEvent.event)
      }

      myEvents = fetchedEvents.map((event, idx) => {
        return <Event2Event
          key={event.id}
          idx={idx}
          event={event}
          />
      })
    }

    if(this.state.updatedPosts){
      return (
        <div className="container margin-top">
          <EventHeader1 />
          <div className="row margin-top">
            <div className="col-md-5 col-md-offset-1 margin-top">
              <h4>Make a new event</h4>
              <Event1Form />
            </div>
            <div className="col-md-6 margin-top">
              <h4>Manage a created event</h4>
              <div className="row margin-top">
                <div className="col-md-12">
                  <h5>Select an event to manage invitees</h5>
                  {this.props.getEvent.eventsByUser.eventData ? myEvents : "You have no events"}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return <div>notupdated eventcreate1</div>
    }
  }
}

function mapStateToProps(state, props){
  return {
    login: state.login,
    getEvent: state.getEvent,
    eventCreation: state.eventCreation,
    getFriends: state.getFriends
  }
}

function matchDispatchToProps(dispatch){
  return {
    findEventByCreatorIdAction: bindActionCreators(findEventByCreatorId, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(EventCreate1);
