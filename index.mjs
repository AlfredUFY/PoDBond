import dotenv from 'dotenv';
import { getProducts } from './utils/public/getProducts.mjs';

dotenv.config();

const apiKey = process.env.API_KEY;
const shopId = process.env.SHOP_ID;

const run = async () => {
    const result = await getProducts(apiKey, shopId);
    console.log(result);
};

run().catch((err) => {
    console.error('An error occurred:', err);
});