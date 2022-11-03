import { body } from 'express-validator';
import { isValidObjectId } from 'mongoose';

export const userBodyValidation = () => ({
    email: (fieldName: string) => body(fieldName).isString().isEmail(),
    password: (fieldName: string) => body(fieldName).isString().isStrongPassword(),
    name: (fieldName: string) => body(fieldName).isString().notEmpty({ ignore_whitespace: true }),
    id: (fieldName: string) => body(fieldName).custom(isValidObjectId),
});
