import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
});

const getUserProfile = asyncHandler(async (req, res) => {
  const { id } = req.params;
});

export { loginUser, registerUser, getUserProfile };
