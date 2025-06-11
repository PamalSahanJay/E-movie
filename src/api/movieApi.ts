import axios from 'axios';

export const moveieBaseURL = axios.create({
  baseURL: "https://www.omdbapi.com"
});