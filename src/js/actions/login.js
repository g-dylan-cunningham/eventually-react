import axios from 'axios';



// export const getGiftees = (giftees) => {
//   return {
//     type: "GET_GIFTEES",
//     payload: axios.get("https://gifted-q3-project.herokuapp.com/giftees")
//   }
// }
//
export const login = (username, password) => {
  // console.log('login action reached', username, password);
  return {
    type: "LOGIN",
    payload: axios.get(`http://localhost:1337/users/?username=${username}&password=${password}`)
  }
}

// export const refresh = (userId) => {
//   // console.log('login Refresh action reached',userId);
//   return {
//     type: "REFRESH",
//     payload: axios.get(`http://localhost:1337/users/${userId}`)
//   }
// }

export const logout = () => {
  // console.log('ACTION: LOGOUT');
  return {
    type: "LOGOUT"
  }
}
