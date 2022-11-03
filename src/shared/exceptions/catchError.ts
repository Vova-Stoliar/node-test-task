import { NextFunction } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function catchError<TRequestHandler extends (...args: any) => any>(requestHandler: TRequestHandler) {
    return async <TRequest, TResponse>(req: TRequest, res: TResponse, next: NextFunction) => {
        try {
            await requestHandler(req, res, next);
        } catch (error) {
            next(error);
        }
    };
}
