

export default (state = [], action) => {
  switch (action.type){
    case "SIGNUP_PENDING":
      return state;
    case "SIGNUP_FULFILLED":
      return [...action.payload.data];
    default:
      return state;
  }
}
