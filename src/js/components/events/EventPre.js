import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvent } from '../../actions/getEvent';
import Event from './Event';
import axios from 'axios';

class EventPre extends Component {
  constructor() {
    super();
    this.state = {
      theEvent: null,
      updated: false
    }
  }

  componentWillMount(){
    let eventId = this.props.elem.id;
    axios.get(`http://localhost:1337/events/${eventId}`)
      .then(res => {
        const theEvent = res.data;
        this.setState({
          theEvent: theEvent,
          updated: true
        });
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps != this.props){
        this.setState({ updated: true })
    }
  }


  render () {

    if(!this.state.updated){

      return (
        <div>
          loading...
        </div>
      )
    }

    return(
      <Event elem={this.state.theEvent} />
    )
  }
}


function mapStateToProps(state, props){
  return {
    // getEvents: state.getEvents,
    getEvent: state.getEvent
    // login: state.login
  }
}

function matchDispatchToProps(dispatch){
  return {
    getEventAction: bindActionCreators(getEvent, dispatch)
    // putEventAction: bindActionCreators(putEvent, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(EventPre);
