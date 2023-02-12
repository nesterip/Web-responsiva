
import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Navigation } from 'swiper';
import {SliderProducts} from '../../data/products';
import './Slider.css';

//swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = () => {
    return (
    <div className='s-container'>
        <Swiper 
        className='mySwiper' 
        modules={[Pagination, Navigation]} 
        navigation={true} loopFillGroupWithBlank={true} 
        slidesPerView={3} 
        spaceBetween={30} 
        slidesPerGroup={1} 
        loop={true}
        breakpoints={{
            856:{
                slidesPerView:3
            },
            520:{
                slidesPerView:2
            },
            0:{
                slidesPerView:1
            }
        }}>
            {SliderProducts.map((slide, i) => (
                <SwiperSlide>
                    <div className='left-s'>
                        <div className='name-s'>
                            <span>{slide.name}</span>
                            <span>{slide.detail}</span>
                        </div>
                        <span>${slide.price}.00</span>
                        <div>Show now</div>
                    </div>
                    <img src={slide.img} alt="item del slide" className='img-p'/>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
    )
}

export default Slider;