
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
// import { bindActionCreators } from 'redux';
// // import { createEvent } from '../../actions/getEvent';
import Event2Event from './Event2Event';
import FriendsGroup from './friendsDup/FriendsGroup';


class Event2Events
 extends Component {
  constructor() {
    super();
  }



  render () {
    let myEvents;

    if(this.props.getEvent.eventsByUser){

      var fetchedEvents = this.props.getEvent.eventsByUser.eventData

      myEvents = fetchedEvents.map((event, idx) => {

        return <Event2Event
          key={event.id}
          idx={idx}
          event={event}
          />
      })
    }


    // return this if somehow an event hasn't been chosen
    // in our redux createEvent.eventId
    if(!this.props.eventCreation.eventId){
      return (
        <div className="container">

          <FriendsGroup fetchedEvents={fetchedEvents} />
          <div className="row margin-top">
            <div className="col-md-12">
              <h4>Select one of your events to manage invitees</h4>
              {this.props.findEventByCreatorId.eventData ? myEvents : "You have no events"}
            </div>
          </div>

        </div>
      )
    } else {
      return (
        <div className="container">

          <FriendsGroup fetchedEvents={fetchedEvents} />
        </div>
      )
    }
  }
}

function mapStateToProps(state, props){
  return {
    login: state.login,
    getEvent: state.getEvent,
    eventCreation: state.eventCreation
  }
}

// function matchDispatchToProps(dispatch){
//   return {
//     findEventByCreatorIdAction: bindActionCreators(findEventByCreatorId, dispatch),
//   }
// }

export default connect(mapStateToProps, null)(Event2Events
);
