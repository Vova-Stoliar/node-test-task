import { catchRequestHandlersErrors } from '@/shared/exceptions';
import * as handlers from './handlers';

export const login = () => {
    return catchRequestHandlersErrors(
        handlers.getUserByEmail,
        handlers.validatePassword,
        handlers.setAccessToken,
        handlers.sendResponse
    );
};
