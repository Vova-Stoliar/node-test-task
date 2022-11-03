import { userDataAccess } from '@/database';
import { ApiError } from '@/shared/exceptions';
import { SetAdministrator } from '../types';

export const getNewAdminById: SetAdministrator = async (req, res, next) => {
    const { newAdminId } = req.body;

    const newAdmin = await userDataAccess.findUserById({
        id: newAdminId,
        projection: { password: false, accessToken: false },
    });

    if (!newAdmin) {
        throw ApiError.BadRequest('User does not exist');
    }

    res.locals = {
        ...res.locals,
        newAdmin,
    };

    return next();
};
