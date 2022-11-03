import { ApiError } from '@/shared/exceptions';
import { validateValueExistence } from '@/shared/lib';
import { GetUsers, Locals } from '../types';

export const sendUsersByRegularUser: GetUsers = async (req, res) => {
    const { locals } = res;

    const user = validateValueExistence<Locals['user']>({
        value: locals.user,
        Error: ApiError.BadRequest(),
    });

    return res.send(user);
};
