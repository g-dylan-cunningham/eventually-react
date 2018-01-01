import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';


class DateBox extends Component {

  state = {
    theEvent: null,
    updated: false
  }


  componentWillMount(){
    let eventId = this.props.id;
  // let eventId = parseInt(this.props.id);
    // console.log('eventId', eventId);

    axios.get(`http://localhost:1337/events/${eventId}`)
      .then(res => {
        const theEvent = res.data;
        this.setState({
          theEvent: theEvent,
          updated: true
        });
      });
  }

  render () {
    let pathid = "/events/" + this.props.id

    return (
      <Link to={pathid} onClick={e => e.stopPropagation()}>
        <div>
          {this.state.updated ? this.state.theEvent.title : "notupdated"}
        </div>
      </Link>

    )
  }
}

// function mapStateToProps(state, props){
//   return {
//     // login: state.login,
//     // putDate: state.putDate
//   }
// }
//
// function matchDispatchToProps(dispatch){
//   return {
//     // putDateAction: bindActionCreators(putDate, dispatch)
//
//   }
// }

export default connect(null, null)(DateBox);
