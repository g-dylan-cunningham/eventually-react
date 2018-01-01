import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginGroup from './login/LoginGroup';
import FriendsGroup from './friends/FriendsGroup';
import FriendsShowGroup from './friendsShow/FriendsShowGroup';
import Calendar from './views/Calendar';
import EventCreate from './views/EventCreate';
import EventCreate1 from './views/EventCreate1';
import EventCreate2 from './views/EventCreate2';
import EventCreate3 from './views/EventCreate3';
import EventCreate4 from './views/EventCreate4';
import EventShow from './views/EventShow';
import Friends from './views/Friends';
import FriendsShow from './views/FriendsShow';
import PageNotFound from './views/PageNotFound';
import Root from './views/Root';
import LoginLanding from './views/LoginLanding';


class Main extends Component {

  render () {

    return (
      <main>
        <Switch>
          <Route exact path="/" render={props => <Root {...props} /> } />
          <Route exact path="/events/:id" render={props => <EventShow {...props} /> } />
          <Route exact path="/event/create/1" render={props => <EventCreate1 {...props} /> } />
          <Route exact path="/event/create/2" render={props => <EventCreate2 {...props} /> } />
          <Route exact path="/event/create/3" render={props => <EventCreate3 {...props} /> } />
          <Route exact path="/event/create/4" render={props => <EventCreate4 {...props} /> } />
          <Route exact path="/friends" render={props => <Friends {...props} /> } />
          <Route exact path="/friends/:id" render={props => <FriendsShow {...props} /> } />
          <Route exact path="/calendar" render={props => <Calendar {...props} /> } />
          <Route exact path="/login" render={props => <LoginLanding {...props} /> } />
          <Route exact path="/404" component={PageNotFound} />
        </Switch>
      </main>
    )
  }
}

// function mapStateToProps(state, props){
//   return {
//     example1: state.example
//   }
// }
//
// function matchDispatchToProps(dispatch){
//   return {
//     exampleAction: bindActionCreators(example, dispatch)
//   }
// }


export default /*connect(mapStateToProps, matchDispatchToProps)*/(Main);
