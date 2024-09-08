import Image from 'next/legacy/image';
import Link from "next/link";
import ListCheck from "@components/lists/ListCheck";
export const FeatureImageR1 = '/img/img1.jpg'
export const FeatureImageR2 = '/img/shots/07.png'
export default function FeatureImageRight1() {
    return (
        <div className="row align-items-center">
            <div className="col-md-6 relative ps-md-5 ps-lg-9 col-sm-9 mb-6 mb-md-0 order-md-last mx-md-auto" data-aos="fade-up" data-aos-delay="100">
                <div className="row align-items-center">
                    <div className="col-10">
                    <div className="position-relative pb-7" data-aos="zoom-in-up">
                    <Image src={FeatureImageR1} priority className="shadow-lg h-auto rounded-3" layout="responsive" width="690" height="690" alt="" />
                </div>
                   
                    </div>
                    <div className="col-4 position-relative"></div>
                </div>
                <div className="position-absolute me-3 width-160 w-md-50 w-lg-35 h-auto end-0 bottom-0 overflow-hidden shadow-lg rounded-3" data-aos="zoom-in-down" data-aos-delay="100">
                    <Image src={FeatureImageR2} priority layout="responsive" width="275" height="332" alt="" />
                </div>
            </div>
            <div className="col-lg-5 col-md-6 order-md-1 ms-md-auto">
                <h2 className='position-relative mb-4 fs-1' data-aos="fade-right">Inbuilt chat for your organization.</h2>
                <p className='lead mb-4' data-aos="fade-right" data-aos-delay="100">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.</p>
                <ul className='list-unstyled mb-4 mb-lg-5' data-aos="fade-right" data-aos-delay="150">
                    <ListCheck className="d-flex mb-3 align-items-start" listText="Laboris nisi ut aliquip ex ea commodo consequat." />
                    <ListCheck className="d-flex mb-3 align-items-start" listText="Officia deserunt mollit anim id est laborum." />
                </ul>
                <div data-aos="fade-right" data-aos-delay="200">
                    <Link className='fw-bold' href='/#'>Learn More About Features
                        <span className='material-symbols-rounded fs-5 ms-2 align-middle lh-1'>arrow_forward</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}