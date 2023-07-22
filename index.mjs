import dotenv from 'dotenv';
import { getProvider } from './utils/public/getProvider.mjs';

dotenv.config();

const apiKey = process.env.API_KEY;

const run = async () => {
    const result = await getProvider(apiKey, 1);
    console.log(result);
};

run().catch((err) => {
    console.error('An error occurred:', err);
});