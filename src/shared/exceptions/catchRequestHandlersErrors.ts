import { catchError } from './catchError';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const catchRequestHandlersErrors = <TRequestHandlers extends Array<(...args: any) => any>>(
    ...requestHandlers: TRequestHandlers
) => {
    return requestHandlers.map(catchError);
};
