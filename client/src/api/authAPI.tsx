import axios from 'axios';
import { UserLogin } from "../interfaces/UserLogin";

// Set the base URL for the API
const API_URL = 'http://localhost:3001'; // Replace with your back-end URL if different


export const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(userInfo)
    });

    const data = await response.json();

    if(!response.ok) {
      throw new Error('User information not retrieved, check network tab!');
    }

    return data;
  } catch(err) {
    console.log('Error from user login: ', err);
    return Promise.reject('Could not fetch user info');
  }
}

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