import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { createEvent } from '../../actions/getEvent';


class EventCreate extends Component {
  constructor() {
    super();
    this.state = {
      title: null,
      body: null,
      picUrl: null,
      eventStatus: null
    }
  }

  render () {



    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <form
              onSubmit={e => { this.props.createEventAction({
                title: this.state.title,
                body: this.state.body,
                picUrl: this.state.picUrl,
                eventStatus: this.state.eventStatus,
                creatorId: this.props.login.userData.id
              })
              e.preventDefault();
              // this.resetState();
              e.target.reset();
            }}

            >
              <input className="form-control" name="title" placeholder="Event Name" onChange={e => this.setState({title: e.target.value})}/>

              <input className="form-control" name="body" placeholder="Description" onChange={e => this.setState({body: e.target.value})}/>

              <input className="form-control" name="picUrl" placeholder="Pic URL" onChange={e => this.setState({picUrl: e.target.value})}/>

              <div className="form-group">
                <input type="submit" className="btn btn-primary" />
              </div>

            </form>
          </div>
        </div>


      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    login: state.login
  }
}

function matchDispatchToProps(dispatch){
  return {
    createEventAction: bindActionCreators(createEvent, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(EventCreate);
