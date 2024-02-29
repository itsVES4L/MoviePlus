import { useQuery } from "@tanstack/react-query";
import { Header, Footer, Body } from "./layouts";


// import { FetchData } from "./api/api";

function App() {
  
  return (
    <div className={`bg-darkBlue overflow-x-hidden  overscroll-y-none font-mons w-screen h-screen text-white`}>
      <Header />
      <Body />
     <div className="h-[3000px]"></div>

      {/* <Swiperr/> */}
      {/* 
      <Footer /> */}
    </div>
  );
}

export default App;
