import Image from 'next/legacy/image';
import Link from "next/link";
import ListCheck from "components/lists/ListCheck";
export const FeatureImage1 = '/img/shots/01.png';
export const FeatureImage2 = '/img/shots/02.png';
export const FeatureImage3 = '/img/shots/08.png';
export default function FeatureImageLeft1() {
  return (
    <div className="row align-items-center">
      <div className="col-md-6 pe-md-5 pe-lg-7 col-sm-9 mb-6 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <div className="col-6">
            
          <div className="position-relative overflow-hidden rounded-3 shadow-lg">
              <Image src={FeatureImage3} priority layout="responsive" width="454" height="748" alt="" />
            </div>
          </div>
          <div className="col-6">
            
          <div className="position-relative overflow-hidden rounded-3 mb-4 shadow-lg">
              <Image src={FeatureImage1} priority layout="responsive" width="275" height="293" alt="" />
            </div>
          <div className="position-relative overflow-hidden mb-4 rounded-3 shadow-lg">
              <Image src={FeatureImage2} priority layout="responsive" width="275" height="268" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-5 mx-auto">
        <h2 className='position-relative ms-md-n3 ms-lg-0 ms-0 me-lg-n5 fs-1 mb-4' data-aos="fade-up">Deliver more engaging analytics.</h2>
        <p className='mb-4' data-aos="fade-up" data-aos-delay="100">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.</p>
        <ul className='list-unstyled mb-4 mb-lg-5' data-aos="fade-up" data-aos-delay="200">
          <ListCheck className="d-flex mb-3 align-items-start" listText="Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          <ListCheck className="d-flex mb-3 align-items-start" listText="Excepteur sint occaecat cupidatat sunt in culpa qui officia deserunt mollit anim id est laborum." />
        </ul>
        <div data-aos="fade-up" data-aos-delay="300">
          <Link href='/#' className='fw-bold'>Learn More About Analytics
            <span className='material-symbols-rounded fs-5 ms-2 align-middle lh-1'>arrow_forward</span>
          </Link>
        </div>

      </div>
    </div>
  );
}