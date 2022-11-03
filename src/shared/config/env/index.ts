import dotenv from 'dotenv';
import { DEFAULT_PORT } from '@/shared/constants';

dotenv.config();

export const env = {
    PORT: process.env.PORT ?? DEFAULT_PORT,
    CLIENT_API_URL: process.env.CLIENT_API_URL,
    MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
    MONGODB_NAME: process.env.MONGODB_NAME,
    JWT_ACCESS_TOKEN_SECRET: process.env.JWT_ACCESS_TOKEN_SECRET ?? '',
};
