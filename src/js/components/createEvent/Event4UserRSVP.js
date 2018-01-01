import React, { Component } from 'react';
class Event4UserRSVP extends Component {
  constructor() {
    super();
  }
  render () {
    let elem = this.props.elem
    let eventId = this.props.eventId

    return (
      <span className="event4rsvp">
        <div>
          <img className="userLoggedInPic" src={elem.picUrl} />
        </div>
        <div className="center">
          {elem.username}
        </div>
      </span>
    )
  }
}
export default Event4UserRSVP;
