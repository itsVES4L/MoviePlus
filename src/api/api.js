import axios from "axios";

const fetchData = async (endPoint, params) => {
  const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
  const token =import.meta.env.VITE_API_KEY;

  const options = {
    method: "GET",
    url: `${BASE_URL + endPoint}`,
    params: params,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const result = axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return result;
};

export { fetchData };
