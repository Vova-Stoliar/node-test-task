import { UserModel } from '@/shared/models';
import { User } from '@/shared/types';

export const createUser = async (userToCreate: Omit<User, 'id'>) => {
    const user = await UserModel.create(userToCreate);

    return user;
};
