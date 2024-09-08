import Image from "next/legacy/image";
import Link from "next/link";
import 'material-symbols'
export const HeroStaticBG = '/img/shots/trans1.png'
export default function HeroSignUp() {
    return (
        <section className="pt-11 pt-lg-15 pb-lg-12 border-bottom position-relative overflow-hidden">
            <div className="container position-relative">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-center text-lg-start mx-auto mx-lg-0 col-md-10">
                        <h1 className="mb-4 display-4 z-index-1 position-relative">
                        Better business planning for any kind of brand
                        </h1>
                        <p className="mb-4 mb-lg-5 lead">Get started today</p>
                        <div className="position-relative z-index-1">
                        <form>
                            <div className="position-relative mb-2 d-flex flex-column flex-sm-row align-items-md-center">
                                <input type="email" className="form-control flex-grow-1 me-sm-2 mb-2 mb-sm-0 shadow form-control-lg" placeholder="Your work email" />
                                <button type="submit" className="btn btn-primary btn-lg flex-shrink-0">Start free trail</button>
                            </div>
                        </form>
                        </div>
                        <p className="mb-0 small opacity-50">
                            No credit card required
                        </p>
                    </div>
                    
                </div>
            </div>
                          {/** Hero Image */}
                          <div className="position-relative overflow-hidden position-lg-absolute end-0 bottom-0 w-md-60 mt-n7 mt-lg-0 ms-auto w-lg-50 w-xl-40 w-xxl-35">
                                    <Image priority layout="responsive" width="960" height="900" src={HeroStaticBG} alt="" />
                                </div>
        </section>
    );
}