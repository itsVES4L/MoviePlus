import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  PersonDetailsPage,
  Error404Page,
  HomePage,
  MovieDetailsPage,
  SearchPage,
} from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/:type/:id" element={<MovieDetailsPage />} />
      <Route path="/person/:id" element={<PersonDetailsPage />} />

      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
};

export default Router;
