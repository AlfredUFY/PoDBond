import axios from 'axios';

export const getProducts = async (apiKey, shop_id) => {
    try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${apiKey}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        const response = await axios.get(`https://api.printify.com//v1/shops/${shop_id}/products.json`)
        return JSON.stringify(response.data);
    }
    catch (error) {
        console.error('Failed to retrieve shops:', error);
        throw error;
    }
}