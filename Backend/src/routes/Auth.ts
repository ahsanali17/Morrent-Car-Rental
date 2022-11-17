import express from 'express';
import passport from 'passport';

const authRouter = express.Router();
const CLIENT_URL = 'http://localhost:5173/';

authRouter.get('/google', (req, res) => {
	res.send('<a href="/auth/google/login">Authenticate with Google</a>');
});

//  Logs user in with google
authRouter.get('/google/login', passport.authenticate('google', { scope: ['email', 'profile'] }));

// Sign out of webapp
authRouter.get('/google/logout', (req, res) => {
	req.session.destroy(() => {
		res.clearCookie('connect.sid');
		res.redirect('/auth/google');
	});
});

authRouter.get(
	'/google/callback',
	passport.authenticate('google', {
		successRedirect: CLIENT_URL,
		failureRedirect: '/login/failed'
	})
);

export default authRouter;
