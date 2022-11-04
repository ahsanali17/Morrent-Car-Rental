import mongoose, { Document, Schema } from "mongoose";

export interface ICars {
 car_brand: string;
 type_car: string;
 car_name: string;
 seat_capacity: number;
 maximum_gasoline: number;
}

export interface ICarsModel extends ICars, Document {};

const CarsSchema: Schema = new Schema(
 {
  car_brand: { type: String, required: true },
  type_car: { type: String, required: true },
  car_name: { type: String, required: true },
  seat_capacity: { type: Number, required: true },
  maximum_gasoline: { type: Number, required: true }
 },
 {
  versionKey: false
 }
);

export default mongoose.model<ICarsModel>('Car', CarsSchema);