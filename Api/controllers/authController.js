import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/**
 * @DESC User Login
 * @ROUTE /api/v1/auth/login
 * @method POST
 * @access public
 */
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // validation
  if (!email || !password)
    return res.status(404).json({ message: "All fields are required" });

  // find login user by email
  const loginUser = await User.findOne({ email });

  // user not found
  if (!loginUser) return res.status(404).json({ message: "User not found" });

  // password check
  const passwordCheck = await bcrypt.compare(password, loginUser.password);

  // password check
  if (!passwordCheck)
    return res.status(404).json({ message: "Wrong password" });

  // create access token
  const token = jwt.sign(
    { email: loginUser.email },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRE_IN,
    }
  );

  // create Refresh token
  const refreshToken = jwt.sign(
    { email: loginUser.email },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRE_IN,
    }
  );

  res.cookie("accessToken", token, {
    httpOnly: true,
    secure: process.env.APP_ENV == "Development" ? false : true,
    sameSite: "strict",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    token,
    user: loginUser,
    message: "User Login successfully",
  });
});

/**
 * @DESC Create new User
 * @ROUTE /api/v1/Auth/register
 * @method POST
 * @access public
 */
export const register = asyncHandler(async (req, res) => {
  const { name, email, phone, password, country, fundPassword, referId } =
    req.body;

  if (
    !name ||
    !email ||
    !password ||
    !fundPassword ||
    !phone ||
    !country ||
    !referId
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // check user email
  const userEmailCheck = await User.findOne({ email });

  if (userEmailCheck) {
    return res.status(400).json({ message: "Email already exists" });
  }
  // check user email
  const userPhoneCheck = await User.findOne({ phone });

  if (userPhoneCheck) {
    return res.status(400).json({ message: "Number already exists" });
  }

  // password hash
  const hashPass = await bcrypt.hash(password, 10);

  // create new user
  const user = await User.create({
    name,
    email,
    phone,
    password: hashPass,
    country,
    fundPassword,
    referId,
  });

  res.status(200).json({ user, message: "User created successfully" });
});

/**
 * @DESC User Logout
 * @ROUTE /api/v1/auth/logout
 * @method POST
 * @access public
 */
export const logout = asyncHandler(async (req, res) => {
  res.clearCookie("accessToken");
  res.status(200).json({ message: "Logout successful" });
});
/**
 * @DESC Logged in User
 * @ROUTE /api/v1/auth/me
 * @method POST
 * @access public
 */
export const loggedInUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.me);
});
