import { ApiError } from '@/shared/exceptions';
import { validateValueExistence } from '@/shared/lib';
import { Locals, SetAdministrator } from '../types';

export const updateCurrentAdmin: SetAdministrator = async (req, res, next) => {
    const { locals } = res;
    const { newAdminId } = req.body;

    if (locals.currentAdmin === null) return next();

    const currentAdmin = validateValueExistence<NonNullable<Locals['currentAdmin']>>({
        value: locals.currentAdmin,
        Error: ApiError.BadRequest(),
    });

    currentAdmin.isAdmin = false;
    currentAdmin.boss = newAdminId;

    await currentAdmin.save();

    return next();
};
