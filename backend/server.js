import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

import routes from './routes.js';

const app = express();
const port = process.env.BACKEND_PORT || 3080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
