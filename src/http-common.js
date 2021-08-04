import axios from 'axios';

export default axios.create({
baseURL: 'https://rickandmortyapi.com/api/character/',
headers: {
  "Content-type": "application/json"
  }
});
