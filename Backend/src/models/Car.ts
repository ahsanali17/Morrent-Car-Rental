import mongoose, { Document, Schema } from 'mongoose';

export interface ICars {
	car_brand: string;
	type_car: string;
	car_name: string;
	seat_capacity: number;
	maximum_gasoline: number;
	daily_rate: number;
	pickUp_Location: string;
	dropOff_Location: string;
	availability_From: Date;
	availability_To: Date;
}

export interface ICarsModel extends ICars, Document {}

const CarsSchema: Schema = new Schema(
	{
		car_brand: { type: String, required: true },
		type_car: { type: String, required: true },
		car_name: { type: String, required: true, unique: true },
		seat_capacity: { type: Number, required: true },
		maximum_gasoline: { type: Number, required: true },
		daily_rate: { type: Number, required: true },
		pickUp_Location: { type: String, required: false },
		dropOff_Location: { type: String, required: false },
		availability_From: { type: Date, required: false },
		availability_To: { type: Date, required: false }
	},
	{
		versionKey: false
	}
);

export default mongoose.model<ICarsModel>('Car', CarsSchema);
