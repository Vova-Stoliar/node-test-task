import { catchRequestHandlersErrors } from '@/shared/exceptions';
import * as handlers from './handlers';

export const logout = () => {
    return catchRequestHandlersErrors(handlers.getUser, handlers.logoutUser);
};
