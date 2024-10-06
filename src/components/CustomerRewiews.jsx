import React, { useContext } from "react";
import ItemContext from "./context/itemContext";
import "../glass.css"

const CustomerRewiews = () => {
  const { obj, setObj } = useContext(ItemContext);
  console.log("obj", obj);

  return (
    <div className="min-h-[20vh] mt-[10vh] bg-white px-[1vw] py-[2vh] mb-[5vh]">
        <h1 className="text-2xl font-black">Customer Reviews</h1>
      <div>
        {
            obj.reviews?

            obj.reviews.map((val, index) => (
              <div key={index} className="glass bg-[#dadada77] rounded py-[2vh] mt-[1vh] flex flex-col">
                <div className="flex flex-col justify-between w-full px-[2vw] py-[2vh]"><span className="font-black text-base">{val.reviewerName}</span> <span className="font-black text-base">{val.rating}</span></div>
                <div className="flex items-center justify-between w-full px-[3vw]"><span className="font-black text-base">{val.comment}</span><span className="font-black text-base">{val.date}</span></div>
              </div>
            )):<div className="bg-[#dadada77] glass rounded h-[15vh] flex items-center justify-center font-semibold">No Reviews</div>
        }
      </div>
    </div>
  );
};

export default CustomerRewiews;
