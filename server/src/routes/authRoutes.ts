import {Router} from 'express';
const router = Router();
import { authenticateToken } from '../middleware/auth.js'; 

import {
    login,
} from '../controllers/authController.js';

// POST /auth/login
router.route('/login').post(login);

router.route('/profile').get(authenticateToken, (req, res) => {
    // The user data will be available in req.user after authenticateToken middleware
    res.status(200).json({ message: 'This is a protected profile route', user: req.user });
});


export default router;