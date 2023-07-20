import dotenv from 'dotenv';
import { getShops } from './utils/admin/getShops.mjs';

dotenv.config();

const apiKey = process.env.API_KEY;

const run = async () => {
    const result = await getShops(apiKey);
    console.log(result);
};

run().catch((err) => {
    console.error('An error occurred:', err);
});