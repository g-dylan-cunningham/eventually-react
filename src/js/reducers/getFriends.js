const initialState = {
  user: null,
  friend: null,
  // friendsReqArr: [],
  // friendsArr: [],
  loggedInUser: null
}

export default (state = initialState, action) => {
  // console.log('in getFriends reducer');
  switch (action.type){
    case "GET_FRIENDS_PENDING":
      return state;
    case "GET_FRIENDS_FULFILLED":
      return  {...state, user: action.payload.data};



    case "GET_FRIEND_PENDING":
      return state;
    case "GET_FRIEND_FULFILLED":
 console.log('reducer GET_FRIEND', action.payload.data.id);



      return  {...state, friend: action.payload.data};

// IM NOT SURE THAT friendRequestsArr IS UPDATING IN
// REDUCER BUT IT IS ON THE SERVER
    case "PUT_FRIEND_REQUEST_ARRAY_PENDING":
      return state;
    case "PUT_FRIEND_REQUEST_ARRAY_FULFILLED":
    // console.log('putFriendRequestArray', action.payload.data);
      return  {...state, friend: action.payload.data};



    case "PUT_FRIENDS_ARRAY_PENDING":
      return state;
    case "PUT_FRIENDS_ARRAY_FULFILLED":
    // console.log('putFriendsArray', action.payload.data);
      return  {...state, friend: action.payload.data};




    case "PUT_DATE_PENDING":
        return state;
    case "PUT_DATE_FULFILLED":
        return {
          ...state,
          friend: action.payload.data
        };


        // HERE HOW IM TRYING TO FIX THIS LAST MINUTE
        // let user = state.user
        // let friend = action.payload.data
        //
        // let datefreearr = friend.dateFreeArr
        // let updateDates = () => {
        //   for(let aFriend in user){
        //     console.log('reducer aFriend', aFriend);
        //     if(user[aFriend].id === friend.id){
        //       console.log('reducer user[aFriend].dateFreeArr', user[aFriend].dateFreeArr);
        //       console.log('reducer datefreearr', datefreearr);
        //       user[aFriend].dateFreeArr = datefreearr
        //     }
        //   }
        //   return user
        // }
        // // now the single event is updated in the getEvents (w/ all events)
        //   return {...state, user: updateDates(), friend: action.payload.data}








    case "FRIENDS_REQ_ARR_STATE":
    // console.log('FRIENDS_REQ_ARR_STATE', action.payload);
      return  {...state, friendsReqArr: action.payload};

    case "FRIENDS_ARR_STATE":
    // console.log('FRIENDS_ARR_STATE', action.payload);
      return  {...state, friendsArr: action.payload};



    case "GET_LOGGED_IN_USER_PENDING":
      return state;
    case "GET_LOGGED_IN_USER_FULFILLED":
    // console.log("GET_LOGGED_IN_USER_FULFILLED", action.payload.data);
      return  {...state, loggedInUser: action.payload.data};

    default:
      return state;
  }
}
