import type { NextFunction, Request, Response } from 'express';
import { ApiError } from '@/shared/exceptions';

export const globalErrorMiddleware = (error: unknown, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof ApiError) {
        const { status, message, errors } = error;

        return res.status(status).send({ message, errors });
    }

    return next(error);
};
