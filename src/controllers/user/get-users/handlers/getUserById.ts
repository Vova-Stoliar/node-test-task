import { userDataAccess } from '@/database';
import { ApiError } from '@/shared/exceptions';
import { GetUsers } from '../types';

export const getUserById: GetUsers = async (req, res, next) => {
    const { id } = req.body;
    const user = await userDataAccess.findUserById({ id, projection: { password: false, accessToken: false } });

    if (!user) {
        throw ApiError.BadRequest('User does not exist');
    }

    res.locals = {
        ...res.locals,
        user,
    };

    return next();
};
