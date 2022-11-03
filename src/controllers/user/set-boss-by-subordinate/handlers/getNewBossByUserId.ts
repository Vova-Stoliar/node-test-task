import { userDataAccess } from '@/database';
import { ApiError } from '@/shared/exceptions';
import { SetBossBySubordinate } from '../types';

export const getNewBossByUserId: SetBossBySubordinate = async (req, res, next) => {
    const { newBossByUserId } = req.body;

    const newBossByUser = await userDataAccess.findUserById({ id: newBossByUserId, projection: { password: false } });

    if (!newBossByUser) {
        throw ApiError.BadRequest('User does not exist');
    }

    res.locals = {
        ...res.locals,
        newBossByUser,
    };

    return next();
};
