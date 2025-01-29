import express from 'express';
import routes from './routes/index.js';
import db from './config/connection.js';
import seedDatabase from './utils/seed.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

await db();

const PORT = process.env.PORT || 3001;
const app = express();

// Apply CORS middleware before routes
app.use(
  cors({
    origin: 'http://localhost:5173', // Frontend URL
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  })
);

// Middleware for serving static files
app.use(express.static('../client/dist'));

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use API routes
app.use(routes);

// Seed the database
(async () => {
  await seedDatabase();
})();

// Start the server
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
