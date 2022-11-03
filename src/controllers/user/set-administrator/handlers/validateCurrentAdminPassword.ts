import bcrypt from 'bcrypt';
import { validateValueExistence } from '@/shared/lib';
import { Locals, SetAdministrator } from '../types';
import { ApiError } from '@/shared/exceptions';

export const validateCurrentAdminPassword: SetAdministrator = async (req, res, next) => {
    const { body } = req;
    const { locals } = res;

    if (locals.currentAdmin === null) return next();

    const currentAdmin = validateValueExistence<NonNullable<Locals['currentAdmin']>>({
        value: locals.currentAdmin,
        Error: ApiError.BadRequest(),
    });

    const isPasswordValid = await bcrypt.compare(body.currentAdminPassword, currentAdmin.password);

    if (!isPasswordValid) {
        throw ApiError.BadRequest();
    }

    return next();
};
