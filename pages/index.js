import { useState } from 'react';
import Head from 'next/head';
import "material-symbols";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Fix component imports with consistent relative paths
import FeatureIconDefault from "../components/features/feature-icons/FeatureIconDefault";
import HeroDefault from "../components/hero-sliders/HeroDefault";
import Layout from "../layouts/LayoutDefault";
import FeatureImageLeft1 from "../components/features/feature-image/FeatureImageLeft1";
import FeatureImageRight1 from "../components/features/feature-image/FeatureImageRight1";
import FeatureImageLeft2 from "../components/features/feature-image/FeatureImageLeft2";
import CtaBoxed from "../components/call-to-actions/CtaBoxed";
import IntegrationDefault from "../components/integrations/IntegrationDefault";
import FeatureIconLeft from "../components/features/feature-icons/FeatureIconLeft";
import FeatureIconVertical from "../components/features/feature-icons/FeatureIconVertical";
import TestimonialBoxed from "../components/testimonials/TestimonialBoxed";
import PricingDefault from "../components/pricing-tables/PricingDefault";

// Fix context and utils imports
import { useSite } from '../context/SiteContext';
import { useAuth } from '../context/AuthContext';
import { formatPageTitle } from '../utils/formatters';

// First, import the carousel components at the top of the file
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Asset exports
export const airbnb = "/img/partners/airbnb-white.svg";
export const airbnbAvatar = "/img/avatars/male/1.jpg";

export default function Home() {
  const { t } = useTranslation('common');
  const { siteInfo } = useSite();
  const { isLoggedIn, userData } = useAuth();
  const [domainQuery, setDomainQuery] = useState('');
  const [isYearly, setIsYearly] = useState(true);

  return (
    <>
      <Head>
        <title>{formatPageTitle('Home', siteInfo?.title)}</title>
        <meta name="description" content="DomainDumper - Your Gateway to Comprehensive Domain and Website Intelligence" />
      </Head>

      {/* Enhanced Hero Section */}
      <section className="position-relative overflow-hidden bg-primary-gradient text-white">
        <div className="container py-11 py-lg-13 position-relative"> {/* Updated padding classes */}
          <div className="row align-items-center py-5"> {/* Added vertical padding */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 mb-4">
                Unlock the World's Domain and Website Data
              </h1>
              <p className="lead mb-5">
                Access real-time information on domain registrations, ownership details, technologies used, and DNS configurations. Make data-driven decisions with comprehensive digital intelligence.
              </p>
              <div className="d-grid gap-3 d-sm-flex">
                <Link href="/domains/explore" className="btn btn-lg btn-primary">
                  Explore Domain Data
                </Link>
                <Link href="/dns/records-lookup" className="btn btn-lg btn-outline-light">
                  Try DNS Lookup
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative mt-4 mt-lg-0"> {/* Added margin top */}
                <img 
                  src="https://picsum.photos/800/600?random=1" 
                  alt="Domain Intelligence Platform" 
                  className="img-fluid rounded-4 shadow-lg"
                />
                {/* Data Stats Overlay */}
                <div className="position-absolute top-0 end-0 mt-4 me-4 bg-white p-3 rounded-3 shadow-lg">
                  <h6 className="text-primary mb-1">Live Data</h6>
                  <p className="text-dark mb-0">1M+ Domains Tracked</p>
                </div>
                <div className="position-absolute bottom-0 start-0 mb-4 ms-4 bg-white p-3 rounded-3 shadow-lg">
                  <h6 className="text-primary mb-1">Real-time Updates</h6>
                  <p className="text-dark mb-0">24/7 Monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Data Services Overview */}
      <section className="position-relative">
        <div className="container py-9 py-lg-11">
          <div className="row text-center mb-7">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 mb-4">Explore Our Data & Analysis Services</h2>
              <p className="lead mb-0">Comprehensive tools and insights for domain intelligence</p>
            </div>
          </div>
          <div className="row g-4">
            {/* Domain Database */}
            <div className="col-md-6 col-lg-3" data-aos="fade-up">
              <Link href="/domains" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm hover-shadow-lg transition-all">
                  <div className="card-body p-5">
                    <div className="icon-box text-center mb-4">
                      <span className="material-symbols-rounded display-4 text-primary">database</span>
                    </div>
                    <h4 className="mb-3">Domain Database</h4>
                    <p className="mb-0">Access our vast database of registered, expired, and deleted domains with real-time updates.</p>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* TLD Intelligence */}
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
              <Link href="/tlds" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm hover-shadow-lg transition-all">
                  <div className="card-body p-5">
                    <div className="icon-box text-center mb-4">
                      <span className="material-symbols-rounded display-4 text-success">domain</span>
                    </div>
                    <h4 className="mb-3">TLD Intelligence</h4>
                    <p className="mb-0">Comprehensive insights into Top-Level Domains, categories, and market trends.</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Website Data */}
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
              <Link href="/website-data" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm hover-shadow-lg transition-all">
                  <div className="card-body p-5">
                    <div className="icon-box text-center mb-4">
                      <span className="material-symbols-rounded display-4 text-info">analytics</span>
                    </div>
                    <h4 className="mb-3">Website Insights</h4>
                    <p className="mb-0">Deep analysis of technologies, servers, and website performance metrics.</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* DNS Tools */}
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
              <Link href="/dns" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm hover-shadow-lg transition-all">
                  <div className="card-body p-5">
                    <div className="icon-box text-center mb-4">
                      <span className="material-symbols-rounded display-4 text-warning">dns</span>
                    </div>
                    <h4 className="mb-3">DNS Analysis</h4>
                    <p className="mb-0">Comprehensive DNS lookup, health checks, and monitoring tools.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Data Insights */}
      <section className="position-relative bg-light">
        <div className="container py-9 py-lg-11">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <h2 className="display-5 mb-4">Latest Domain Insights</h2>
              <p className="lead mb-4">Discover trending data and market patterns</p>
              <div className="vstack gap-4">
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="mb-2">Top New TLDs This Week</h5>
                    <p className="mb-0 text-muted">Analysis of the fastest-growing domain extensions</p>
                  </div>
                </div>
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="mb-2">Technology Trends</h5>
                    <p className="mb-0 text-muted">Most used web technologies in new domains</p>
                  </div>
                </div>
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="mb-2">Registration Patterns</h5>
                    <p className="mb-0 text-muted">Domain registration trends across industries</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <img 
                src="https://picsum.photos/600/400?random=9" 
                alt="Data Insights" 
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="position-relative py-9 py-lg-11">
        <div className="container-fluid"> {/* Changed from container-fluid to container */}
          <div className="row justify-content-center mb-7">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 mb-4">Trusted by Industry Leaders</h2>
              <p className="lead mb-0">See what professionals from leading companies say about our platform</p>
            </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="row">
            <div className="col-12">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={24}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={true}
                breakpoints={{
                  // Updated breakpoints to show max 3 slides
                  576: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  }
                }}
                className="testimonial-carousel"
              >
                {/* Keep your existing SwiperSlides */}
                {/* Microsoft Testimonial */}
                <SwiperSlide>
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-5">
                      <div className="d-flex align-items-center mb-4">
                        <img 
                          src="https://picsum.photos/48/48?random=1" 
                          alt="Sarah Johnson" 
                          className="rounded-circle me-3" 
                          width="48" 
                          height="48"
                        />
                        <div>
                          <h6 className="mb-1">Sarah Johnson</h6>
                          <p className="small text-muted mb-0">Director of Security Operations at Microsoft</p>
                        </div>
                      </div>
                      <blockquote className="mb-0">
                        <p className="lead fs-6 mb-3">
                          "The domain intelligence platform has been invaluable for our security operations. 
                          Real-time monitoring and DNS analysis help us stay ahead of potential threats."
                        </p>
                        <div className="d-flex align-items-center">
                          <div className="text-warning me-2">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <div className="text-muted small">
                            <span className="fw-bold">5.0</span> 
                            <span className="text-muted ms-1">(Verified)</span>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Google Testimonial */}
                <SwiperSlide>
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-5">
                      <div className="d-flex align-items-center mb-4">
                        <img 
                          src="https://picsum.photos/48/48?random=2" 
                          alt="Michael Chen" 
                          className="rounded-circle me-3" 
                          width="48" 
                          height="48"
                        />
                        <div>
                          <h6 className="mb-1">Michael Chen</h6>
                          <p className="small text-muted mb-0">Global Domain Infrastructure Lead at Google</p>
                        </div>
                      </div>
                      <blockquote className="mb-0">
                        <p className="lead fs-6 mb-3">
                          "Exceptional API integration and data accuracy. This platform is crucial for 
                          monitoring our global domain infrastructure and making strategic decisions."
                        </p>
                        <div className="d-flex align-items-center">
                          <div className="text-warning me-2">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <div className="text-muted small">
                            <span className="fw-bold">5.0</span> 
                            <span className="text-muted ms-1">(Verified)</span>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </SwiperSlide>

                {/* AWS Testimonial */}
                <SwiperSlide>
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-5">
                      <div className="d-flex align-items-center mb-4">
                        <img 
                          src="https://picsum.photos/48/48?random=3" 
                          alt="Emily Rodriguez" 
                          className="rounded-circle me-3" 
                          width="48" 
                          height="48"
                        />
                        <div>
                          <h6 className="mb-1">Emily Rodriguez</h6>
                          <p className="small text-muted mb-0">Principal Solutions Architect at AWS</p>
                        </div>
                      </div>
                      <blockquote className="mb-0">
                        <p className="lead fs-6 mb-3">
                          "From DNS management to domain analytics, this platform delivers enterprise-grade 
                          tools that scale seamlessly with our growing needs."
                        </p>
                        <div className="d-flex align-items-center">
                          <div className="text-warning me-2">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <div className="text-muted small">
                            <span className="fw-bold">5.0</span> 
                            <span className="text-muted ms-1">(Verified)</span>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Meta Testimonial */}
                <SwiperSlide>
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-5">
                      <div className="d-flex align-items-center mb-4">
                        <img 
                          src="https://picsum.photos/48/48?random=4" 
                          alt="David Park" 
                          className="rounded-circle me-3" 
                          width="48" 
                          height="48"
                        />
                        <div>
                          <h6 className="mb-1">David Park</h6>
                          <p className="small text-muted mb-0">Lead Engineer at Meta</p>
                        </div>
                      </div>
                      <blockquote className="mb-0">
                        <p className="lead fs-6 mb-3">
                          "The API integration is seamless, and the data quality is exceptional. 
                          Perfect for managing our domain infrastructure."
                        </p>
                        <div className="d-flex align-items-center">
                          <div className="text-warning me-2">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <div className="text-muted small">
                            <span className="fw-bold">5.0</span> 
                            <span className="text-muted ms-1">(Verified)</span>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Oracle Testimonial */}
                <SwiperSlide>
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-5">
                      <div className="d-flex align-items-center mb-4">
                        <img 
                          src="https://picsum.photos/48/48?random=5" 
                          alt="Lisa Chen" 
                          className="rounded-circle me-3" 
                          width="48" 
                          height="48"
                        />
                        <div>
                          <h6 className="mb-1">Lisa Chen</h6>
                          <p className="small text-muted mb-0">Cloud Security Director at Oracle</p>
                        </div>
                      </div>
                      <blockquote className="mb-0">
                        <p className="lead fs-6 mb-3">
                          "Comprehensive domain intelligence that helps us maintain 
                          robust security across our cloud infrastructure."
                        </p>
                        <div className="d-flex align-items-center">
                          <div className="text-warning me-2">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <div className="text-muted small">
                            <span className="fw-bold">5.0</span> 
                            <span className="text-muted ms-1">(Verified)</span>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </SwiperSlide>

                {/* IBM Testimonial */}
                <SwiperSlide>
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-5">
                      <div className="d-flex align-items-center mb-4">
                        <img 
                          src="https://picsum.photos/48/48?random=6" 
                          alt="James Wilson" 
                          className="rounded-circle me-3" 
                          width="48" 
                          height="48"
                        />
                        <div>
                          <h6 className="mb-1">James Wilson</h6>
                          <p className="small text-muted mb-0">Technical Director at IBM</p>
                        </div>
                      </div>
                      <blockquote className="mb-0">
                        <p className="lead fs-6 mb-3">
                          "Essential for our cybersecurity operations. The real-time 
                          monitoring capabilities are particularly impressive."
                        </p>
                        <div className="d-flex align-items-center">
                          <div className="text-warning me-2">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <div className="text-muted small">
                            <span className="fw-bold">5.0</span> 
                            <span className="text-muted ms-1">(Verified)</span>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="position-relative bg-gradient-light-white">
        <div className="container py-9 py-lg-11">
          <div className="row justify-content-center mb-7">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2 className="display-5 mb-4">Choose Your Plan</h2>
              <p className="lead mb-5">Select the perfect plan for your domain management needs</p>
              
              {/* Pricing Toggle */}
              <div className="d-flex align-items-center justify-content-center mb-5">
                <span className={`me-3 ${!isYearly ? 'text-primary' : 'text-muted'}`}>Monthly</span>
                <div className="form-check form-switch mb-0">
                  <input 
                    className="form-check-input"
                    type="checkbox"
                    id="pricingToggle"
                    checked={isYearly}
                    onChange={() => setIsYearly(!isYearly)}
                  />
                  <label className="form-check-label" htmlFor="pricingToggle"></label>
                </div>
                <span className={`ms-3 ${isYearly ? 'text-primary' : 'text-muted'}`}>
                  Yearly <span className="badge bg-primary-subtle text-primary ms-1">Save 20%</span>
                </span>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* Free Plan */}
            <div className="col-lg-4" data-aos="fade-up">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-5">
                  <div className="mb-4">
                    <h4 className="mb-3">Free</h4>
                    <h2 className="display-6 mb-0">
                      $0
                      <span className="fs-6 fw-normal text-muted">/month</span>
                    </h2>
                  </div>
                  <p className="text-muted mb-4">Perfect for getting started with domain monitoring</p>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-3">
                      <i className="fas fa-check text-primary me-2"></i>
                      Basic domain search
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check text-primary me-2"></i>
                      Limited DNS lookups
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check text-primary me-2"></i>
                      Basic website data
                    </li>
                  </ul>
                  <Link href="/auth/register" className="btn btn-outline-primary w-100">
                    Get Started Free
                  </Link>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card border-primary border-2 shadow-lg h-100">
                <div className="card-body p-5">
                  <div className="mb-4">
                    <h4 className="mb-3">Pro</h4>
                    <h2 className="display-6 mb-0">
                      ${isYearly ? '39' : '49'}
                      <span className="fs-6 fw-normal text-muted">/month</span>
                    </h2>
                  </div>
                  <p className="text-muted mb-4">Advanced features for professionals</p>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-3">
                      <i className="fas fa-check text-primary me-2"></i>
                      Everything in Free
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check text-primary me-2"></i>
                      Advanced DNS tools
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check text-primary me-2"></i>
                      Real-time monitoring
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check text-primary me-2"></i>
                      API access
                    </li>
                  </ul>
                  <Link href="/pricing" className="btn btn-primary w-100">
                    Choose Pro
                  </Link>
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-5">
                  <div className="mb-4">
                    <h4 className="mb-3">Enterprise</h4>
                    <h2 className="display-6 mb-0">
                      Custom
                    </h2>
                  </div>
                  <p className="text-muted mb-4">For large organizations and teams</p>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-3">
                      <i className="fas fa-check text-primary me-2"></i>
                      Everything in Pro
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check text-primary me-2"></i>
                      Priority support
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check text-primary me-2"></i>
                      Custom integrations
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check text-primary me-2"></i>
                      Dedicated account manager
                    </li>
                  </ul>
                  <Link href="/contact" className="btn btn-outline-primary w-100">
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
