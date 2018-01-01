import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
import EventHeader4 from '../createEvent/EventHeader4';
// import Event1Form from '../createEvent/Event1Form';
import { bindActionCreators } from 'redux';
// import { createEvent } from '../../actions/getEvent';
import { findEventByCreatorId } from '../../actions/getEvents';
import Event2EventFor4 from '../createEvent/Event2EventFor4';
import Event4Details from '../createEvent/Event4Details';

class EventCreate4 extends Component {
  constructor() {
    super();
    this.state = {
      // postSubmitted: false,
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


    let eventId = null;
    if (this.props.eventCreation.eventId){
      eventId = this.props.eventCreation.eventId;
    };
    let myEvents = null;
    let selectedEventDetails = null;

    if(this.props.getEvent.eventsByUser){

      // console.log('postSubmitted', this.props.getEvent.event);

      let fetchedEvents = this.props.getEvent.eventsByUser.eventData
      // console.log('fetchedEvents', fetchedEvents);

      selectedEventDetails = fetchedEvents.filter(elem => {
     // console.log('elemid and eventid', elem.id, eventId);
        if(elem.id == eventId){
          return elem
        }
      }).map(el=>{
        return <Event4Details elem={el} />
      })





      // ARE NEWEST EVENTS SHOWING UP????
      // if(this.state.postSubmitted){
      //   fetchedEvents.push(this.props.getEvent.event)
      // }

      myEvents = fetchedEvents.map((event, idx) => {
        return <Event2EventFor4
          key={event.id}
          idx={idx}
          event={event}
          />
      })
    }

    if(this.state.updatedPosts){
      return (
        <div className="container margin-top">
          <EventHeader4 />
          <div className="row margin-top">

              <div className="row margin-top">
                <div className="col-md-4 col-md-offset-2">
                  <h4>Select an event to monitor</h4>
                  {this.props.getEvent.eventsByUser.eventData ? myEvents : "You have no events"}
                </div>
                <div className="col-md-6">
                  {this.props.getEvent.eventsByUser.eventData ?
                  selectedEventDetails : 'select an event'}
                </div>
              </div>

          </div>

        </div>
      )
    } else {
      return <div>notupdated eventcreate4</div>
    }
  }
}


function mapStateToProps(state, props){
  return {
    login: state.login,
    getEvent: state.getEvent,
    // findEventByCreatorId: state.findEventByCreatorId,
    eventCreation: state.eventCreation
  }
}

function matchDispatchToProps(dispatch){
  return {
    findEventByCreatorIdAction: bindActionCreators(findEventByCreatorId, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(EventCreate4);
