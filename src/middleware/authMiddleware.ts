import { NextFunction, Request, Response } from 'express';
import { jwtService } from '@/services';
import { ApiError } from '@/shared/exceptions';
import { userDataAccess } from '@/database';

export const authMiddleware = async (req: Request, _res: Response, next: NextFunction) => {
    const { authorization = '' } = req.cookies;

    const [_keyword, token] = authorization.split(' ');

    const { validateAccessToken } = jwtService.accessToken();

    const jwtPayload = validateAccessToken(token);

    if (!jwtPayload) throw ApiError.Unauthorized();

    const user = await userDataAccess.findOneUserByOptions({ accessToken: token });

    if (!user) throw ApiError.Unauthorized();

    next();
};
