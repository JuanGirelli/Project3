import { Request, Response } from 'express';
import { User, Score } from '../models/index.js';

// Create a new user
export const createUser = async (req: Request, res: Response) => {
    try {
        const { username, password, email } = req.body;
        const user = new User({ username, password, email });
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
};

// Get all users
export const getUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
};

// Delete a user by ID
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        await Score.deleteMany({ userId: id });

        const result = await User.findByIdAndDelete(id);

        if (result) {
            res.status(200).json({ message: 'User deleted' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting user' });
    }
};
