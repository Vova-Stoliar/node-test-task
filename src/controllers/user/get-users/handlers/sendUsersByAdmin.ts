import { validateValueExistence } from '@/shared/lib';
import { GetUsers, Locals } from '../types';
import { userDataAccess } from '@/database';
import { ApiError } from '@/shared/exceptions';

export const sendUsersByAdmin: GetUsers = async (_req, res, next) => {
    const { locals } = res;

    const user = validateValueExistence<Locals['user']>({
        value: locals.user,
        Error: ApiError.BadRequest(),
    });

    const { isAdmin } = user;

    if (isAdmin) {
        const users = await userDataAccess.findUsers({ projection: { password: false, accessToken: false } });

        return res.send(users);
    }

    return next();
};
