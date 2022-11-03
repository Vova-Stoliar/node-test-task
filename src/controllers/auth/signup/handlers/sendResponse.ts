import { ApiError } from '@/shared/exceptions';
import { validateValueExistence } from '@/shared/lib';
import { Locals, Signup } from '../types';

export const sendResponse: Signup = async (_req, res) => {
    const { locals } = res;

    const user = validateValueExistence<Locals['user']>({
        value: locals.user,
        Error: ApiError.BadRequest(),
    });

    res.status(201).send(user);
};
