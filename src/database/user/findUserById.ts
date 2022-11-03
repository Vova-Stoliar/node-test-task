import { ProjectionType } from 'mongoose';
import { UserModel } from '@/shared/models';
import { User } from '@/shared/types';

export const findUserById = async (params: { id: User['id']; projection?: ProjectionType<User> }) => {
    const { id, projection } = params;

    const user = await UserModel.findById(id, projection);

    return user;
};
