import dotenv from 'dotenv';
import { getShops } from './utils/admin/getShops.mjs';
import { getBlueprints } from './utils/public/getBlueprints.mjs';
import { getBlueprint } from './utils/public/getBlueprint.mjs';

dotenv.config();

const apiKey = process.env.API_KEY;

const run = async () => {
    const result = await getBlueprint(apiKey, 3);
    console.log(result);
};

run().catch((err) => {
    console.error('An error occurred:', err);
});