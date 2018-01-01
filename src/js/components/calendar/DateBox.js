import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { putDate } from '../../actions/getFriends';
import DateBoxEvent from './DateBoxEvent';


class DateBox extends Component {

  state = {
    selected: false,
    updated: false,
    updatingTF: false,
    monthChoser: null
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.monthChoser != this.props.monthChoser){
      this.setState({
        selected: false
      })
    }
    if(nextProps.getFriend != this.props.getFriend){
      this.setState({
        updated: true,
      })

    }
    if(nextProps.getFriend.friend.dateFreeArr.includes(nextProps.element)){
      this.setState({
        selected: true
      })
    } else {
      this.setState({
        selected: false
      })
    }
  }

  onClick = () => {

    // original from array from redux we're going to
    let origArr = this.props.getFriend.friend.dateFreeArr;
    // modify according to if it's selected or not
    let modifiedArr

    if(origArr.includes(this.props.element)){
      modifiedArr = origArr.filter(el => el != this.props.element)
    } else {
      modifiedArr = origArr.concat(this.props.element)
    }



    // this is updating the dateFreeArr in mongo
    this.props.putDateAction(modifiedArr, this.props.login.userData.id)

    var element = this.props.element;
    var userId = this.props.login.userData.id
  }


  render () {

    var todaysEvents = []
    let getMyEvents = () => {
      let eventObj = this.props.getFriend.friend.eventObj
      // console.log('eventObj', eventObj);

      for(event in eventObj){
        let eventDate = eventObj[event].toString();
        let todaysDate = this.props.element.toString()
        // console.log('event', eventDate, todaysDate )
        if(eventDate == todaysDate){
          // console.log("eventsss", event)
          todaysEvents.push(event)
        }
      }
      return todaysEvents.map(elem => <li className="eventLi"><DateBoxEvent key={elem.id} id={elem} /></li>)
    }

    let currMonth = this.props.currMonth
    let elem = this.props.element
    let index = this.props.index
    let selected = this.state.selected



    return (

        <div id={currMonth !== elem.substring(0,7) ? "grey" : ""} className={selected ? "dateBox green" : "dateBox"} onClick={this.onClick}>
          <h6 id="monDay">{elem.substring(5, 10)}</h6>
          {this.state.updated ? <ul className="eventUl">{getMyEvents()}</ul> : ""}
        </div>

    )
  }
}

function mapStateToProps(state, props){
  return {
    login: state.login,
    putDate: state.putDate
  }
}

function matchDispatchToProps(dispatch){
  return {
    putDateAction: bindActionCreators(putDate, dispatch)

  }
}

export default connect(mapStateToProps, matchDispatchToProps)(DateBox);
