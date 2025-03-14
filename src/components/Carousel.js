import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"



const Carousel = () =>{
    return (
    <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{clickable:true}}
        autoplay={{delay:3000}}>
        <SwiperSlide>
            <img src="diapositiva1.jpg" alt="playa1" className="slide"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="diapositiva2.jpg" alt="playa2" className="slide"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="diapositiva3.jpg" alt="playa3" className="slide"/>
        </SwiperSlide>
    </Swiper>
    );
        }


export default Carousel;