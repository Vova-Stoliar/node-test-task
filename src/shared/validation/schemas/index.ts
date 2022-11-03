import { param } from 'express-validator';
import { isValidObjectId } from 'mongoose';
import { FIELDS_NAMES } from './constants';
import { userBodyValidation } from './lib';

export const signupUserSchema = () => [
    userBodyValidation().email(FIELDS_NAMES.email),
    userBodyValidation().name(FIELDS_NAMES.name),
    userBodyValidation().password(FIELDS_NAMES.password),
];

export const logoutUserSchema = () => [
    userBodyValidation().email(FIELDS_NAMES.email),
    userBodyValidation().id(FIELDS_NAMES.id),
];

export const loginUserSchema = () => [
    userBodyValidation().email(FIELDS_NAMES.email),
    userBodyValidation().password(FIELDS_NAMES.password),
];

export const setAdministratorSchema = () => [
    userBodyValidation().id(FIELDS_NAMES.newAdminId),
    userBodyValidation().password(FIELDS_NAMES.currentAdminPassword).optional(),
    userBodyValidation().id(FIELDS_NAMES.currentAdminId).optional(),
];

export const getUsersSchema = () => [userBodyValidation().id(FIELDS_NAMES.id)];

export const setBossBySubordinateSchema = () => [
    param('userId').custom(isValidObjectId),

    userBodyValidation().id(FIELDS_NAMES.currentBossByUserId),
    userBodyValidation().id(FIELDS_NAMES.newBossByUserId),
];
