import { userDataAccess } from '@/database';
import { Signup } from '../types';

export const prepareBossField: Signup = async (_req, res, next) => {
    const currentAdministrator = await userDataAccess.findOneUserByOptions({ isAdmin: true });

    res.locals = Object.assign(res.locals, {
        boss: currentAdministrator?.id ?? null,
    });

    next();
};
