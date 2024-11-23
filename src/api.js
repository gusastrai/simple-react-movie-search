import axios from "axios";

const apiUrl = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;

export const getMovies = async () => {
  try {
    const response = await axios.get(`${apiUrl}/movie/popular?page=1&api_key=${apiKey}`);
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const searchMovie = async (query) => {
  try {
    const response = await axios.get(`${apiUrl}/search/movie?query=${query}&page=1&api_key=${apiKey}`);
    return response.data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};