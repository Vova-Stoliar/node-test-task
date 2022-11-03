import { userDataAccess } from '@/database';
import { SetBossBySubordinate } from '../types';

export const sendResponse: SetBossBySubordinate = async (req, res) => {
    const { newBossByUserId } = req.body;

    const subordinates = await userDataAccess.findUsers({
        options: { $or: [{ boss: newBossByUserId }, { _id: newBossByUserId }] },
        projection: { password: false },
    });

    return res.send(subordinates);
};
