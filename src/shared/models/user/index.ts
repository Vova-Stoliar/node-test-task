import { Schema, model } from 'mongoose';
import { User } from '@/shared/types';

const schema = new Schema<User>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false },
        boss: { type: String, default: null },
        accessToken: { type: String, default: null },
    },
    {
        toJSON: {
            virtuals: true,
            transform(_doc, { _id, __v, ...restRet }) {
                return restRet;
            },
        },
    }
);

export const UserModel = model<User>('User', schema);
