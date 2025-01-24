import axios from 'axios';

// Set the base URL for the API
const API_URL = 'http://localhost:3001/api/auth'; // Replace with your back-end URL if different

// Login user
export const loginUser = async (credentials: { username: string; password: string }) => {
  const response = await axios.post(`${API_URL}/login`, credentials, {
    withCredentials: true, // Ensures cookies (if any) are sent and received
  });
  return response.data;
};

// Register user
export const registerUser = async (userData: { username: string; email: string; password: string }) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

// Logout user
export const logoutUser = async () => {
  const response = await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
  return response.data;
};