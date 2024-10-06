import "remixicon/fonts/remixicon.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SwiperPage from "./SwiperPage";
import { useContext } from "react";
import ItemContext from "./context/itemContext";
import HomePage from "./HomePage";
import HomeData from "./HomeData";

const Home = () => {
  const { searchInput, data } = useContext(ItemContext);

  return (
    <>
      <Navbar />
      {searchInput.length === 0 ? (
        <div className="w-[100vw] flex flex-col items-center justify-center">
          <SwiperPage />
          <HomePage />
        </div>
      ) : data.length === 0 ? (
        <div className="h-[100vh] w-[100vw] font-black text-2xl flex items-center justify-center">
          No Results
        </div>
      ) : (
        <HomeData />
      )}
      <Footer />
    </>
  );
};
export default Home;
