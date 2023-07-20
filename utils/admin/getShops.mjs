import axios from 'axios';

export const getShops = async (apiKey) => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${apiKey}`;
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    const response = await axios.get('https://api.printify.com/v1/shops.json');
    return response.data;
  } catch (error) {
    console.error('Failed to retrieve shops:', error);
    throw error;
  }
};