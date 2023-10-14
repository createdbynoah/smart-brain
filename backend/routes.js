import express from 'express';
const router = express.Router();

import { getFaceRecognition } from './controllers/faceRecognitionController.js';

router.route('/image').post(getFaceRecognition);

export default router;
