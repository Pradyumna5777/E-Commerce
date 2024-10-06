import React from "react";
import { Link } from "react-router-dom";

const WishListBtn = () => {

  return (
    <Link to="/wishlist">
      <button className="border-solid border-[1px] border-[#0000004e] w-[3.8vw] flex items-center justify-center py-[1vh] rounded-full ">
        <i className="ri-heart-3-fill text-red-600 text-2xl"></i>
      </button>
    </Link>
  );
};

export default WishListBtn;
