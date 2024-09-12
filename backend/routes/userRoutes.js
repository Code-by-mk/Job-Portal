import express from "express";
import { login, register, logout, getUser, Otpverification } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";

const router = express.Router();

router.post("/register", register);
router.post('/verify-otp', Otpverification);
router.post("/login",isAuthenticated, login);
router.get("/logout", isAuthenticated, logout);
router.get("/getuser", isAuthenticated, getUser);

export default router;
