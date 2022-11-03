import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { env, mongooseConnect } from '@/shared/config';
import { router } from '@/routes';
import { globalErrorMiddleware } from '@/middleware';

const app = express();

mongooseConnect();

app.use(
    cors({
        origin: env.CLIENT_API_URL,
        credentials: true,
    })
);

app.use(cookieParser());

app.use(express.json());

app.use(router);

app.use(globalErrorMiddleware);

app.listen(env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is listening on ${env.PORT}`);
});
