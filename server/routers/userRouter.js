import express from 'express'
import { signupUser } from '../controller/userController.js'
// this usercontroller in used to create for API's

const router = express.Router();
router.post('/signup',signupUser);


// export router for used in index.js
export default router;