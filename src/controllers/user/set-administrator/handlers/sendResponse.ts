import { ApiError } from '@/shared/exceptions';
import { validateValueExistence } from '@/shared/lib';
import { Locals, SetAdministrator } from '../types';

export const sendResponse: SetAdministrator = async (_req, res) => {
    const { locals } = res;

    const newAdmin = validateValueExistence<Locals['newAdmin']>({
        value: locals.newAdmin,
        Error: ApiError.BadRequest(),
    });

    return res.send(newAdmin);
};
