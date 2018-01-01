import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { putEventRSVP } from '../../../actions/getEvent';
import { Link } from 'react-router-dom';


class Friend extends Component {
  constructor() {
    super();
    this.state = {
      update: false
    }
  }

  update = () => {
    this.setState({
      update: !this.state.update
    })
  }

  render () {
    let pathid = "/friends/" + this.props.elem.id

    if(this.props.eventCreation){
      let curEvent = this.props.fetchedEvents.filter(elem =>{

        if(elem.id == this.props.eventCreation.eventId){
          return elem
        }
        // if(parseInt(elem.id) == parseInt(this.props.eventCreation.eventId)){
        //   return elem
        // }
      })

      // this drills down to the inviteesObj
      let inviteesObj = curEvent[0].inviteesObj;

      // takes value from each element of inviteesObj
      var rsvpText = null
      for (let id in inviteesObj){
        if(id.toString() === this.props.elem.id.toString()){
          rsvpText = inviteesObj[id]
        }
      }


      var inviteRSVP = () => {
        inviteesObj[this.props.elem.id.toString()] = "invited";
        this.props.putEventRSVPAction(curEvent[0].id, inviteesObj)
        rsvpText = "Invited!"
        this.update()
      }



    }

    // THIS INDICATES THE BUG
    // console.log('joey?', this.props.elem.username, this.props.elem.id, this.props.eventCreation.eventId, rsvpText);


    return (
      <div>
        <div className="link friendBox">
          <Link to={pathid}>
            <div className="friendNameBox center">
              {this.props.elem.username}
            </div>

            <div className="friendImageBox">
              <img src={this.props.elem.picUrl} className="friendImageImg"/>
            </div>
          </Link>
        </div>
        <div className="rsvpTextBox">
          {this.props.eventCreation.eventId == this.props.elem.id ? <h5 className="rsvpText">invited</h5> : rsvpText ? <h5 className="rsvpText">{rsvpText}</h5> : <button onClick={inviteRSVP} className="btn btn-primary" type="submit">invite</button>}

        </div>
      </div>
    )
    // THIS IS A BUG. A FEW FRIENDS RECEIVE THIS
    // "INVITED"  (ON THE LAST LINES) BECAUSE THEY
    // AREN'T ASSIGNED rsvpText
  }
}

function mapStateToProps(state, props){
  return {
    getFriends: state.getFriends,
    eventCreation: state.eventCreation
  }
}

function matchDispatchToProps(dispatch){
  return {
    putEventRSVPAction: bindActionCreators(putEventRSVP, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Friend);
