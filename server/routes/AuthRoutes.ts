import  express  from "express";
import { loginUser, logoutUser, registerUser, verifyUser } from "../controller/AuthController.js";
import protect from "../middlewares/auth.js";


const AuthRouter = express.Router();

AuthRouter.post('/register', registerUser)
AuthRouter.post('/login', loginUser)
AuthRouter.get('/verify', protect , verifyUser)
AuthRouter.post('/logout', logoutUser)


export default AuthRouter;