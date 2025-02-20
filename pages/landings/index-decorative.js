

import CtaVertical from "components/call-to-actions/CtaVertical";
import ClientsCarousel from "components/clients/ClientsCarousel";
import FeatureIconWithTitle from "components/features/feature-icons/FeatureIconWithTitle";
import FeatureTabHorizontal from "components/features/feature-tabs/FeatureTabHorizontal";
import HeroDecorative from "components/hero-sliders/HeroDecorative";
import Numbers1 from "components/numbers/Numbers1";
import ProcessDefault from "components/process/ProcessDefault";
import TestimonialRating from "components/testimonials/TestimonialRating";
import LayoutCombine from "layouts/LayoutCombine";
import Head from "next/head";

export default function IndexDecorative() {
  return (
    <>
      <Head>
        <title>Domaindumper - Home 3</title>
      </Head>
      <HeroDecorative />
      <section className="position-relative overflow-hidden">
        <div className="container position-relative z-index-1">
          <div className="px-4 py-6 bg-primary bg-opacity-10 rounded-4">
            <h6 className="text-center pt-4 text-muted mb-7">Loved by teams around the world</h6>
            <ClientsCarousel />
          </div>
        </div>
      </section>
      <section className="position-relative overflow-hidden">
        <div className="container py-9 py-lg-11">
          <Numbers1 color="primary" />
        </div>
      </section>
      <section className="position-relative bg-body-tertiary">
        <div className="container py-9 py-lg-11 position-relative z-index-1">
          <div className="mb-6 mb-lg-9 mx-auto text-center w-lg-50">
            <h6 className="bg-primary bg-opacity-25 text-primary d-table mx-auto rounded-pill px-3 py-2 mb-4">Core features</h6>
            <h2 className="display-5" data-aos="fade-up">See what Domaindumper can do for your organization.</h2>
          </div>
          <FeatureTabHorizontal />
        </div>
      </section>
      <section className='position-relative'>
        <div className='container py-9 py-lg-11'>
          <h6 className="bg-warning bg-opacity-25 text-warning d-table mx-auto rounded-pill px-3 py-2 mb-4">More benefits</h6>
          <h2 className='display-5 text-center mb-6 mb-lg-9'>Domaindumper at your fingertips</h2>
          <div className='row justify-content-around'>
            <div className='col-sm-6 col-xl-3 mb-6' data-aos="fade-up">
              <FeatureIconWithTitle icon={
                <span className="material-symbols-rounded align-middle fs-3">
                  insights
                </span>
              } color="primary" title="Analytics" description="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
            </div>
            <div className='col-sm-6 col-xl-3 mb-6' data-aos="fade-up">
              <FeatureIconWithTitle icon={
                <span className="material-symbols-rounded align-middle fs-3">
                  workspaces
                </span>
              } color="success" title="Collaboration" description="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
            </div>
            <div className='col-sm-6 col-xl-3 mb-6' data-aos="fade-up">
              <FeatureIconWithTitle icon={
                <span className="material-symbols-rounded align-middle fs-3">
                  smart_toy
                </span>
              } color="warning" title="Automation" description="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
            </div>
            <div className='col-12 d-none d-xl-block'></div>
            <div className='col-sm-6 col-xl-3 mb-6 mb-md-0' data-aos="fade-up">
              <FeatureIconWithTitle icon={
                <span className="material-symbols-rounded align-middle fs-3">
                  verified_user
                </span>
              } color="danger" title="Secure & Reliable" description="Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
            </div>
            <div className='col-sm-6 col-xl-3 mb-6 mb-sm-0' data-aos="fade-up">
              <FeatureIconWithTitle icon={
                <span className="material-symbols-rounded align-middle fs-3">
                  credit_score
                </span>
              } color="secondary" title="Affordable" description="Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
            </div>
            <div className='col-sm-6 col-xl-3' data-aos="fade-up">
              <FeatureIconWithTitle icon={
                <span className="material-symbols-rounded align-middle fs-3">
                  contact_support
                </span>
              } color="info" title="24/7 Suupport" description="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-body-tertiary position-relative">
        <div className="container py-9 py-lg-11">
          <h6 className="bg-primary bg-opacity-25 text-primary d-table mx-auto rounded-pill px-3 py-2 mb-4">Our Process</h6>
          <h2 className="display-5 w-lg-50 mx-auto text-center mb-6 mb-lg-7">
            How does it work?
          </h2>
          <ProcessDefault />
        </div>
      </section>
      <section className="overflow-hidden position-relative">
        <div className="container py-9 py-lg-11">
          <h6 className="bg-warning bg-opacity-25 text-warning d-table mx-auto rounded-pill px-3 py-2 mb-4">Testimonials</h6>
          <h2 className="display-5 w-lg-50 mx-auto text-center mb-6 mb-lg-7">
            What do customers say about Domaindumper?
          </h2>
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <TestimonialRating stars={4.5} profileName="Jason Ings" profilePost="React Developer" profilePic="/img/avatars/male/1.jpg" classes="card text-center py-5 px-4 py-lg-6 hover-lift shadow-lg border-0 rounded-4" comment="“ We were looking for an innovation partner that could be provide all the elements that we needed. Domaindumper, with its abilities was a good match.”" />
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <TestimonialRating stars={4} profileName="Nikita Milner" profilePost="Marketing Manager" profilePic="/img/avatars/female/1.jpg" classes="card text-center py-5 px-4 py-lg-6 hover-lift shadow-lg border-0 rounded-4" comment="“ We were looking for an innovation partner that could be provide all the elements that we needed. Domaindumper, with its abilities was a good match.”" />
            </div>
            <div className="col-lg-4">
              <TestimonialRating stars={5} profileName="Mark Otto" profilePost="Full Stack Developer" profilePic="/img/avatars/male/2.jpg" classes="card text-center py-5 px-4 py-lg-6 hover-lift shadow-lg border-0 rounded-4" comment="“ We were looking for an innovation partner that could be provide all the elements that we needed. Domaindumper, with its abilities was a good match.”" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-body-tertiary">
        <div className="container py-9 py-lg-11">
          <CtaVertical link="Get started today" heading="Kickstart your landing project with ready-made components" subheading="Join over 25000+ customers worldwide" text="Domaindumper is a modern website template perfect for marketing your SaaS products. It helps to launch your products fast and grow exponentially." />
        </div>
      </section>
    </>
  );
}
IndexDecorative.getLayout = function getLayout(page) {
  return (
    <LayoutCombine>
      {page}
    </LayoutCombine>
  )
}