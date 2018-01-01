import axios from 'axios';



// export const getEvents = () => {
//   // console.log('getEvents action reached');
//   return {
//     type: "GET_EVENTS",
//     payload: axios.get(`http://localhost:1337/events`)
//   }
// }

export const getEvent = (eventId) => {
  // console.log("getEvent action, myId: ", eventId)
  return {
    type: "GET_EVENT",
    payload: axios.get(`http://localhost:1337/events/${eventId}`)
  }
}


export const putEvent = (eventId, inviteesObj) => {
  // console.log('putEvent action reached', eventId, invitees);
  return {
    type: "PUT_EVENT",
    payload: axios.put(`http://localhost:1337/events/${eventId}`,
      {
        inviteesObj
      }
    )
  }
}

export const createEvent = (input) => {
  // console.log('createEvent action', input);
  return {
    type: "CREATE_EVENT",
    payload: axios.post(`http://localhost:1337/events`, input)
  }
}


export const putEventRSVP = (eventId, inviteesObj) => {
  // console.log('putEvent action reached', eventId, inviteesObj);
  return {
    type: "PUT_EVENT_RSVP",
    payload: axios.put(`http://localhost:1337/events/${eventId}`,
      {
        inviteesObj
      }
    )
  }
}

export const putEventStatus = (eventId, status) => {
  // console.log('action putEventStatus', eventId);
  return {
    type: "PUT_EVENT_STATUS_INVITED",
    payload: axios.put(`http://localhost:1337/events/${eventId}`,
      {
        "eventStatus": status
      }
    )
  }
}
