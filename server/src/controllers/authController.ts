import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../models/index.js'; // Assuming you have a User model
import { signToken } from '../utils/auth.js'; // Import the signToken function

export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        // Find user by username
        const user = await User.findOne({ username });
        // check if user exists
        if (!user) {
            res.status(401).json({ error: 'Invalid username or password' });
            return;
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ error: 'Invalid username or password' });
            return;
        }

        // Generate JWT token
        const token = signToken(user.username, user.email, user._id);

        // Send token to the client
        res.status(200).json({ token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
