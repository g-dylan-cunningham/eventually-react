let initialState = {
  eventId: null,
  invitees: []
}



export default (state = initialState, action) => {
  switch(action.type){
    case "SELECT_EVENT":
 // console.log('reducer SELECT_EVENT', action.payload);
      return {...state, eventId: action.payload}
    default:
      return state;
  }
}
