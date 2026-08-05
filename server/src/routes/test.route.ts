import { Router } from "express";
import { testDatabase } from "../controllers/test.controller";

const router = Router();

router.get("/", testDatabase);

export default router;