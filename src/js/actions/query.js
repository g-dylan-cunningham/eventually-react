import axios from 'axios';

export const query = (query) => {
  console.log('action: query ', query);
  return {
    type: "QUERY",
    payload: axios.get(`http://localhost:1337/users/findUserByUsername/${query}`)
  }
}
