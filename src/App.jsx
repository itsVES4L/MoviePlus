import { Footer, Body } from "./layouts";

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
