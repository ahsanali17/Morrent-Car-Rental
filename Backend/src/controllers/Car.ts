import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Car from '../models/Car';

const createCar = (req: Request, res: Response, next: NextFunction) => {
 const { car_brand, car_type, car_name, number_of_seats, maximum_gas } = req.body;
 
 const car = new Car({
  _id: new mongoose.Types.ObjectId(),
  car_brand,
  car_type,
  car_name,
  number_of_seats,
  maximum_gas
 });
 
 return car
  .save()
  .then((car) => res.status(201).json({ car }))
  .catch((error) => res.status(500).json({ error }));
};

const oneCar = (req: Request, res: Response, next: NextFunction) => {
 const carId = req.params.carId;
 
 return Car.findById(carId)
  .then((car) => (car ? res.status(200).json({ car })
  : res.status(404).json({ message: 'not found'})))
  .catch((error) =>  res.status(500).json({ error }));
}

const allCars = (req: Request, res: Response, next: NextFunction) => {
 return Car.find()
   .then((car) => res.status(200).json({ car }))
   .catch((error) => res.status(500).json({ error }));
};

const updateCar = (req: Request, res: Response, next: NextFunction) => {
  const carId = req.params.carId;
  
  return Car.findById(carId)
  .then((car) => {
    if (car) {
      car.set(req.body);
      
      return car
      .save()
      .then((car) => res.status(201).json({ car }))
      .catch((error) => res.status(500).json({ error }));
      
    } else {
      return res.status(404).json({ message: 'not found'});
    }
  })
  .catch((error) =>  res.status(500).json({ error }));
};

const deleteCar = (req: Request, res: Response, next: NextFunction) => {
  const carId = req.params.carId;

  return Car.findByIdAndDelete(carId)
    .then((car) => (car ? res.status(201).json({ car, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
    .catch((error) => res.status(500).json({ error }));
};


export default { createCar, oneCar, allCars, updateCar, deleteCar };
