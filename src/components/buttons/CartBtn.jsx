import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ItemContext from "../context/itemContext";

const CartBtn = () => {

  const { cartNumber,setCartNumber,cart} =
  useContext(ItemContext);


  return (
    <Link to="/cart">
      <div className="relative">
        {
          cart.length===0?'':
          <div className="absolute h-[2.2vh] w-[2.2vh] rounded-full -right-[.8vh] -top-[.8vh] bg-red-600 text-xs flex items-center justify-center">{cartNumber}</div>
        }
      <button className="bg-[#FB641B] hover:bg-[#fb661bd6] md:py-[1vh] flex items-center justify-center md:px-[2vh] text-white px-1 rounded ">
        <i className="ri-shopping-cart-fill"></i><h1 className="cursor-pointer font-black">Cart</h1>
      </button></div>
    </Link>
  );
};

export default CartBtn;
