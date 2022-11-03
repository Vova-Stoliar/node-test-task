import { NextFunction } from 'express';
import { validationResult } from 'express-validator';
import type { ValidationChain } from 'express-validator';

export const validate = (schemas: ValidationChain[]) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return async (req: any, res: any, next: NextFunction) => {
        await Promise.all(schemas.map((schema) => schema.run(req)));

        const result = validationResult(req);

        if (result.isEmpty()) {
            return next();
        }

        return res.send({
            message: 'Validation error',
            errors: result.array(),
        });
    };
};
