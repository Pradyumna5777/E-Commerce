import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../swiperPage.css';
import { Pagination, Navigation } from 'swiper/modules';

export default function SwiperPage() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper top-[9vh] cursor-pointer"
      >
        <SwiperSlide><img src="./images/scrollingImg (1).jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/scrollingImg (2).jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/scrollingImg (3).jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/scrollingImg (4).jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/scrollingImg (5).jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/scrollingImg (1).jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/scrollingImg (2).jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/scrollingImg (3).jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/scrollingImg (4).jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
