import express from 'express';
import passport from 'passport';

import controller from '../controllers/Auth';

const authRouter = express();
const CLIENT_URL = 'http://localhost:5173/';

authRouter.get('/google', (req, res) => {
	res.send('<a href="/auth/google/login">Authenticate with Google</a>');
});

// Logs user in with google
authRouter.get('/google/login', passport.authenticate('google', { scope: ['email', 'profile'] }));

// Sign out of webapp
authRouter.post('/google/logout', controller.signOut);

authRouter.get(
	'/google/callback',
	passport.authenticate('google', {
		successRedirect: CLIENT_URL,
		failureRedirect: '/login/failed'
	})
);

// Check Session to see if user is logged in
authRouter.get('/checkSession', controller.checkSession);

export default authRouter;
