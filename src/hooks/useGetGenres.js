import { useEffect, useState } from "react";
import useGetData from "./useGetData";

const useGetGenres = (dataType, data) => {
  const [genres, setGenres] = useState([]);
  const getGenres = useGetData("genres", `genre/${dataType}/list`)?.data
    ?.genres;

  useEffect(() => {
    if (!data?.genre_ids || !getGenres) return;

    const filteredGenres = getGenres?.filter((genre) =>
      data?.genre_ids?.includes(genre.id)
    );
    setGenres(filteredGenres);
  }, [data, getGenres]);
  return genres;
};

export default useGetGenres;
