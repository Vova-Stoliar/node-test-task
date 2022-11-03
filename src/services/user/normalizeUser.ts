import { User } from '@/shared/types';

export const normalizeUser = ({ email, id, name }: User) => {
    return { email, id, name };
};
