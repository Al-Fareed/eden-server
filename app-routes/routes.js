import express from "express";
const router = express.Router();
import { phonePeContoller } from "../controllers/gateway.js";

router.post('/phonepe',phonePeContoller);

export default router;