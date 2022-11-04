import express from 'express';

import controller from '../controllers/Car';

const carRouter = express.Router();

carRouter.post('/create', controller.createCar);
carRouter.get('/get/:carId', controller.oneCar);
carRouter.get('/get/', controller.allCars);
carRouter.patch('/update/:carId', controller.updateCar);
carRouter.delete('/delete/:carId', controller.deleteCar);
 
export default carRouter;