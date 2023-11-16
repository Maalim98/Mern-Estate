import  express from "express";
import { signup } from "../controllers/auth.controller.js";
import SignIn from "../../client/src/pages/SignIn.jsx";


const router = express.Router();

router.post("/signup", signup);
router.post("/SigIn", SignIn);

export default router;