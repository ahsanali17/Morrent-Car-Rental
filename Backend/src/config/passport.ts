import mongoose from 'mongoose';
import passport from 'passport';
import strategy from 'passport-google-oauth20';
import dotenv from 'dotenv';

dotenv.config();

const GoogleStrategy = strategy.Strategy;

import User from '../models/User';

const googleClient = process.env.GOOGLE_CLIENT_ID || '';
const googleSecret = process.env.GOOGLE_SECRET || '';

// TODO: Add the entire code in a try catch block and await all passport.use methods

const passportSetup = () => {
	passport.use(
		new GoogleStrategy(
			{
				// options for google strategy
				clientID: googleClient,
				clientSecret: googleSecret,
				callbackURL: 'http://localhost:9090/google/callback',
				passReqToCallback: true
			},
			async (accessToken: any, refreshToken: any, profile: any, done: any) => {
				const newUser = {
					id: mongoose.Types.ObjectId,
					googleId: profile.id,
					displayName: profile.displayName,
					firstName: profile.name.givenName,
					lastName: profile.name.familyName,
					image: profile.photos[0].value
				};
				try {
					let user = await User.findOne({ googleId: profile.id });

					// TODO: Problem with the error im getting about _id might be here, I should consider creating a controller to make it create a new user
					if (user) {
						done(null, user);
					} else {
						user = await User.create(newUser);
						done(null, user);
					}
				} catch (error) {
					console.log('There was an error creating a new user', error);
				}
			}
		)
	);

	passport.serializeUser((user, done) => {
		done(null, user);
	});

	passport.deserializeUser((id, done) => {
		User.findById(id, (err: any, user: boolean | Express.User | null | undefined) => done(err, user));
	});
};
export default passportSetup;
