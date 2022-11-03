import mongoose from 'mongoose';
import { env } from '../env';

export async function mongooseConnect() {
    try {
        await mongoose.connect(
            `mongodb+srv://${env.MONGODB_NAME}:${env.MONGODB_PASSWORD}@cluster0.y69osro.mongodb.net`,
            {
                retryWrites: true,
                w: 'majority',
            }
        );
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error: ', error);
    }
}
