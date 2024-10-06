import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomeData from "./HomeData";
import ItemContext from "./context/itemContext";

const ContactUs = () => {
  const { searchInput, data } = useContext(ItemContext);

  return (
    <>
      <Navbar />
      {searchInput.length === 0 ? (
        <div className="mt-[9vh] h-[100vh] flex items-center justify-center bg-[#1F2937]">
          <Footer />
        </div>
      ) : data.length === 0 ? (
        <div className="h-[100vh] w-[100vw] font-black text-2xl flex items-center justify-center">
          No Results
        </div>
      ) : (
        <HomeData />
      )}
    </>
  );
};

export default ContactUs;
