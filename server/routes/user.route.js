import express from "express";
import { getData, test } from "../controllers/user.controller.js";

const router = express.Router();

router.get('/test', test)
router.get('/', getData)

export default router;