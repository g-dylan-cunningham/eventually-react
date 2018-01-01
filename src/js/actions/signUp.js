import axios from 'axios';



// export const getGiftees = (giftees) => {
//   return {
//     type: "GET_GIFTEES",
//     payload: axios.get("https://gifted-q3-project.herokuapp.com/giftees")
//   }
// }
//
export const signUp = (username, password, email, picUrl) => {
  // console.log('action reached', username, password);
  return {
    type: "SIGNUP",
    payload: axios.post("http://localhost:1337/users",
      {
        username: username,
        password: password,
        email: email,
        picUrl: picUrl,
        dateFreeArr: [],
        eventObj: {},
        friends: [],
        friendRequestsArr: []
      }
    )
  }
}
