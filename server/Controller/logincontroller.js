// const express = require('express');
// const bcrypt = require('bcryptjs'); 
// const Users = require('../Models/Signupmodel');
// // import { errorHandler } from '../utils/error.js';
// // import jwt from 'jsonwebtoken';

// const app = express();
// app.use(express.json());




// export const signin = async (req, res, next) => {
//   const { email, password } = req.body;
//   try {
//     const validUser = await Users.findOne({ email });
//     if (!validUser) return next(errorHandler(404, 'User not found'));
//     const validPassword = bcrypt.compareSync(password, validUser.password);
//     if (!validPassword) return next(errorHandler(401, 'wrong credentials'));
//     const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
//     const { password: hashedPassword, ...rest } = validUser._doc;
//     const expiryDate = new Date(Date.now() + 3600000);
//     res
//       .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
//       .status(200)
//       .json(rest);
//   } catch (error) {
//     next(error);
//   }
// };


// export const signout = (req, res) => {
//   res.clearCookie('access_token').status(200).json('Signout success!');
// };