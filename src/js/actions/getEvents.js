import axios from 'axios';



export const getEvents = () => {
  // console.log('getEvents action reached');
  return {
    type: "GET_EVENTS",
    payload: axios.get(`http://localhost:1337/events`)
  }
}

export const findEventByCreatorId = (creatorId) => {
  // console.log('findEventByCreatorId', creatorId);
  return {
    type: "FIND_EVENT_BY_CREATOR_ID",
    payload: axios.get(`http://localhost:1337/events/findEventByCreatorId/${creatorId}`)
  }
}




// export const getEvent = (eventId) => {
//   console.log("getEvent action, myId: ", eventId)
//   return {
//     type: "GET_EVENT",
//     payload: axios.get(`http://localhost:1337/events/${eventId}`)
//   }
// }
//
//
// export const putEvent = (eventId, invitees) => {
//   console.log('putEvent action reached', eventId, invitees);
//   return {
//     type: "PUT_EVENT",
//     payload: axios.put(`http://localhost:1337/events/${eventId}`,
//       {
//         invitees
//       }
//
//
//     )
//   }
// }
