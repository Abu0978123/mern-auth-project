import express from "express";
import { getData, test, updateData } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get('/test', test)
router.get('/', getData)
router.post('/update/:id', verifyToken, updateData)

export default router;