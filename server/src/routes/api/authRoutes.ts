import {Router} from 'express';
const router = Router();

import {
    login,
} from '../../controllers/authController.js';

// POST /api/auth/login
router.route('/login').post(login);


export { router as authRoutes };