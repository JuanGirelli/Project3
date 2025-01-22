import {Router} from 'express';
const router = Router();

import {
    assignHighScoreForCategory,
    getHighScoresForUser,
    clearHighScoresForUser,
} from '../../controllers/scoreController.js';

// POST /api/scores
router.route('/').post(assignHighScoreForCategory);

// GET /api/scores/:userId
router.route('/:userId').get(getHighScoresForUser);

// DELETE /api/scores/:userId
router.route('/:userId').delete(clearHighScoresForUser);

export { router as scoreRoutes };