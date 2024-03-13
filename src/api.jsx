import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://solar-calculator-server.vercel.app/get'
});
