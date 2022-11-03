import { UserModel } from '@/shared/models';
import { User } from '@/shared/types';

type Options = Omit<Partial<User>, 'id'> & {
    _id?: User['id'];
};

export const findOneUserByOptions = async (options: Options) => {
    const user = await UserModel.findOne(options);

    return user;
};
