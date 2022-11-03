import { NextFunction, Request, Response } from 'express';
import { Document } from 'mongoose';
import { Nullable, User } from '@/shared/types';

type ReqBody = {
    currentAdminId: User['id'];
    currentAdminPassword: User['password'];
    newAdminId: User['id'];
};

export type Locals = {
    currentAdmin?: Nullable<Document<unknown, unknown, User> & User>;
    newAdmin?: Document<unknown, unknown, User> & User;
};

export type SetAdministrator = (
    req: Request<unknown, unknown, ReqBody>,
    res: Response<unknown, Locals>,
    next: NextFunction
) => void;
