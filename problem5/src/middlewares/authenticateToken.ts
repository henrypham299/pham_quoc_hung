import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { GlobalConfig } from '../config/global';
import User from '../models/user';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);
    jwt.verify(token, GlobalConfig.secretKey, (err, user) => {
        if (err) return res.sendStatus(403);

        (req as any).user = user as User;
        next();
    });
};
