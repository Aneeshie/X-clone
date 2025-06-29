import express from "express"
import { login, logout, signIn } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/signup", signIn);
router.get("/login", login);
router.get("/logout", logout);

export default router;
