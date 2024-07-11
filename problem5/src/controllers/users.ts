import { Request, Response } from 'express';
import User from '../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { GlobalConfig } from '../config/global';

export const loginRoute = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;

        const user: User|null = await User.findOne({where: {email}});

        if (!user || !await bcrypt.compare(password, user.password)) {
            return res
                .status(400)
                .send({
                    error: 'User credentails not correct'
                });
        }

        const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, GlobalConfig.secretKey, { expiresIn: '1h' });
        return res.json({ token });
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
};