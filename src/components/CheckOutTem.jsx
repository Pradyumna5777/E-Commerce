import React, { useContext } from "react";
import "remixicon/fonts/remixicon.css";
import ItemContext from "./context/itemContext";

const CheckOutTem = () => {

  const { setCardToggle,
    checkOutToggle,
    calculateTotalPrice,
    setCheckOutToggle,
    setBgOpacity,
    cart} = useContext(ItemContext);

    

  const cnclBtn = () => {
    setCheckOutToggle("-110vh");
    setBgOpacity("");
  };
  const payDetails = () => {
    setCardToggle(0);
    setCheckOutToggle("-110vh");
  };

  return (
    <div
      style={{ marginTop: checkOutToggle }}
      className="custom-scrollbar py-2 border-[1px] border-[#2563eb] shadow-2xl transition-all duration-500 ease-out overflow-y-auto h-[65vh] md:w-[50vw] w-[95vw] bg-[#ffffffd8] rounded fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2] flex flex-col items-center"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="md:text-4xl text-2xl underline underline-offset-4">Details</h1>
        <button onClick={cnclBtn} className="absolute top-0 right-0 text-2xl px-2 hover:bg-white rounded-full hover:text-red-600">
          <i className="ri-close-large-line"></i>
        </button>
      </div>
      {cart.map((e,index) => (
        <div key={index} className="md:flex px-4 py-4 gap-4 w-full">
        <img
          src={e.image}
          className="md:h-full h-[30vh] w-[100vw] md:w-[20vw] object-cover"
          alt="Property"
        />
        <div className="w-full flex flex-col items-center gap-6">
          <div className="flex w-full items-center justify-center flex-col gap-2">
            <h1 className="md:text-2xl text-xl font-semibold">{e.title}</h1>
            <p className="md:text-lg font-semibold">Desc: {e.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-1 h-[25vh]">
            <div className="flex flex-col justify-center">
              <span className="font-semibold md:text-lg">Bedrooms:</span>
              <span>{e.bedrooms}</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-semibold md:text-lg">Location:</span>
              <span>{e.location}</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-semibold md:text-lg">Quantity:</span>
              <span>{e.quantity}</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-semibold md:text-lg">Amenities:</span>
              <span>{e.amenities}</span>
            </div>
          </div>
        </div>
      </div>
        
      ))}
        <div className='md:px-4 md:py-5 px-1 py-1 bg-white flex items-center justify-between md:gap-4 w-full'>
        <h1 className='md:text-2xl text-sm font-semibold w-full'>Cart Total: ₹{calculateTotalPrice()}</h1>
      <button onClick={payDetails} className="text-white md:py-2 md:px-4 py-1 bg-[#2563eb] w-[100vw]">
        Proceed
      </button>
    </div>
    </div>

  );
};

export default CheckOutTem;
