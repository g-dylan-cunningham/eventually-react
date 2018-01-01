import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventShow2 extends Component {

  render () {

    let pathid = "/friends/" + this.props.elem.id
    return (
      <Link to={pathid}>
        <div className="friendBox" >
          <div className="friendNameBox center">
            <h3>{this.props.elem.username}</h3>
          </div>
          <div className="friendImageBox">
            <img src={this.props.elem.picUrl} className="friendImageImg"/>
          </div>
          <div className="center"><p>{this.props.status}</p></div>
        </div>
      </Link>
    )
  }
}
export default EventShow2;
