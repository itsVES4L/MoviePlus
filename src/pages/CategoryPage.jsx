import React, { useEffect, useRef, useState } from "react";
import {
  Link,
  useParams,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import { Header } from "../layouts";
import { useGetData } from "../hooks";
import { Loader, MovieRowCard, PagePagination } from "../components";
import { fetchData } from "../api/api";
const CategoryPage = () => {
  const topRef = useRef(null);
  const params = useParams();
  const type = params.type;
  const [searchParams, setSearchParams] = useSearchParams();
  const path = searchParams.toString();
  const with_genre = searchParams.get("with_genre");
  const page = searchParams.get("page");

  const mediaType = searchParams.get("mediaType");
  const [activeGenreList, setActive] = useState(type);

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const search = async () => {
      const result = await fetchData(`discover/${type}`, {
        language: "en-US",
        page: page,
        sort_by: "vote_count.desc",
        with_genres: with_genre,
      });

      setMovieList(result);
    };
    search();
  }, [page, with_genre]);

  const movieGenres = useGetData("movieGenresList", `genre/movie/list`);
  const showGenres = useGetData("tvGenresList", `genre/tv/list`);
  const genres = activeGenreList === "movie" ? movieGenres : showGenres;

  if (!movieList?.results) {
    return (
      <div className="w-screen  overflow-hidden">
        <Loader />
      </div>
    );
  }
  return (
    <>
      <Header />
      <div
        ref={topRef}
        className=" w-screen  flex flex-col-reverse lg:flex-row lg:items-start  justify-center items-center  lg:justify-end p-5
       "
      >
        <div className=" flex flex-col gap-10 p-5">
          {movieList?.results?.map((item, i) => {
            return <MovieRowCard type={activeGenreList} key={i} data={item} />;
          })}
        </div>
        <div className=" p-5 lg:sticky right-5 top-24 flex h-fit mt-5 flex-col gap-5 w-[78vw] lg:max-w-[22vw] bg-blackShade rounded-xl  ">
          <p className="font-[Staatliches] text-[40px] w-full flex justify-evenly">
            <span>G</span>
            <span>e</span>
            <span>n</span>
            <span>r</span>
            <span>e</span>
            <span>s</span>
          </p>
          <div className="flex justify-center flex-grow items-center gap-4 ">
            <div
              onClick={() => {
                setActive("movie");
              }}
              className={`btn px-10 grow  ${
                activeGenreList === "movie" && "border border-green  "
              }`}
            >
              Movies
            </div>
            <div
              onClick={() => {
                setActive("tv");
              }}
              className={`btn px-10 grow ${
                activeGenreList === "tv" && "border border-green  "
              } `}
            >
              Shows
            </div>
          </div>
          <div className="flex flex-wrap flex-grow w-full  justify-center items-center  bg-blackShade rounded-xl  gap-2">
            {genres?.data?.genres?.map((genre) => {
              return (
                <a
                  href={`/category/${mediaType}?${path}`}
                  onClick={() => {
                    setSearchParams({
                      with_genre: genre.id,
                      page: 1,
                      mediaType: activeGenreList,
                    });
                  }}
                  key={genre.id}
                  className="px-[5px] hover:bg-[#4cda4c] grow text-[13px]  lg:text-[15px] text-center text-[#fffffffd] rounded-lg border border-[#62e262b2] bg-[#0080006e]"
                >
                  {genre.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <PagePagination
        pages={movieList.total_pages}
        path={`/category/${mediaType}?${path}`}
        handleChange={async (event, value) => {
          setSearchParams({
            with_genre: with_genre || " ",
            page: value,
            mediaType: activeGenreList,
          });
          window.Location.prototype.replace = `/category/${mediaType}?${path}`;
          topRef.current.scrollIntoView();
        }}
      />
    </>
  );
};

export default CategoryPage;
