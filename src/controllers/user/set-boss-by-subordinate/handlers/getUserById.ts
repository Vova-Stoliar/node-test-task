import { userDataAccess } from '@/database';
import { ApiError } from '@/shared/exceptions';
import { SetBossBySubordinate } from '../types';

export const getUserById: SetBossBySubordinate = async (req, res, next) => {
    const { userId } = req.params;
    const user = await userDataAccess.findUserById({ id: userId, projection: { password: false } });

    if (!user) {
        throw ApiError.BadRequest('User does not exist');
    }

    res.locals = {
        ...res.locals,
        user,
    };

    return next();
};
