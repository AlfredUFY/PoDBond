import axios from 'axios';

export const getShipping = async (apiKey, blueprint_id, provider_id) => {
    try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${apiKey}`;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        const response = await axios.get(`https://api.printify.com/v1/catalog/blueprints/${blueprint_id}/print_providers/${provider_id}/shipping.json`)
        return JSON.stringify(response.data);
    }
    catch (error) {
        console.error('Failed to retrieve shops:', error);
        throw error;
    }
}