import { ApiError } from '@/shared/exceptions';
import { SetBossBySubordinate } from '../types';

export const validateNewBossByUserId: SetBossBySubordinate = async (req, res, next) => {
    const { userId } = req.params;
    const { newBossByUserId, currentBossByUserId } = req.body;

    if (userId === newBossByUserId) {
        throw ApiError.BadRequest();
    }

    if (newBossByUserId === currentBossByUserId) {
        throw ApiError.BadRequest();
    }

    return next();
};
