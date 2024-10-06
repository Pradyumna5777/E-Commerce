import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../swiperPage.css";
import { Navigation, Pagination } from "swiper/modules";
import ItemContext from "./context/itemContext";

export default function SwiperPage2() {
  const {similarItems,setObj } = useContext(ItemContext);

  // console.log("valuee",value);  
  const swiperItem=(items)=>{
    setObj(items);

  }
 
  return (
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-[100%]"
      >
        {
       
       similarItems.map((items, index) =>  (
           
              <SwiperSlide onClick={()=>swiperItem(items,index)} key={index} className="flex flex-col cursor-pointer">
                
                {
                  items.image?
                  <div className="h-[28vh]"><img src={items.image} alt="" /></div>:
                  <div className="h-[28vh]"><img src={items.images[0]} alt="" /></div>

                }
                <div className="flex flex-col items-start">
                  {
                    items.model?
                  <div className="font-black text-sm">
                    {items.model.slice(0, 20) + "..."}
                  </div>:''
                  }
                  <div className="font-black text-sm">Price: ₹{items.price}</div>
                </div>
              </SwiperSlide>
          )
        )}
      </Swiper>
  );
}
