import { catchRequestHandlersErrors } from '@/shared/exceptions';
import * as handlers from './handlers';

export const setAdministrator = () => {
    return catchRequestHandlersErrors(
        handlers.getCurrentAdminById,
        handlers.validateCurrentAdminPassword,
        handlers.updateCurrentAdmin,
        handlers.getNewAdminById,
        handlers.updateNewAdmin,
        handlers.updateUsers,
        handlers.sendResponse
    );
};
