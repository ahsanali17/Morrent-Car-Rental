import express, { NextFunction, Request, Response } from 'express';
import passport from 'passport';

const authRouter = express();

// authRouter.get('auth/google', passport.authenticate('google', { scope: ['profile'] }));

// // Callback route for google to redirect
// authRouter.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
// 	res.redirect('/');
// });

// authRouter.get('/logout', (req: Request, res: Response, next: NextFunction) => {
// 	req.logOut((error) => {
// 		if (error) {
// 			return next(error);
// 		}
// 		res.redirect('/');
// 	});
// });

// authRouter.get('/', (req, res) => {
// 	res.send('<a href="/auth/google">Authenticate with Google</a>');
// });

// // Make function in user controller to authenticate user
// authRouter.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

// // Make function in user controller to call back user to previous page after successful authentication
// authRouter.get(
// 	'/google/callback',
// 	passport.authenticate('google', {
// 		successRedirect: 'http://localhost:5173/'
// 	})
// );

export default authRouter;
