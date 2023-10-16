import express from 'express';
const router = express.Router();

import {
  getFaceRecognition,
  incrementUserImageCount,
} from './controllers/imageController.mjs';
import {
  loginUser,
  registerUser,
  getUserProfile,
} from './controllers/userController.mjs';

router.route('/login').post(loginUser);
router.route('/register').post(registerUser);
router.route('/profile/:id').get(getUserProfile);

router.route('/image').post(getFaceRecognition);
router.route('/imagecount').put(incrementUserImageCount);

export default router;
