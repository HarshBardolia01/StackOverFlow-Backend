import express from 'express';
import * as controller from '../controller/user.js';

const router = express.Router();

router.post(
    '/register', 
    controller.register
);

router.post(
    '/login', 
    controller.login
);

router.get(
    '/profile', 
    controller.profile
);

router.post(
    '/logout', 
    controller.logout
);

export default router;