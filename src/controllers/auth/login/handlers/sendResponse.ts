import { Locals, Login } from '../types';
import { validateValueExistence } from '@/shared/lib';
import { ApiError } from '@/shared/exceptions';

export const sendResponse: Login = async (_req, res) => {
    const { locals } = res;

    const normalizedUser = validateValueExistence<Locals['normalizedUser']>({
        value: locals.normalizedUser,
        Error: ApiError.BadRequest(),
    });

    return res.send(normalizedUser);
};
