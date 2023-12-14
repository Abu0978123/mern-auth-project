import express from 'express';
import { sign, signup } from '../controllers/auth.controller.js';

const router = express.Router()

router.post('/sign-up', signup)
router.post('/sign-in', sign)

export default router;  