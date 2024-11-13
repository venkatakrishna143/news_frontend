import axios from 'axios';
import { apiurl } from './urls';

// Create an Axios instance with a base URL and token headers
const api = axios.create({
  baseURL: apiurl, // Replace with your actual base URL
//   headers: {
//     'Authorization': `Bearer ${localStorage.getItem('token')}`, // Use the token from local storage or other source
//     'Content-Type': 'application/json'
//   }
});

export default api;
