import { useQuery } from "@tanstack/react-query";
import { Header, Footer, Body } from "./layouts";


// import { FetchData } from "./api/api";

function App() {
  
  return (
    <div className={`bg-darkBlue font-mons w-screen h-screen text-white`}>
      <Header />
      <Body />
      {/* <Swiperr/> */}
      {/* 
      <Footer /> */}
    </div>
  );
}

export default App;
