import { ApiError } from '@/shared/exceptions';
import { validateValueExistence } from '@/shared/lib';
import { Locals, Login } from '../types';
import { jwtService } from '@/services';

export const setAccessToken: Login = async (req, res, next) => {
    const { locals } = res;

    const normalizedUser = validateValueExistence<Locals['normalizedUser']>({
        value: locals.normalizedUser,
        Error: ApiError.BadRequest(),
    });

    const user = validateValueExistence<Locals['user']>({
        value: locals.user,
        Error: ApiError.BadRequest(),
    });

    const { generateAccessToken } = jwtService.accessToken<NonNullable<Locals['normalizedUser']>>();

    const accessToken = generateAccessToken(normalizedUser);

    res.cookie('authorization', `Bearer ${accessToken}`, { httpOnly: true });

    await user.updateOne({ $set: { accessToken } });

    next();
};
