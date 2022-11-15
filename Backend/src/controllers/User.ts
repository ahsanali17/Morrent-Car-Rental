import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

import User from '../models/User';

// I will have to ask the team if we want to be able to create users through form or only allow access to website through google, github, etc...
// const createUser = async (req: Request, res: Response, next: NextFunction) => {
// 	const { _id, googleId, displayName, firstName, lastName, image } = req.body;

// 	try {
// 		const user = new User({
// 			_id,
// 			googleId,
// 			displayName,
// 			firstName,
// 			lastName,
// 			image
// 		});

// 		let newUser = await User.find(user._id);
// 		if (newUser) {
// 			res.status(404).json({ message: 'This user already exists' });
// 		} else {
// 			await user.save();
// 		}

// 		user
// 			? res.status(201).json({ user })
// 			: res.status(404).json({
// 					message: 'User was not created'
// 			  });
// 	} catch (error) {
// 		res.status(500).json({ error });
// 	}
// };

const getOneUser = async (req: Request, res: Response, next: NextFunction) => {
	const userId = req.params._id;

	try {
		const user = await User.findById(userId);
		user ? res.status(200).json({ user }) : res.status(404).json({ message: 'User was not found' });
	} catch (error) {
		res.status(500).json({ error });
	}
};

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
	const { _id, googleId, displayName, firstName, lastName, image } = req.body;

	try {
		const users = await User.find();
		if (users) res.status(200).json({ users });
	} catch (error) {
		res.status(500).json({ error });
	}
};

export default { getOneUser, getAllUsers };
