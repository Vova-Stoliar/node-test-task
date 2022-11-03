import { FilterQuery, ProjectionType } from 'mongoose';
import { UserModel } from '@/shared/models';
import { User } from '@/shared/types';

type Params = {
    projection?: ProjectionType<User>;
    options?: FilterQuery<User>;
};

export const findUsers = async (params: Params) => {
    const { options = {}, projection } = params;

    const users = await UserModel.find(options, projection);

    return users;
};
