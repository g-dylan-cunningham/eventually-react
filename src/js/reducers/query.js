export default (state = [], action) => {
  switch (action.type){
    case "QUERY_PENDING":
      return state;
    case "QUERY_FULFILLED":
 // console.log('reducer: query', action.payload.data);
      return [...action.payload.data]
    default:
      return state;
  }
}
