import axios from 'axios';

// Set the base URL for the API
const API_URL = 'http://localhost:3001/api/users'; // Replace with your back-end URL if different

// Get all users
export const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get a single user by ID
export const getSingleUser = async (userId: string) => {
  const response = await axios.get(`${API_URL}/${userId}`);
  return response.data;
};

// Create a new user (for admin purposes)
export const createUser = async (userData: { username: string; email: string; password: string }) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};

// Update user by ID
export const updateUser = async (userId: string, updatedData: Partial<{ username: string; email: string; password: string }>) => {
  const response = await axios.put(`${API_URL}/${userId}`, updatedData);
  return response.data;
};

// Delete user by ID
export const deleteUser = async (userId: string) => {
  const response = await axios.delete(`${API_URL}/${userId}`);
  return response.data;
};

