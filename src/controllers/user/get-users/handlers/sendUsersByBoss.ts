import { userDataAccess } from '@/database';
import { GetUsers } from '../types';

export const sendUsersByBoss: GetUsers = async (req, res, next) => {
    const { id } = req.body;

    const userByBoss = await userDataAccess.findUsers({
        options: { $or: [{ boss: id }, { _id: id }] },
        projection: { password: false, accessToken: false },
    });

    if (userByBoss.length) {
        return res.send(userByBoss);
    }

    return next();
};
