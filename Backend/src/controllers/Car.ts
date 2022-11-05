import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

import Car from '../models/Car';

const createCar = (req: Request, res: Response, next: NextFunction) => {
    const { car_brand, type_car, car_name, seat_capacity, maximum_gasoline } = req.body;

    const car = new Car({
        _id: new mongoose.Types.ObjectId(),
        car_brand,
        type_car,
        car_name,
        seat_capacity,
        maximum_gasoline
    });

    return car
        .save()
        .then((car) => res.status(201).json({ car }))
        .catch((error) => res.status(500).json({ error }));
};

const oneCar = async (req: Request, res: Response, next: NextFunction) => {
    const carId = req.params.carId;
    try {
        const car = await Car.findById(carId);
        car ? res.status(200).json({ car }) : res.status(404).json({ message: 'Car not found' });
    } catch (error) {
        res.status(500).json({ error });
    }
};

const allCars = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const car = await Car.find();
        if (car) res.status(200).json({ car });
    } catch (error) {
        res.status(500).json({ error });
    }
};

const updateCar = async (req: Request, res: Response, next: NextFunction) => {
    const carId = req.params.carId;
    try {
        const car = await Car.findById(carId);

        if (car) {
            car.set(req.body);
            return res.status(201).json({ car });
        } else {
            return res.status(404).json({ message: 'No car found' });
        }
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const deleteCar = async (req: Request, res: Response, next: NextFunction) => {
    const carId = req.params.carId;
    try {
        const car = await Car.findByIdAndDelete(carId);
        car ? res.status(201).json({ car, message: 'Deleted the car' }) : res.status(404).json({ message: 'No car by that id was found' });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export default { createCar, oneCar, allCars, updateCar, deleteCar };
