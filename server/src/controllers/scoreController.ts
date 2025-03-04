import { Request, Response } from 'express';
import { Score } from '../models/index.js';

export const assignHighScoreForCategory = async (req: Request, res: Response) => {
    try {
      const { score, category } = req.body;
  
      // Use the userId from the decoded token
      const userId = req.user?.userId;
  
      if (!userId) {
        res.status(400).json({ error: 'User ID missing in token' });
        return;
      }
  
      const existingScore = await Score.findOne({ userId, category });
  
      if (existingScore) {
        if (score > existingScore.score) {
          existingScore.score = score;
          await existingScore.save();
          res.status(200).json({ message: 'High score updated!', score: existingScore });
        } else {
            res.status(200).json({ message: 'Score is lower than existing high score', score: existingScore });
        }
      } else {
        const newScore = new Score({ userId, score, category });
        await newScore.save();
        res.status(201).json({ message: 'New high score created!', score: newScore });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error assigning score' });
    }
  };
  

export const getHighScoresForUser = async (req: Request, res: Response) => {
    try {
        // Extract userId from req.user (set by authenticateToken middleware)
        const userId = req.user?.userId;

        // Find all scores for the given user
        const userScores = await Score.find({ userId })

        // Check if the user has any scores
        if (userScores.length === 0) {
            res.status(404).json({ message: 'No scores found for this user' });
        }
        else {
        // Return the high scores for the user
        res.status(200).json({ userScores });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving user scores' });
    }
};

export const clearHighScoresForUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const userScores = await Score.find({ userId })
        for (const score of userScores) {
            await score.deleteOne();  // Ensure each score is removed before continuing
        }
        res.status(200).json({ message: 'All scores deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting scores' });
    }
};