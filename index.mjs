import dotenv from 'dotenv';
import { getProduct } from './utils/public/getProduct.mjs';

dotenv.config();

const apiKey = process.env.API_KEY;
const shopId = process.env.SHOP_ID;

const run = async () => {
    const result = await getProduct(apiKey, shopId, '64b8b985618e7fbaaa07a7bc');
    console.log(result);
};

run().catch((err) => {
    console.error('An error occurred:', err);
});