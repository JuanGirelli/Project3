import { Router } from 'express';
import { userRoutes } from './userRoutes.js';
import { scoreRoutes } from './scoreRoutes.js';
import { authRoutes } from './authRoutes.js';
import { triviaRoutes } from './triviaRoutes.js';

const router = Router();

router.use('/users', userRoutes);
router.use('/scores', scoreRoutes);
router.use('/auth', authRoutes);
router.use('/trivia', triviaRoutes);

export default router;