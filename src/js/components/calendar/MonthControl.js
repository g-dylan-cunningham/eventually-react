import React, { Component } from 'react';
var moment = require('moment');
class MonthControl extends Component {

  clickNext = () => {
    this.props.nextMonth()
  }

  clickPrev = () => {
    this.props.prevMonth()
  }


  render () {

    return (
      <div className="monthControl">
        <div className="monthControlChildBut">
          <button onClick={this.clickPrev} className="waves-effect waves-light btn btn-primary">Prev</button>
        </div>
        <div className="monthControlChild">
          <h4 id="title">{moment(this.props.YrMoArr[this.props.monthChoser]).format("MMMM YYYY")}</h4>
        </div>
        <div className="monthControlChildBut">

          <button onClick={this.clickNext} className="waves-effect waves-light btn btn-primary navbar-right">next</button>
        </div>



      </div>
    )
  }
}
export default MonthControl;
