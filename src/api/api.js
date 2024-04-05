import { data } from "autoprefixer";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const token = import.meta.env.VITE_API_KEY;

const options = (endPoint, params) => {

  return {
    method: "GET",
    url: `${BASE_URL + endPoint}`,
    params: params,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  }
};


const fetchData = (endPoint, params) => {
  const result = axios
    .request(options(endPoint, params))
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return result
};


export { fetchData };
