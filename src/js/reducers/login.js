const initialState = {
  loggedIn: false,
  userData: {}
}

export default (state = initialState, action) => {
  // console.log("reducer login");
  switch (action.type){
    case "LOGIN_PENDING":
      return state;
    case "LOGIN_FULFILLED":
      if(action.payload.data[0]){
        return {
          loggedIn: true,
          userData: action.payload.data[0]
        };
      } else {
        return {
          loggedIn: false,
          userData: false,
        }
      }

      case "REFRESH_PENDING":
        return state;
      case "REFRESH_FULFILLED":
   // console.log('REFRESH_FULFILLED', action.payload.data);
        return {
          ...state,
          userData: action.payload.data
        };




    case "LOGOUT":
    // console.log("REDUCER: LOGOUT");
      return {
        ...state,
        loggedIn: false,
        userData: {}
      }
    default:
      return state;
  }
}
