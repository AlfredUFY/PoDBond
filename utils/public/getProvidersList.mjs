import axios from 'axios';

export const getProvidersList = async () => {
    try {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        const response = await axios.get(`https://api.printify.com/v1/catalog/print_providers.json`)
        return JSON.stringify(response.data);
    }
    catch (error) {
        console.error('Failed to retrieve shops:', error);
        throw error;
    }
}