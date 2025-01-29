import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import dotenv from 'dotenv';
dotenv.config();

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    // Validate request payload
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Compare password
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Verify the JWT secret key
    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
      throw new Error('JWT_SECRET_KEY is not defined in the environment variables');
    }

    // Create JWT token
    const token = jwt.sign({ userId: user._id, username: user.username }, secretKey, { expiresIn: '1h' });

    // Send response with the token
    return res.status(200).json({ token });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error during login:', error.message);
    } else {
      console.error('Error during login:', error);
    }
    return res.status(500).json({ message: 'Internal server error' });
  }
};
