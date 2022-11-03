import { userDataAccess } from '@/database';
import { ApiError } from '@/shared/exceptions';
import { Logout } from '../types';

export const getUser: Logout = async (req, res, next) => {
    const { email, id } = req.body;

    const user = await userDataAccess.findOneUserByOptions({ _id: id, email });

    if (!user) {
        throw ApiError.BadRequest('User does not exist');
    }

    res.locals = {
        ...res.locals,
        user,
    };

    next();
};
