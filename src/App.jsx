import { useQuery } from "@tanstack/react-query";
import { Header, Footer, Body } from "./layouts";
import { useEffect, useState } from "react";

function App() {
  return (
    <div
      className={` bg-darkBlue  gap-5 overflow-x-hidden font-mons w-screen h-screen text-white scroll-smooth`}
    >
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
