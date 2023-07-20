import dotenv from 'dotenv';
import { getShops } from './utils/admin/getShops.mjs';
import { getBlueprints } from './utils/admin/getBlueprints.mjs';

dotenv.config();

const apiKey = process.env.API_KEY;

const run = async () => {
    const result = await getBlueprints();
    console.log(result[0]);
};

run().catch((err) => {
    console.error('An error occurred:', err);
});