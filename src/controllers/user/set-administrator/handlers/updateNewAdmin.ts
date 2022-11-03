import { ApiError } from '@/shared/exceptions';
import { validateValueExistence } from '@/shared/lib';
import { Locals, SetAdministrator } from '../types';

export const updateNewAdmin: SetAdministrator = async (req, res, next) => {
    const { locals } = res;

    const newAdmin = validateValueExistence<Locals['newAdmin']>({
        value: locals.newAdmin,
        Error: ApiError.BadRequest(),
    });

    newAdmin.isAdmin = true;
    newAdmin.boss = null;

    await newAdmin.save();

    next();
};
