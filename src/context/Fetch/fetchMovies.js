import axios from 'axios';

export const fetchMovies = async () => {
    try {
        const response = await axios.get('http://localhost:4000/movie');
        
        return response.data.data;
    } catch (error) {
        console.error("There was an error fetching the movies!", error);
        return [];
    }
};
