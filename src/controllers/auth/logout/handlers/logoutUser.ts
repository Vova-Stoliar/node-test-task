import { ApiError } from '@/shared/exceptions';
import { validateValueExistence } from '@/shared/lib';
import { Locals, Logout } from '../types';

export const logoutUser: Logout = (_req, res) => {
    const { locals } = res;

    const user = validateValueExistence<Locals['user']>({
        value: locals.user,
        Error: ApiError.BadRequest(),
    });

    user.updateOne({ $set: { accessToken: null } });

    res.clearCookie('authorization');
    res.sendStatus(204);
};
