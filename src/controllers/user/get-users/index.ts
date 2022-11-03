import { catchRequestHandlersErrors } from '@/shared/exceptions';
import * as handlers from './handlers';

export const getUsers = () => {
    return catchRequestHandlersErrors(
        handlers.getUserById,
        handlers.sendUsersByAdmin,
        handlers.sendUsersByBoss,
        handlers.sendUsersByRegularUser
    );
};
