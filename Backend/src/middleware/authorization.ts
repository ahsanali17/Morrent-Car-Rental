import { Request, Response, NextFunction } from 'express';

const checkAuthentication = async (req: Request, res: Response, next: NextFunction) => {
	if (await req.isAuthenticated()) {
		next();
	} else {
		res.status(404).send({ success: false });
	}
};

export default { checkAuthentication };
