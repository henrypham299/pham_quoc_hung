import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export const validationRequest = (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res
        .status(422)
        .send({ errors: result.array() });
    }
    next();
};
