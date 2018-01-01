import axios from 'axios';



// export const getEvents = () => {
//   // console.log('getEvents action reached');
//   return {
//     type: "GET_EVENTS",
//     payload: axios.get(`http://localhost:1337/events`)
//   }
// }


// THIS IS ALL AVAILABLE FROM GET/USERS/ID
// export const getDate = (date, userId) => {
//   console.log("getDate action: date, userId", date, userId)
//   return {
//     type: "GET_DATE",
//     payload: axios.get(`http://localhost:1337/users/${userId}`)
//   }
// }


// export const putDate = (dateFreeArr, userId) => {
//   // console.log('putDate action: date, dateArr',  dateFreeArr, userId);
//   return {
//     type: "PUT_DATE",
//     payload: axios.put(`http://localhost:1337/users/${userId}`,
//       {
//         "dateFreeArr": [...dateFreeArr]
//       }
//     )
//   }
// }
