# Quiz Quest

## Description
Project3 is a full-stack MERN application designed to provide a seamless and modern user experience for managing and retrieving data through an interactive web interface. Leveraging React for the front-end, Express.js and GraphQL for the backend, and MongoDB for database management, this project uses a Trivia API to load quiz questions and keeps track of the highest score of the user.

![Home Page Screenshot](./assets/HomePage.png)

![Quiz Page Screenshot](./assets/QuizPage.png)

![Scoreboard Page Screenshot](./assets/ScoreboardPage.png)

## **Table of Contents**
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [License](#license)

---

## Features
- User authentication with JWT and bcrypt
- Dynamic trivia quiz questions fetched from an external API
- High-score tracking for users
- Interactive UI with React and React-Bootstrap
- GraphQL API for efficient data retrieval
- Persistent data storage using MongoDB
- Secure API access with CORS and dotenv

## Technologies Used
- **Front-End:** React, React Bootstrap, React Router Dom, Axios, Vite, TypeScript
- **Back-End:** Express.js, GraphQL, MongoDB (Mongoose), JWT, Bcrypt, CORS, Dotenv
- **Trivia API:** Used for retrieving trivia questions dynamically
- **Development Tools:** Nodemon, Concurrently, ESLint, Vite
- **Deployment:** Render (configured with deployment scripts)

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (latest stable version)
- MongoDB (local or cloud-based)
- npm or yarn package manager

### Steps
1. Clone the repository:
   ```sh
    git clone https://github.com/yourusername/Project3.git
   cd Project3
   ```
2. Install dependencies for both backend and frontend:
   ```sh
   npm install
   ```
3. Set up the `.env` file:
   ```env
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   TRIVIA_API_KEY=your-trivia-api-key
   ```
4. Start the backend server:
   ```sh
   npm run server
   ```
5. Start the frontend React application:
   ```sh
   npm run client
   ```

## Usage
- Start the backend server:
  ```sh
  npm run start
  ```
- Test API routes using Insomnia or Postman:
  - **Fetch Trivia Questions:** `GET /api/trivia`
  - **User Registration::** `POST /api/users/register`
  - **User Login:** `POST /api/users/login`
  - **Submit Score:** `POST /api/score`

## Database Schema
```json
{
  "_id": "ObjectId",
  "username": "String",
  "email": "String",
  "password": "String (hashed)",
  "highScore": "Number",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## Seeds
To seed the database with initial users, run:
```sh
npm run seed
```

## API Endpoints
### User Authentication
- **POST** `/api/users/register` - Registers a new user.
  - **Required fields:** `username`, `email`, `password`.
- **POST** `/api/users/login` - Authenticates a user and returns a JWT token.
  - **Required fields:** `email`, `password`.

### Protected Routes
- **GET** `/api/protected` - Fetches protected user data (requires authentication).


## Deployment
- **Render Live Website:** [Deployed Application](https://project3-1-dx6i.onrender.com)

## License
This project is licensed under the **MIT License**.

## Breakdown of Tasks and Roles
- **Front-End Development:** UI design, state management, API calls using Axios (**Tabari & Juan**)
- **Back-End Development:** GraphQL API setup, database schema modeling, authentication (**Harris**)
- **Trivia API Integration:** Fetching and displaying trivia questions dynamically (**Tabari**)
- **Testing & Deployment:** Debugging, performance optimization, hosting on Render (**Juan, Tabari, Harris**)

## DeployWeb
- **Render Live Website:** [Deployed Application](https://project3-1-dx6i.onrender.com)

## License
This project is licensed under the **MIT License**.
