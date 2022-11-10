import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

import User from '../models/User';
import passportSetup from '../config/passport';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
	const { googleId, displayName, firstName, lastName, image } = req.body;

	const user = passportSetup();
	if (user) {
		console.log('1');
		return user;
	}
};

export default { createUser };
