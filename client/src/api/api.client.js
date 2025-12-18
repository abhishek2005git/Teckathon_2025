import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api/analyze', // Matches your backend port
  withCredentials: true,
});

export const analyzeUrl = async (url) => {
  const response = await api.post('/check-url', { url });
  return response.data;
};