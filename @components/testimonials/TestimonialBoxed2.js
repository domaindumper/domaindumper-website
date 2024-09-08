// import Swiper core and required modules

import Image from 'next/legacy/image';
export const forbes = '/img/partners/forbes-white.svg';
export const forbesAvatar = '/img/avatars/female/3.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
export default function TestimonialBoxed2() {
    return (
        <>
            <div className='container'>
                <div className='bg-danger px-4 py-7 text-white rounded-5 shadow-lg'>
                <div className='row'>
                <div className='col-md-8 mx-auto text-center'>
                    <div className='width-160 mx-auto h-auto mb-4'>
                        <Image layout='responsive' src={forbes} width="400" height="125" alt="" />
                    </div>
                    <h3 className='fw-normal flex-grow-1 lh-base mb-4 mb-lg-5'>
                    “ We were looking for an innovation partner that could be provide all the components that we needed. SaaS, with its abilities was a good match.”
                    </h3>
                    <div className='d-flex justify-content-center mt-auto align-items-center'>
                        <div className='flex-shrink-0 width-60 shadow rounded-circle'>
                            <Image layout='responsive' src={forbesAvatar} width="256" height="256" className='rounded-circle' alt="" />
                        </div>
                        <div className='ps-4'>
                            <h6 className='mb-1'>Sarah Tiffany</h6>
                            <small className='text-white text-opacity-75'>Airbnb manager</small>
                        </div>
                    </div>
            </div>
                </div>
                </div>
            </div>
        </>
    );
};