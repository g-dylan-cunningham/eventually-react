import React, { Component } from 'react';
import DateBox from '../calendar/DateBox';
import DayBox from '../calendar/DayBox';
import MonthControl from '../calendar/MonthControl';
var moment = require('moment');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom'
import { getFriend } from '../../actions/getFriends';

class Calendar extends Component {

  state = {

    monthChoser : 6
  }
  userId = this.props.login.userData.id

  componentDidMount(){
 // console.log('this.props - user id', this.props.login.userData.id);
    this.props.getFriendAction(this.userId)
  }

  prevMonth = () => {
    this.setState({
      monthChoser: this.state.monthChoser -1
    })
  }

  nextMonth = () => {
    this.setState({
      monthChoser: this.state.monthChoser + 1
    })
  }



  render () {
    if (!this.props.login.loggedIn) {
      return (
        <Redirect to={ '/login'}/>
      )
    }

    // POPULATES AN ARRAY WITH DATES WELL INTO FUTURE
    var startDate = new Date("2017-10-01");
    var endDate = new Date("2019-10-27");
    var getDateArray = function(start, end) {
        var arr = [];
        var dt = new Date(start);
        while (dt <= end) {
            var tempDate = new Date(dt)
            arr.push(moment(tempDate).format('YYYY-MM-DD'));
            dt.setDate(dt.getDate() + 1);
        }
        return arr;
    }
    let dateArr = getDateArray(startDate, endDate);

    // DAY NAMES ARE DEFINED AND MAPPED
    let dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    let thedaynames = dayNames.map((elem, i) => {
      return <DayBox key={i} day={elem} />
    })

    // TEMPORARY MONTH CHOOSER
    let YrMoArr = ["2017-07", "2017-08", "2017-09" ,"2017-10", "2017-11", "2017-12", "2018-01", "2018-02", "2018-03", "2018-04", "2018-05", "2018-06", "2018-07", "2018-08", "2018-09", "2018-10", "2018-11", "2018-12","2019-01", "2019-02", "2019-03", "2019-04", "2019-05", "2019-06", "2019-07", "2019-08", "2019-09", "2019-010", "2019-11", "2019-12"]


    // GETS SUNDAY BEFORE "firstOfMo"
    var firstofMo = moment(YrMoArr[this.state.monthChoser]+"-01", "YYYY-MM-DD");
    var sunday = firstofMo.day("sunday");
    var calStart = sunday.format("YYYY-MM-DD");
    calStart = moment(calStart).subtract(1, "days")
    // console.log("calStart", calStart)

    // GETS LAST SATURDAY AFTER 'endOfMo'
    var endOfMo = moment(YrMoArr[this.state.monthChoser]+"-01", "YYYY-MM-DD");
    var calTest = moment(endOfMo).endOf('month')
    var calEnd = moment(calTest.day(6))//.format("YYYY-MM-DD");
    // console.log('calEnd', calEnd);

    // POPULATES ONE MONTH CALENDAR VIEW
    let thedates = dateArr
    .filter(elem => {
      if(moment(elem).isBetween(calStart, calEnd)) return elem;
    })
    .map((elem, i)=> <DateBox key={i} index={i}
        element={elem}
        currMonth={YrMoArr[this.state.monthChoser]}
        getFriend={this.props.getFriends}
        monthChoser={this.state.monthChoser}
    />
    )
    // console.log('calendar state', this.state);
    return (
      <div className="container">
        <div className="calShell margin-top">
          <div className="monthHeadComp">
            <MonthControl
              YrMoArr={YrMoArr}
              nextMonth={this.nextMonth}
              prevMonth={this.prevMonth}
              monthChoser={this.state.monthChoser}

            />
          </div>
          {this.props.getFriends ? thedaynames : ''}
          {this.props.getFriends ? thedates : console.log('no getFriend', this.props)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    login: state.login,
    getFriends: state.getFriends
  }
}

function matchDispatchToProps(dispatch){
  return {
    getFriendAction: bindActionCreators(getFriend, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Calendar);
