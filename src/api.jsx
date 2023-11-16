import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39762348-dd965ab637a7eabeb6914620f';

export const fetchImages = async (query, page) => {
    try {
        const respons = await axios.get(BASE_URL, {
            params: {
                q: query,
                page: page,
                key: API_KEY,
                image_type: 'photo',
                orientation: 'horizontal',
                per_page: 12,
            }
        });
        return respons.data;
    } catch (error) {
      throw error;
    }
};