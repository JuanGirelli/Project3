import { Router } from 'express';
import { userRoutes } from './userRoutes.js';
import { scoreRoutes } from './scoreRoutes.js';
import { authRoutes } from './authRoutes.js';

const router = Router();

router.use('/users', userRoutes);
router.use('/scores', scoreRoutes);
router.use('/auth', authRoutes);

export default router;