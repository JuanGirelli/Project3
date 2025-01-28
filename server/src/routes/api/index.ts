import { Router } from 'express';
import { userRoutes } from './userRoutes.js';
import { scoreRoutes } from './scoreRoutes.js';
import { authenticateToken } from '../../middleware/auth.js'; 

const router = Router();

router.use('/users', userRoutes);
router.use('/scores', authenticateToken, scoreRoutes);

export default router;