import React from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const id = useParams().id;
  return <div className="bg-white text-black w-screen flex justify-center items-center">{id}</div>;
};

export default DetailsPage;
