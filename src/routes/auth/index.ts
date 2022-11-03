import express from 'express';
import { authController } from '@/controllers';
import { validationHandlers, validationSchemas } from '@/shared/validation';

export const router = express.Router();

router.post('/login', validationHandlers.validate(validationSchemas.loginUserSchema()), authController.login());

router.post('/signup', validationHandlers.validate(validationSchemas.signupUserSchema()), authController.signup());

router.post('/logout', validationHandlers.validate(validationSchemas.logoutUserSchema()), authController.logout());
