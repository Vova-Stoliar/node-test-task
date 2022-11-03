import { catchRequestHandlersErrors } from '@/shared/exceptions';
import * as handlers from './handlers';

export const setBossBySubordinate = () => {
    return catchRequestHandlersErrors(
        handlers.validateNewBossByUserId,
        handlers.getUserById,
        handlers.validateCurrentBossByUserId,
        handlers.getNewBossByUserId,
        handlers.updateUserBoss,
        handlers.sendResponse
    );
};
