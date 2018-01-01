import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import EventHeader3 from '../createEvent/EventHeader3'
import { getFriends } from '../../actions/getFriends';
import Event3Events from '../createEvent/Event3Events';
import moment from 'moment';

class EventCreate3 extends Component {
  constructor() {
    super();
    this.state = {
      viewByRSVP: true
    }
  }
  componentWillMount(){
    this.props.getFriendsAction();

  }


  clickHandler = () => {
    this.setState({
      viewByRSVP: !this.state.viewByRSVP
    })
  }





  render () {
    if (!this.props.login.loggedIn) {
      return (
        <Redirect to={ '/login'}/>
      )
    }


    // arr = user's friends array of objects
    // friendsArr = an array of their friends user's ids
    function getAvailabilityObject(arr, friendsArr){
      var result = {}
      for (let keys in arr){
        if(friendsArr.includes(arr[keys].id)){
          for (let i = 0; i < arr[keys].dateFreeArr.length; i++ ){
            if(result[arr[keys].dateFreeArr[i]] === undefined){
              result[arr[keys].dateFreeArr[i]] = [arr[keys].username]
            } else {
              result[arr[keys].dateFreeArr[i]] = result[arr[keys].dateFreeArr[i]].concat(arr[keys].username)
            }
          }
        }

      }
      return result
    }

    if(this.props.getFriends){
   // console.log('eventCreation', this.props.eventCreation);
      // console.log('eventCreate3', this.props.login.userData.dateFreeArr);

      // 1. lets start with all users
      let allUsers = this.props.getFriends.user;
   // console.log('allUsers', allUsers);

      // 2. now, here's an object with invited users as keys
      let inviteesObj = this.props.getEvent.event.inviteesObj;
   // console.log('getEvent: inviteesObj', inviteesObj)

      // 3. here's a function for filtering out uninvited users
      var invitedUsers = []
      function filterOutUninvited(allArr, invitedObj){
        var invitedArr = [];
        for(let invitee in invitedObj){
          console.log('eventCreate3, invitee', invitee);
          invitedArr.push(invitee)
        }
        allUsers.filter(elem => {
          console.log('eventCreate3 elem', elem);
          // if(invitedArr.includes(elem.id.toString())){
          if(invitedArr.includes(elem.id)){
            invitedUsers.push(elem)
          }

        })
        return invitedUsers
      }

      // 4. Lets get only the relevant users
      let filteredInvitees = filterOutUninvited(allUsers, inviteesObj)


      // an array of the logged in user's free days
      let dateFreeArr = this.props.login.userData.dateFreeArr


      let friendsArray = this.props.login.userData.friends


      var result = getAvailabilityObject(filteredInvitees, friendsArray);
      // console.log('result', result)

      // THE FOLLOWING 2 FUNCTIONS SORT OUR RESULT DATA
      function sortByDate(obj){
      // lets make an array we can sort
      var sortable = [];
      // push object values inside
      for (var date in obj) {
        // is this date in the future?
        if(moment(date).isAfter(new Date(), "day")){
          sortable.push([date, obj[date]]);
        }
      }
      return sortable.sort(function(a, b) {
        //strip out the dashes
        let firstElem = parseInt(a[0].replace(/-/g, ''))
        let secondElem = parseInt(b[0].replace(/-/g, ''))
          return firstElem - secondElem;
      });
    }


    function sortByInviteesLength(obj){
      var sortable = [];
      for (var date in obj) {
        // use moment to filter out past dates
        if(moment(date).isAfter(new Date(), "day")){
          sortable.push([date, obj[date]]);
        }
      }
      // first sort it by date
      sortable.sort(function(a, b) {
        let firstElem = parseInt(a[0].replace(/-/g, ''))
        let secondElem = parseInt(b[0].replace(/-/g, ''))
          return firstElem - secondElem;
      });
      // now sort it by array length to tell use
      // which dates invitees are most available
      return sortable.sort(function(a, b) {
        let firstElem = a[1].length
        let secondElem = b[1].length
        // console.log("firstElem", firstElem)
          return secondElem - firstElem;
      });
    }
    // here's the result of the second sorting function
    let sortedByInviteesLengthArr = sortByInviteesLength(result)

    // here's the result of our first sorting function
    let sortedByDateArr = sortByDate(result)
 // console.log("sortedByDateArr", sortedByDateArr);

    // LETS DISPLAY RESULTS NOW:
    var thesorteddates = sortedByDateArr.map((elem, idx) => {
        return <Event3Events elem={elem} key={idx} invitedUsers={invitedUsers}/>
      })

    var thesortedinviteesarr = sortedByInviteesLengthArr.map((elem, idx) => {
        return <Event3Events elem={elem} key={idx} invitedUsers={invitedUsers}/>
      })
    }

    let eventId = this.props.eventCreation.eventId
    console.log('eventId', eventId);
    console.log('this.props.login', this.props.login);
    console.log('eventObj', this.props.login.userData.eventObj);

    // let selectedEventDate = null;
    // let eventObj = this.props.login.userData.eventObj
    // if(eventObj[eventId]){
    //   selectedEventDate = eventObj[eventId]
    // }

    // {selectedEventDate ? <h3 className="right" id="title">Date: {selectedEventDate.substring(5,10)}</h3> : ''}

    return (
      <div className="container margin-top">
        <EventHeader3 />
        <div id="event3Container" className="row ">
          <div className='col-md-4 '>
            <h3 className="right" id="title">Event: {this.props.getEvent.event.title}</h3>
            <button className="btn btn-primary right margin-top" onClick={this.clickHandler}>{this.state.viewByRSVP ? "sort by date" : "sort by availability"}</button>
          </div>
          <div className="col-md-7 col-md-offset-1">
            <div className="">
              {this.state.viewByRSVP ? '' : thesorteddates}
              {this.state.viewByRSVP ? thesortedinviteesarr : ''}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    login: state.login,
    getFriends: state.getFriends,
    eventCreation: state.eventCreation,
    getEvent: state.getEvent
  }
}

function matchDispatchToProps(dispatch){
  return {
    getFriendsAction: bindActionCreators(getFriends, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(EventCreate3);
