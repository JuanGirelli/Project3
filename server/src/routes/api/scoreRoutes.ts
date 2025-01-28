import {Router} from 'express';
const router = Router();

import {
    assignHighScoreForCategory,
    getHighScoresForUser,
    clearHighScoresForUser,
} from '../../controllers/scoreController.js';

// POST /api/scores
/*
{
    "userId": "id",
    "score": Any #,
    "category": "String"
}
*/
router.route('/').post(assignHighScoreForCategory);

// GET /api/scores
router.route('/').get(getHighScoresForUser);

// DELETE /api/scores
router.route('/').delete(clearHighScoresForUser);

export { router as scoreRoutes };