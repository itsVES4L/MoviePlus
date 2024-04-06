import { useQuery } from "@tanstack/react-query";
import { Header, Footer, Body } from "./layouts";
import { useEffect, useState } from "react";
import ScrollToTop from "./helper/ScrollToTop";

function App() {
  return (
    <div
      className={`app bg-darkBlue   relative overflow-x-hidden font-mons w-screen h-screen text-white scroll-smooth`}
    >
      <Body />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
