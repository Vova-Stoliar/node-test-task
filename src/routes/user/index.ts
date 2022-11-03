import express from 'express';
import { userController } from '@/controllers';
import { validationHandlers, validationSchemas } from '@/shared/validation';
import { authMiddleware } from '@/middleware';
import { catchError } from '@/shared/exceptions';

export const router = express.Router();

router.use(catchError(authMiddleware));

router.get('/', validationHandlers.validate(validationSchemas.getUsersSchema()), userController.getUsers());

router.post(
    '/admin',
    validationHandlers.validate(validationSchemas.setAdministratorSchema()),
    userController.setAdministrator()
);

router.post(
    '/:userId',
    validationHandlers.validate(validationSchemas.setBossBySubordinateSchema()),
    userController.setBossBySubordinate()
);
