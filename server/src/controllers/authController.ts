import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    // Find user by username
    const user = await User.findOne({ username });

    // If the user is not found
    if (!user) {
      console.log('User not found: ', username);
      return res.status(401).json({ message: 'Authentication failed at username' });
    }

    // Compare password
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      console.log('Invalid password for user: ', username);
      return res.status(401).json({ message: 'Authentication failed at password' });
    }

    // Create JWT token
    const secretKey = process.env.JWT_SECRET_KEY || '';
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

    // Send response with the token
    return res.json({ token });
  } catch (error) {
    console.error('Error during login: ', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
