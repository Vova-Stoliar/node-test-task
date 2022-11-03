import { catchRequestHandlersErrors } from '@/shared/exceptions';
import * as handlers from './handlers';

export const signup = () => {
    return catchRequestHandlersErrors(
        handlers.prepareBossField,
        handlers.preparePassword,
        handlers.signupUser,
        handlers.sendResponse
    );
};
