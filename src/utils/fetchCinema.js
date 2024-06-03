import axios from "axios";

export const fetchCinema = async (target) => {
  try {
    const response = await axios.get(`http://localhost:4000/${target}`);
    return response.data.data;
  } catch (error) {
    console.error(`There was an error fetching the ${target}`, error);
    return [];
  }
};
