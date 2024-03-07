import React from "react";
import { Route, Routes } from "react-router-dom";
import { DetailsPage, Error404Page, HomePage, SearchPage } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/details/:id" element={<DetailsPage />} />
      <Route path="*" element={<Error404Page />} />


    </Routes>
  );
};

export default Router;
