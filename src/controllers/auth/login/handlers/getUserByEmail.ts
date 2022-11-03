import { userDataAccess } from '@/database';
import { userService } from '@/services';
import { ApiError } from '@/shared/exceptions';
import { Login } from '../types';

export const getUserByEmail: Login = async (req, res, next) => {
    const { email } = req.body;

    const user = await userDataAccess.findOneUserByOptions({ email });

    if (!user) {
        throw ApiError.BadRequest("User doesn't exist");
    }

    res.locals = {
        ...res.locals,
        user,
        normalizedUser: userService.normalizeUser(user),
    };

    return next();
};
