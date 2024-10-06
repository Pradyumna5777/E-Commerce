import React, { useContext } from "react";
import ItemContext from "./context/itemContext";
import { useNavigate } from "react-router-dom";

const AddressComp = () => {
  const { currentAddress, allAddress, users } = useContext(ItemContext);
  console.log("AddressComp", allAddress);

  const navigate = useNavigate();

  const changeAddress = () => {
    if(users){

      navigate("/savedaddress");
    }else if (!users) {
      swal("Login First!");
    }
  };
  console.log("currentAddress", currentAddress);

  return (
    <div className="flex flex-col justify-center">
      <h1 className="font-black text-xl">Deliver To:</h1>
      {currentAddress && (
        <div className="bg-[#fff] px-[2vw] py-[1vh] w-[35vw] overflow-hidden text-wrap">
          <div className="flex items-center gap-1">
            <h1 className="font-semibold">{currentAddress.fullname + ","}</h1>
            <span className="font-semibold">{currentAddress.phonenumber}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold">{currentAddress.pincode}</span>
            <span className="font-semibold">{currentAddress.state}</span>
            <span className="font-semibold">{currentAddress.city}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold">{currentAddress.roadname}</span>
          </div>
          <div className="w-full flex items-center justify-end">
            <button
              onClick={changeAddress}
              className="text-white font-black rounded bg-[#0F5AFC] hover:bg-[#0f5afccd] py-2 px-6"
            >
              Change Address
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressComp;
