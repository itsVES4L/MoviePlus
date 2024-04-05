import { useQuery } from "@tanstack/react-query";
import { Header, Footer, Body } from "./layouts";
import { useEffect, useState } from "react";

function App() {
  return (
    <div
      className={`app bg-darkBlue   relative overflow-x-hidden font-mons w-screen h-screen text-white scroll-smooth`}
    >
      <Body />
      <Footer />
    </div>
  );
}

export default App;
