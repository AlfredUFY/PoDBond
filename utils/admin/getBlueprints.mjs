import axios from 'axios';

export const getBlueprints = async () => {
    try {
        axios.defaults.headers.post['Content-Type'] = 'application/json';

        const response = await axios.get('https://api.printify.com/v1/catalog/blueprints.json')
        return response.data;
    }
    catch (error) {
        console.error('Failed to retrieve shops:', error);
        throw error;
    }
}