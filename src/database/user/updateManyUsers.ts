import { FilterQuery, UpdateQuery, UpdateWithAggregationPipeline } from 'mongoose';
import { UserModel } from '@/shared/models';
import { User } from '@/shared/types';

type Params = {
    filter?: FilterQuery<User>;
    update?: UpdateQuery<User> | UpdateWithAggregationPipeline;
};

export const updateManyUsers = async (params: Params) => {
    const { filter = {}, update } = params;

    const response = await UserModel.updateMany(filter, update);

    return response;
};
