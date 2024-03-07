import axios from "axios";

const fetchData = async (endPoint, params) => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjZiZTAyYzBjOTVlNTU0YTExMzM2NGEyZDM2YTYzMiIsInN1YiI6IjY1YzVlMzc3NTM0NjYxMDE3YjhiNzkyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OQEweWswz1ey2eFuFOWc3mZdR2qxU9tW5UMjIl80dLU";

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/${endPoint}`,
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
