import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetData } from "../hooks";
import { Loader } from "../components";

const DetailsPage = () => {
  const params = useParams();
  const id = params.id;
  const type = params.type;
  const { data, isFetching } = useGetData(
    "movieDetails",
    `${type}/${id}`,
    [],
    0
  );

  if (isFetching) {
    return <Loader />;
  }
  if (data) {
    return (
      <div className="bg-white text-black w-screen flex justify-center items-center">
        {data?.name || data?.title}
      </div>
    );
  }
};

export default DetailsPage;
