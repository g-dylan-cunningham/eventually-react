import { combineReducers } from 'redux';
import signUp from './signUp'
import login from './login'
import getFriends from './getFriends';
import getEvents from './getEvents';
import getEvent from './getEvent';
import findEventByCreatorId from './findEventByCreatorId';
import query from './query';
import eventCreation from './eventCreation';

const rootReducer = combineReducers({

  signUp,
  login,
  getFriends,
  getEvents,
  getEvent,
  findEventByCreatorId,
  query,
  eventCreation
})

export default rootReducer;
