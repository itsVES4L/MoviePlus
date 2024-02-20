// import axios from "axios";

// const API_KEY = "1cb08932";
// const SEARCH_MOVIE_BASE_URL = `https://www.omdbapi.com/`;

// const FetchData = async (endPoint, params) => {
//   const options = {
//     method: "GET",
//     url: `https://api.themoviedb.org/3/${endPoint}`,
//     params: params,
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjZiZTAyYzBjOTVlNTU0YTExMzM2NGEyZDM2YTYzMiIsInN1YiI6IjY1YzVlMzc3NTM0NjYxMDE3YjhiNzkyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OQEweWswz1ey2eFuFOWc3mZdR2qxU9tW5UMjIl80dLU",
//     },
//   };
//   const res = axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//       return response.data;
//     })
//     .catch(function (error) {
//       console.error(error);
//       return error;
//     });

//   return res;
// };

// // const search = axios.create({
// //   baseURL: SEARCH_MOVIE_BASE_URL,
// //   timeout: 1000,
// // });

// export { FetchData };
