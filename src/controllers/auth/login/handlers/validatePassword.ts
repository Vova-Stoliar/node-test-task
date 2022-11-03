import bcrypt from 'bcrypt';
import { Locals, Login } from '../types';
import { validateValueExistence } from '@/shared/lib';
import { ApiError } from '@/shared/exceptions';

export const validatePassword: Login = async (req, res, next) => {
    const { body } = req;
    const { locals } = res;

    const user = validateValueExistence<Locals['user']>({
        value: locals.user,
        Error: ApiError.BadRequest(),
    });

    const isPasswordValid = await bcrypt.compare(body.password, user.password);

    if (!isPasswordValid) {
        throw ApiError.BadRequest();
    }

    return next();
};
