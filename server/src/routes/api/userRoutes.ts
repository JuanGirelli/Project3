import {Router} from 'express';
const router = Router();

import {
    createUser,
    getUsers,
    deleteUser,
} from '../../controllers/userController.js';

// POST /api/users
router.route('/').post(createUser);

// GET /api/users
router.route('/').get(getUsers);

// DELETE /api/users/:id
router.route('/:id').delete(deleteUser);

export { router as userRoutes };