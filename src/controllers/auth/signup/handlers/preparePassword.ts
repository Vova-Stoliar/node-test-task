import bcrypt from 'bcrypt';
import { SALT_ROUNDS } from '@/shared/constants';
import { Signup } from '../types';

export const preparePassword: Signup = async (req, res, next) => {
    const { password } = req.body;

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    res.locals = Object.assign(res.locals, {
        password: hashedPassword,
    });

    next();
};
