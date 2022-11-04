import mongoose, { Document, Schema } from "mongoose";

export interface ICars {
 car_brand: string;
 car_type: string;
 car_name: string;
 number_of_seats: number;
 maximum_gas: number;
}

export interface ICarsModel extends ICars, Document {};

const CarsSchema: Schema = new Schema(
 {
  car_brand: { type: String, required: true },
  car_type: { type: String, required: true },
  car_name: { type: String, required: true },
  number_of_seats: { type: Number, required: true },
  maximum_gas: { type: Number, required: true }
 },
 {
  versionKey: false
 }
);

export default mongoose.model<ICarsModel>('Car', CarsSchema);