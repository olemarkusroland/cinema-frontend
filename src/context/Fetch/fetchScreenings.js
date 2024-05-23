import axios from 'axios';
import { formatScreenings } from './convert-format/formatScreening';

export const fetchScreenings = async () => {
    try {
        const response = await axios.get('http://localhost:4000/screening');
        const formattedData = formatScreenings(response.data.data);
        return formattedData;
    } catch (error) {
        console.error("There was an error fetching the screenings!", error);
        return [];
    }
};
