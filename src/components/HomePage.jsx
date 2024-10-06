import React, { useContext } from "react";
import CategoryData from "./CategoryData";
import ItemContext from "./context/itemContext";
import SearchBrand from "./SearchBrand";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { allCards, apiThirdData,setFilteredData, apiFashion, setHomeData, setSearchInput } =
    useContext(ItemContext);
const navigate=useNavigate();
  const filteredInput = allCards.filter(
    (items) => items.category.toLowerCase()
  );
  const filteredApiThirdData = apiThirdData.filter((val) => {
    const {  category } = val;
    return (
      category.toLowerCase() 
   
    );
  });
  const filteredFashionInput = apiFashion.filter((items) => {
    const itemCategory = items.category.toLowerCase();

    return itemCategory;
  });

  const combinedResults = [
    ...filteredInput,
    ...filteredApiThirdData,
    ...filteredFashionInput,
  ];

  const value = combinedResults.filter(
    (val) =>
      val.category.toLowerCase() 
  );
//   console.log("vvaalluuee", value);


  const categoryBox = (val) => {
    // console.log("vall",val);

    const filteredResults = value.filter((vals) => {
      if (vals.category.includes(val.category)) {
        return true;
      }
      return false;
    });
    setFilteredData(filteredResults);
    navigate('/homefiltereddata');

    // const arr = filteredResults.map((items) => {
    //   return items.category;
    // });

    // setSearchInput(arr[0]);
  };

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between gap-4 mt-[9.6vh] px-[5vw] py-[2vh] h-[50vh] w-[100vw]">
        <div className="w-[50%] h-full relative overflow-hidden cursor-pointer rounded-md">
          <img
            className="h-full hover:scale-[1.1] transition ease-in-out duration-[0.3s] shadow-sm object-cover w-full"
            src="./images/headphones.avif"
            alt=""
          />
          <div className="absolute text-white bottom-[1vh] left-[6vw] flex flex-col items-center">
            <h1 className="text-5xl font-black">Sale is on!</h1>
            <h1 className="text-5xl font-black">Shop Now!</h1>
          </div>
          <div className="absolute text-white top-[20vh] text-5xl font-black left-[-10.5vw] -rotate-90">
            <h1>HEADPHONES</h1>
          </div>
        </div>
        <div className="w-[50%] h-full relative overflow-hidden cursor-pointer rounded-md">
          <img
            className="h-full hover:scale-[1.1] transition ease-in-out duration-[0.3s] shadow-sm object-cover w-full"
            src="./images/smartphones.avif"
            alt=""
          />

          <div className="absolute text-white bottom-[1vh] right-[1vw] flex flex-col items-center">
            <h1 className="text-5xl font-black">Buy More!</h1>
            <h1 className="text-5xl font-black">Save More!</h1>
            <h1 className="text-5xl font-black">Upto 30% off!</h1>
          </div>
          <div className="absolute text-white top-[19vh] text-[45px] font-black left-[-10.5vw] -rotate-90">
            <h1>SMARTPHONES</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="px-[5vw] py-[2vh] text-2xl font-black mt-[2vh]">
          Search By Categories
        </h1>
        <div className="grid grid-cols-5 gap-[1vh] px-[5vw] py-[2vh]">
          {CategoryData.map((val, index) => {
            return (
              <div
                key={index}
                onClick={() => categoryBox(val, index)}
                className="relative overflow-hidden rounded hover:text-black text-white "
              >
                <img
                  className="object-cover cursor-pointer hover:scale-[1.1] transition ease-in-out duration-[0.3s] h-[20vh] w-[15vw]"
                  src={val.image}
                  alt=""
                />
                <h1 className="absolute bottom-0 cursor-pointer left-0  text-2xl font-black px-2">
                  {val.title}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
      <SearchBrand/>
    </div>
  );
};

export default HomePage;
