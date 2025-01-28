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
    console.log('User data: ', data.token);
    localStorage.setItem('id_token', data.token);
    //window.location.assign('/'); refresh page
    if(!response.ok) {
      throw new Error('User information not retrieved, check network tab!');
    }

    return data;
  } catch(err) {
    console.log('Error from user login: ', err);
    return Promise.reject('Could not fetch user info');
  }
}

// Register user
export const registerUser = async (userData: { username: string; email: string; password: string }) => {
  try {
    const response = await fetch(`${API_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    localStorage.setItem('id_token', data.token);
    console.log('User registered: ', data);
    //window.location.assign('/'); refresh page

    if (!response.ok) {
      throw new Error('User registration failed, check network tab!');
    }

    return data;
  } catch (err) {
    console.log('Error from user registration: ', err);
    return Promise.reject('Could not register user');
  }
};