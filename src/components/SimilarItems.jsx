import React from 'react'
import SwiperPage2 from "./SwiperPage2";
import { useNavigate } from 'react-router-dom';


const SimilarItems = () => {



  const navigate=useNavigate();

  
  const similarProducts=()=>{
    navigate('/allsimilarproducts');
  }
  return (
    <div className="mt-[10vh]">
    <div className="bg-white">
      <button onClick={similarProducts} className="font-black flex hover:scale-[1.05] transition-all ease-in-out duration-[.1s] hover:bg-[#D00909] hover:text-white rounded items-center justify-between text-2xl bg-white px-[1vw]">
        <h1 className="cursor-pointer">All Similar Products</h1>
        <i className="ri-arrow-right-line"></i>
      </button>
    </div>
    <SwiperPage2 />
  </div>
  )
}

export default SimilarItems