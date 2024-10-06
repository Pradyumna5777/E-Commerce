import React, { useContext } from "react";
import BrandData from "./BrandData";
import ItemContext from "./context/itemContext";
import { useNavigate } from "react-router-dom";

const SearchBrand = () => {
  const { allCards,setFilteredData, apiThirdData, setHomeData, setSearchInput } =
    useContext(ItemContext);

  const filteredInput = allCards.filter((items) => {
    return items.brand;
  });
  // console.log("filteredInput",filteredInput);
const navigate=useNavigate();
  const filteredApiThirdData = apiThirdData.filter((val) => {
    return val.brand;
  });
  // console.log("filteredApiThirdData",filteredApiThirdData);

  const combinedResults = [...filteredInput, ...filteredApiThirdData];
  // console.log("combinedResults",combinedResults);

  const BrandBox = (val) => {
    // console.log("vall",val);

    const filteredResults = combinedResults.filter((vals) => {
      if (vals.brand.toLowerCase().includes(val.brand)) {
        return vals;
      }
    });
    console.log("filteredResults", filteredResults);

    setFilteredData(filteredResults);
    navigate('/homefiltereddata');

    // const arr = filteredResults.map((items) => {
    //   return items.brand;
    // });
    // setSearchInput(arr[0]);     
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="px-[5vw] py-[2vh] text-2xl font-black mt-[2vh]">
          Search By Brands
        </h1>
        <div className="grid grid-cols-5 gap-[1vh] px-[5vw] py-[2vh]">
          {BrandData.map((val, index) => {
            return (
              <div
                key={index}
                onClick={() => BrandBox(val, index)}
                className="relative overflow-hidden rounded  hover:text-black text-white"
              >
                <img
                  className="object-cover cursor-pointer hover:scale-[1.1] transition ease-in-out duration-[0.3s] h-[20vh] w-[15vw]"
                  src={val.image}
                  alt=""
                />
                <h1 className="absolute bottom-0 left-0 cursor-pointer text-2xl font-black px-2">
                  {val.title}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchBrand;
