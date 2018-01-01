import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents } from '../../actions/getEvents';
import EventPre from './EventPre';


class Events extends Component {
  constructor() {
    super();
    this.state = {
      updated: null
    }
  }

  componentDidMount(){
    this.props.getEventsAction()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.getEvent != this.props.getEvent){

      this.setState({ updated: true })
    }
  }


  render () {
    // console.log('getEvent', this.props.getEvent.events);
    let userId = this.props.login.userData.id
    let filteredEventsHosting = null;
    let filteredEventsAccepted = null;
    let filteredEventsInvited = null;
    let filteredEventsMaybe = null;
    let filteredEventsDeclined = null;
    let theevents = null;

    if(this.state.updated){
      // START WITH ALL EVENTS
      theevents = this.props.getEvent.events
      // FILTER OUT ALL EVENTS THAT DON'T HAVE THE USER'S
      // ID IN THE inviteesObj
      .filter(elem => {
        // console.log('elem', elem);
        if(Object.keys(elem.inviteesObj).includes(userId.toString())){
          return elem
        }
      })

      // LETS RETURN THEM BY EVENT STATUS
      filteredEventsHosting = theevents.map(el => {
        if(el.inviteesObj[userId] === "hosting"){
          return <EventPre elem={el} key={el.id} reRender={this.reRender}/>
        }
      })

      filteredEventsInvited = theevents.map(el => {
        if(el.inviteesObj[userId] === "invited"){
          return <EventPre elem={el} key={el.id} reRender={this.reRender}/>
        }
      })

      filteredEventsAccepted = theevents.map(el => {
        if(el.inviteesObj[userId] === "accepted"){
          return <EventPre elem={el} key={el.id} reRender={this.reRender}/>
        }
      })

      filteredEventsMaybe = theevents.map(el => {
        if(el.inviteesObj[userId] === "maybe"){
          return <EventPre elem={el} key={el.id} reRender={this.reRender}/>
        }
      })

      filteredEventsDeclined = theevents.map(el => {
        if(el.inviteesObj[userId] === "declined"){
          return <EventPre elem={el} key={el.id} reRender={this.reRender}/>
        }
      })


    }



    return (
      <div className="eventsGroup">
        <div className="">
          <div className="">
            <h2 id="title" >Events List</h2>
            {filteredEventsHosting}
            {filteredEventsAccepted}
            {filteredEventsInvited}
            {filteredEventsMaybe}
            {filteredEventsDeclined}

          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    getEvent: state.getEvent,
    login: state.login
  }
}

function matchDispatchToProps(dispatch){
  return {
    getEventsAction: bindActionCreators(getEvents, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Events);
