import mongoose, { Document, Schema } from 'mongoose';

export interface IUser {
	googleId: string;
	displayName: string;
	firstName: string;
	lastName: string;
	image: string;
}

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema({
	googleId: { type: String, required: true },
	displayName: { type: String, required: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	image: { type: String },
	created_at: { type: Date, default: Date.now }
});

export default mongoose.model<IUserModel>('User', UserSchema);
