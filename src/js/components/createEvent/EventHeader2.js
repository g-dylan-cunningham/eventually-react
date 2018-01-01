import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
// import { bindActionCreators } from 'redux';

class EventHeader2 extends Component {

  render () {


      return (
        <div className="container">
          <div className="eventHeaderGroup">
            <Link to='/event/create/1' className="eventHeaderButton center">
              <p className="eventHeaderButtonText">Create New Event</p>
            </Link>
            <Link to='/event/create/2' id="selectedButton" className="eventHeaderButton center">
              <p className="selectedText">Invite Friends</p>
            </Link>
            <Link to='/event/create/3' className="eventHeaderButton center">
              <p className="eventHeaderButtonText">Select Date</p>
            </Link>
            <Link to='/event/create/4' className="eventHeaderButton center">
              <p className="eventHeaderButtonText">Monitor Event</p>
            </Link>

          </div>
        </div>
      )

  }
}

function mapStateToProps(state, props){
  return {
    eventCreation: state.eventCreation
  }
}

// function matchDispatchToProps(dispatch){
//   return {
//     getFriendsAction: bindActionCreators(getFriends, dispatch),
//   }
// }

export default connect(mapStateToProps, null)(EventHeader2);
