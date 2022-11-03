import jwt from 'jsonwebtoken';
import { env } from '@/shared/config';

type Payload = Parameters<typeof jwt.sign>[0];

export const accessToken = <TPayload extends Payload>() => {
    const generateAccessToken = (user: TPayload) => {
        return jwt.sign(user, env.JWT_ACCESS_TOKEN_SECRET, { expiresIn: '7d' });
    };

    const validateAccessToken = (token: string) => {
        try {
            return jwt.verify(token, env.JWT_ACCESS_TOKEN_SECRET);
        } catch (error) {
            return null;
        }
    };

    return { generateAccessToken, validateAccessToken };
};
