import { Nullable } from './utility-types';

export * from './utility-types';

export type Token = string;

export type User = {
    email: string;
    password: string;
    name: string;
    id: string;
    isAdmin?: boolean;
    boss?: Nullable<string>;
    accessToken?: string;
};
