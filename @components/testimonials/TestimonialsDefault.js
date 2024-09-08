// import Swiper core and required modules

import Image from 'next/legacy/image';
export const brandAirbnb = '/img/partners/airbnb-dark.svg';
export const airbnbAvatar = '/img/avatars/male/1.jpg';
export const brandHubspot = '/img/partners/hubspot-dark.svg';
export const hubspotAvatar = '/img/avatars/female/1.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
export default function TestimonialsDefault() {
    return (
        <>
            <div className='col-md-6 mb-5 mb-md-0'>
                <div className='card p-4 p-lg-5 h-100 border-0 shadow-lg rounded-4'>
                    <div className='width-120 p-1 bg-white rounded-3 h-auto mb-4'>
                        <Image layout='responsive' src={brandAirbnb} width="140" height="47" alt="" />
                    </div>
                    <h4 className='fw-normal flex-grow-1 lh-base mb-4 mb-lg-5'>
                        “ We have better analytics than almost all of our competitors.
                    </h4>
                    <div className='d-flex mt-auto align-items-center'>
                        <div className='flex-shrink-0 width-60 shadow rounded-circle'>
                            <Image layout='responsive' src={airbnbAvatar} width="256" height="256" className='rounded-circle' alt="" />
                        </div>
                        <div className='flex-grow-1 ps-4'>
                            <h6 className='mb-1'>Adam Milne</h6>
                            <small className='text-muted'>Airbnb manager</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='card p-4 p-lg-5 h-100 border-0 shadow-lg rounded-4'>
                    <div className='width-120 p-1 bg-white rounded-3 h-auto mb-4'>
                        <Image layout='responsive' src={brandHubspot} width="140" height="47" alt="" />
                    </div>
                    <h4 className='fw-normal flex-grow-1 lh-base mb-5'>
                        “ We were looking for an innovation partner that could be provide all the components that we needed. SaaS, with its abilities was a good match.”
                    </h4>
                    <div className='d-flex mt-auto align-items-center'>
                        <div className='flex-shrink-0 width-60 shadow rounded-circle'>
                            <Image layout='responsive' src={hubspotAvatar} width="256" height="256" className='rounded-circle' alt="" />
                        </div>
                        <div className='flex-grow-1 ps-4'>
                            <h6 className='mb-1'>Adam Milne</h6>
                            <small className='text-muted'>Hubspot developer</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};