import React from 'react'
import css from './Testimonial.module.css';
import Hero from '../../assets/testimonialHero.png';
import {Swiper, SwiperSlide} from 'swiper/react';
import {TestimonialsData} from '../../data/testimonials.js';

const Testimonial = () => {
    return (
    <div className={css.testimonials}>
        <div className={css.wrapper}>
            <div className={css.containerLeft}>
                <span>Mas Valorados</span>
                <span>
                    Exercitation anim eu lorem 
                    reprehenderit eu minim
                </span>
            </div>

            <img src={Hero} alt="imagen testimonials" />

            <div className={css.containerRight}>
                <span>100k</span>
                <span>Compradores Felices con Nosotros</span>
            </div>
        </div>

        <div className={css.review}>Reviews</div>

        <div className={css.carousel}>
            {/* el breakpoints se utiliza para modificarlo atributos al cambiar 
                el tamaño de la vista y se lee asi cuando sea mayor al Nº */}
            <Swiper 
            slidesPerView={3} 
            slidesPerGroup={1} 
            spaceBetween={20} 
            className={css.sCarousel}
            breakpoints={{
                856: {
                    slidesPerView: 3
                },
                640: {
                    slidesPerView: 2
                },
                0: {
                    slidesPerView: 1
                },
            }}
            >
                {
                    TestimonialsData.map((testi, i) =>(
                        <SwiperSlide>
                            <div className={css.swiperSlide}>
                                <img src={testi.image} alt="imagen testimonio" />
                                <span>{testi.comment}</span>
                                <hr/>
                                <span>{testi.name}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
    )
}

export default Testimonial;