declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string;
            CLIENT_API_URL: string;
            MONGODB_PASSWORD: string;
            MONGODB_NAME: string;
            JWT_ACCESS_TOKEN_SECRET: string;
        }
    }
}

export {};
