import { userDataAccess } from '@/database';
import { SetAdministrator } from '../types';

export const updateUsers: SetAdministrator = async (req, _res, next) => {
    const { newAdminId, currentAdminId } = req.body;

    await userDataAccess.updateManyUsers({
        filter: {
            $or: [{ boss: currentAdminId }, { boss: undefined }],
            $nor: [{ _id: newAdminId }],
        },
        update: {
            $set: { boss: newAdminId },
        },
    });

    next();
};
