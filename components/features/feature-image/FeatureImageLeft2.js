import Image from 'next/legacy/image';
import Link from "next/link";
import ListCheck from "components/lists/ListCheck";
export const FeatureImage2 = '/img/integrations.svg'
export default function FeatureImageLeft2() {
    return (
        <div className="row align-items-center">
            <div className="col-md-6 mb-6 mb-md-0" data-aos="fade-up" data-aos-delay="100">
                <div className="position-relative">
                    <Image src={FeatureImage2} priority layout="responsive" width="724" height="428" className="rounded-4" alt="" />
                </div>
            </div>
            <div className="col-lg-5 col-md-6 ms-lg-auto">
                <h2 className='position-relative fs-1 mb-4' data-aos="fade-up">Deploy anywhere — with any data.</h2>
                <p className='lead d-none d-lg-block mb-4' data-aos="fade-up" data-aos-delay="100">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.</p>
                <ul className='list-unstyled mb-5' data-aos="fade-up" data-aos-delay="200">
                    <ListCheck className="d-flex mb-3 align-items-start" listText="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                    <ListCheck className="d-flex mb-3 align-items-start" listText="Excepteur sint occaecat cupidatat sunt in culpa qui officia deserunt mollit anim id est laborum." />
                </ul>
                <div data-aos="fade-up" data-aos-delay="300">
                    <Link href='/#' className='fw-bold'>Learn More
                        <span className='material-symbols-rounded fs-5 ms-2 align-middle lh-1'>arrow_forward</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}