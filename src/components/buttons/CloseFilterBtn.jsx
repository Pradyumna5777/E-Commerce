import React, { useContext } from "react";
import ItemContext from "../context/itemContext";

const CloseFilterBtn = () => {
  const {
    setShowFilter,
    setGap,
    setMargin,
    setFilterToggle,
  } = useContext(ItemContext);

  const filterCloseBtn = () => {
    setFilterToggle("none");
    setShowFilter("repeat(4, 1fr)");
    setGap("2vw");
    setMargin("0vw");
  };

  return (
    <button
      onClick={filterCloseBtn}
      className="text-black absolute top-0 right-0 text-2xl px-2 mr-2 mt-2 transition ease-in duration-[0.2] hover:scale-[1.3] hover:bg-white rounded-full hover:text-[#ff1414]"
    >
      <i className="ri-close-large-line"></i>
    </button>
  );
};

export default CloseFilterBtn;
