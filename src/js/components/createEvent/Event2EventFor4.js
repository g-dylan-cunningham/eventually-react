import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectEvent } from '../../actions/eventCreation';
import { getEvent } from '../../actions/getEvent';
import { putEventStatus } from '../../actions/getEvent';
// import { Link } from 'react-router-dom';




class Event2EventFor4 extends Component {
  constructor() {
    super();
  }
  render () {
    let handleClick = () => {
      // keeps the eventId in eventCreation in redux
      this.props.selectEventAction(this.props.event.id)

      // set the eventStatus of event on db
      this.props.putEventStatusAction(this.props.event.id, "scheduled")
    }

      return (

          <div onClick={handleClick} className={this.props.event.id == this.props.eventCreation.eventId ? "selectedEvent" : "unSelectedEvent"}>
            {this.props.event.title}

          </div>

      )
  }
}


function mapStateToProps(state, props){
  return {
    eventCreation: state.eventCreation,
    getEvent: state.getEvent
  }
}

function matchDispatchToProps(dispatch){
  return {
    selectEventAction: bindActionCreators(selectEvent, dispatch),
    getEventAction: bindActionCreators(getEvent, dispatch),
    putEventStatusAction: bindActionCreators(putEventStatus, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Event2EventFor4);
