import axios from 'axios';


export const getFriends = () => {
  // console.log('getfriends action reached');
  return {
    type: "GET_FRIENDS",
    payload: axios.get(`http://localhost:1337/users`)
  }
}

export const getFriend = (myId) => {
  console.log("getfriend action, myId: ", myId)
  return {
    type: "GET_FRIEND",
    payload: axios.get(`http://localhost:1337/users/${myId}`)
  }
}

export const putDate = (dateFreeArr, userId) => {
  // console.log('putDate action: date, dateArr',  dateFreeArr, userId);
  return {
    type: "PUT_DATE",
    payload: axios.put(`http://localhost:1337/users/${userId}`,
      {
        "dateFreeArr": [...dateFreeArr]
      }
    )
  }
}

export const putFriendRequestArray = (friendRequestsArr, friendId) => {
  // console.log('putFriendRequestArray action: ',  friendRequestsArr, friendId);
  return {
    type: "PUT_FRIEND_REQUEST_ARRAY",
    payload: axios.put(`http://localhost:1337/users/${friendId}`,
      {
        "friendRequestsArr" : [...friendRequestsArr]
      }
    )
  }
}

export const putFriendsArray = (friendsArr, friendId) => {
  // console.log('putFriendsArray action: ',  friendsArr, friendId);
  return {
    type: "PUT_FRIENDS_ARRAY",
    payload: axios.put(`http://localhost:1337/users/${friendId}`,
      {
        "friends" : [...friendsArr]
      }
    )
  }
}

// export const friendsReqArrState = (friendsReqArr) => {
//   // console.log("action: friendsReqArrState", friendsReqArr);
//   return {
//     type: "FRIENDS_REQ_ARR_STATE",
//     payload: friendsReqArr
//   }
// }
//
//
// export const friendsArrState = (friendsArr) => {
//   // console.log("action: friendsArrState", friendsArr);
//   return {
//     type: "FRIENDS_ARR_STATE",
//     payload: friendsArr
//   }
// }

export const getLoggedInUser = (myId) => {
  // console.log("getfriend action, myId: ", myId)
  return {
    type: "GET_LOGGED_IN_USER",
    payload: axios.get(`http://localhost:1337/users/${myId}`)
  }
}
