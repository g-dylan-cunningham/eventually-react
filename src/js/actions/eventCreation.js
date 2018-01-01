export const selectEvent = (eventId) => {
  console.log('action: selectEvent');
  return {
    type: "SELECT_EVENT",
    payload: eventId
  }
}
