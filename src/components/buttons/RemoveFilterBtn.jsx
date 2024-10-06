import React, { useContext } from "react";
import ItemContext from "../context/itemContext";

const RemoveFilterBtn = () => {
  const {
    allCards,
    setAllCards,
    setLocVal,
    setRooms,
    setAmenities,
  } = useContext(ItemContext);

  const removeFilter = () => {
    setAllCards(allCards);
    setLocVal("");
    setRooms(1);
    setAmenities([]);
  };

  return(
    <button onClick={removeFilter}
    className="border-solid border-[1px] border-[#0000004e] w-[3.8vw] flex items-center justify-center py-[1vh] rounded-full ">
      <i className="ri-filter-off-fill hover:text-[#4d4c4c7b] text-[#757575fb] text-2xl"></i>
    </button>
  
  );
};

export default RemoveFilterBtn;
