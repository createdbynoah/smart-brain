import asyncHandler from 'express-async-handler';
import Sequelize from '../models/index.js';
const { User, LoginAttempt, Image, sequelize } = Sequelize;
import bcrypt from 'bcryptjs';

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: { email },
    include: [
      {
        model: Image,
        as: 'images',
      },
    ],
  });

  if (!user) {
    res.status(401);
    throw new Error('Invalid email or password');
  }
  const loginAttempt = await LoginAttempt.create({
    user_id: user.id,
    successful: false,
  });

  if (user && (await bcrypt.compare(password, user.password))) {
    loginAttempt.successful = true;
    await loginAttempt.save();
    res.json(user);
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password: bcrypt.hashSync(password, 12),
  });

  if (user) {
    res.status(201).json(user);
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  const { id } = req.params;
});

export { loginUser, registerUser, getUserProfile };
