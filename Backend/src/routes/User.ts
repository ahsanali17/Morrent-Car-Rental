import express from 'express';

import controller from '../controllers/User';

const userRouter = express.Router();

// userRouter.post('/create', controller.createUser);
userRouter.get('/get/allUsers', controller.getAllUsers);
userRouter.get('/get/:_id', controller.getOneUser);

export default userRouter;
