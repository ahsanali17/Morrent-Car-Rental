import mongoose, { Document, Schema } from 'mongoose';

export interface IUser {
    google_id: string;
    user_name: string;
    job: string;
}

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema({
    google_id: { type: String, required: true },
    user_name: { type: String, required: true },
    job: { type: String, required: false },
    created_at: { type: Date, default: Date.now }
});

export default mongoose.model<IUserModel>('User', UserSchema);
