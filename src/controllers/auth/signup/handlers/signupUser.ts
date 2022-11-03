import { Locals, Signup } from '../types';
import { userService } from '@/services';
import { validateValueExistence } from '@/shared/lib';
import { userDataAccess } from '@/database';
import { ApiError } from '@/shared/exceptions';

export const signupUser: Signup = async (req, res, next) => {
    const { email, name } = req.body;
    const { locals } = res;

    const password = validateValueExistence<Locals['password']>({
        value: locals.password,
        Error: ApiError.BadRequest(),
    });

    const boss = validateValueExistence<Locals['boss']>({ value: locals.boss, Error: ApiError.BadRequest() });

    const user = await userDataAccess.createUser({ email, name, password, boss });

    res.locals = Object.assign(res.locals, {
        user: userService.normalizeUser(user),
    });

    next();
};
