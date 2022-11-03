import { ApiError } from '@/shared/exceptions';
import { validateValueExistence } from '@/shared/lib';
import { Locals, SetBossBySubordinate } from '../types';

export const validateCurrentBossByUserId: SetBossBySubordinate = async (req, res, next) => {
    const { currentBossByUserId } = req.body;
    const { locals } = res;

    const user = validateValueExistence<Locals['user']>({
        value: locals.user,
        Error: ApiError.BadRequest(),
    });

    if (user.boss !== currentBossByUserId) {
        throw ApiError.Forbidden();
    }

    return next();
};
