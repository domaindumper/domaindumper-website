import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/legacy/image';
import React from 'react';

// Import Swiper styles
import 'swiper/css';

export default function ClientsCarousel() {
    if (typeof window === 'undefined') {
        return null; // Return null on server-side
    }

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 5,
                },
            }}
        >
            <SwiperSlide>
                <div className='width-120 mx-auto h-auto'>
                    <Image src="/img/partners/fitbit-dark.svg" layout='responsive' width="140" height="48" alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='width-120 mx-auto h-auto'>
                    <Image src="/img/partners/capsule-dark.svg" layout='responsive' width="140" height="48" alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='width-120 mx-auto h-auto'>
                    <Image src="/img/partners/forbes-dark.svg" layout='responsive' width="140" height="48" alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='width-120 mx-auto h-auto'>
                    <Image src="/img/partners/mailchimp-dark.svg" layout='responsive' width="140" height="48" alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='width-120 mx-auto h-auto'>
                    <Image src="/img/partners/hubspot-dark.svg" layout='responsive' width="140" height="48" alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='width-120 mx-auto h-auto'>
                    <Image src="/img/partners/fitbit-dark.svg" layout='responsive' width="140" height="48" alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='width-120 mx-auto h-auto'>
                    <Image src="/img/partners/capsule-dark.svg" layout='responsive' width="140" height="48" alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='width-120 mx-auto h-auto'>
                    <Image src="/img/partners/forbes-dark.svg" layout='responsive' width="140" height="48" alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='width-120 mx-auto h-auto'>
                    <Image src="/img/partners/mailchimp-dark.svg" layout='responsive' width="140" height="48" alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='width-120 mx-auto h-auto'>
                    <Image src="/img/partners/hubspot-dark.svg" layout='responsive' width="140" height="48" alt=""/>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}