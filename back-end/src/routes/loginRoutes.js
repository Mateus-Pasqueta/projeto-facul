import Router from "express-promise-router";
import loginController from "../controllers/loginControllers.js";
const router = Router();


router.post("/register", loginController.register);

router.post("/login", loginController.login);

export default router;