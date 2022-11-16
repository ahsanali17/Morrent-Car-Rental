import { NextFunction, Request, Response } from 'express';
import passport from 'passport';

const checkSession = async (req: Request, res: Response, next: NextFunction) => {
	try {
		if (req.isAuthenticated()) {
			res.status(200).json({ success: true });
		} else {
			res.status(200).json({ success: false });
		}
	} catch (error) {
		res.status(500).json({ error });
	}
};

function logIn() {
	passport.authenticate('google', { scope: ['email', 'profile'] });
}

const signOut = (req: Request, res: Response, next: NextFunction) => {
	req.session.destroy(() => {
		// res.clearCookie('connect.sid');
		res.redirect('/');
	});
};

export default { checkSession, logIn, signOut };
