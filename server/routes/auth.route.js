import express from 'express';
import { google, sign, signup } from '../controllers/auth.controller.js';

const router = express.Router()

router.post('/sign-up', signup)
router.post('/sign-in', sign)
router.post('/google', google)

export default router;  