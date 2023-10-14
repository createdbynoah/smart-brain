import express from 'express';
const router = express.Router();

import { getFaceRecognition } from './controllers/faceRecognitionController.js';
import {
  loginUser,
  registerUser,
  getUserProfile,
} from './controllers/userController.js';

router.route('/login').post(loginUser);
router.route('/register').post(registerUser);
router.route('/profile/:id').get(getUserProfile);

router.route('/image').post(getFaceRecognition);

export default router;
