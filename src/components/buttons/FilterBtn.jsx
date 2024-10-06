import React, { useContext } from "react";
import ItemContext from "../context/itemContext";

const FilterBtn = () => {
  const { setShowFilter, setGap, setMargin, setFilterToggle } =
    useContext(ItemContext);

  const filterBtn = () => {
    setShowFilter("repeat(3, 1fr)");
    setGap("3vw");
    setMargin("25vw");
    setFilterToggle("block");
  };

  return (
    <button onClick={filterBtn} className="border-solid border-[1px] border-[#0000004e] w-[3.8vw] flex items-center justify-center py-[1vh] rounded-full ">

      <i className="ri-equalizer-fill hover:text-[#4d4c4c7b] text-[#757575fb] text-2xl"></i>
    </button>)
  
};

export default FilterBtn;
