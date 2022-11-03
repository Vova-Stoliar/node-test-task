import { ApiError } from '@/shared/exceptions';
import { validateValueExistence } from '@/shared/lib';
import { Locals, SetBossBySubordinate } from '../types';

export const updateUserBoss: SetBossBySubordinate = async (req, res, next) => {
    const { newBossByUserId } = req.body;
    const { locals } = res;

    const user = validateValueExistence<Locals['user']>({
        value: locals.user,
        Error: ApiError.BadRequest(),
    });

    user.boss = newBossByUserId;
    await user.save();

    next();
};
