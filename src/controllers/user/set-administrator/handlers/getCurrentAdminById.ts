import { userDataAccess } from '@/database';
import { ApiError } from '@/shared/exceptions';
import { SetAdministrator } from '../types';

export const getCurrentAdminById: SetAdministrator = async (req, res, next) => {
    const { currentAdminId } = req.body;

    const currentAdmin = await userDataAccess.findOneUserByOptions({ isAdmin: true });

    if (currentAdmin && !currentAdminId) {
        throw ApiError.BadRequest();
    }

    if (currentAdmin && currentAdmin.id !== currentAdminId) {
        throw ApiError.BadRequest('User does not exist');
    }

    res.locals = {
        ...res.locals,
        currentAdmin,
    };

    return next();
};
