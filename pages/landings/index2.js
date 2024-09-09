import Head from 'next/head'
import 'material-symbols'
import Link from 'next/link'
import Layout from '@layouts/LayoutDefault'
import Image from 'next/legacy/image'
import FeatureIconTiny from '@components/features/feature-icons/FeatureIconTiny'
export const Demo1 = '/img/shots/demo1.png'
export const Demo2 = '/img/shots/demo2.png'
export const Demo3 = '/img/shots/demo3.png'
export default function Home() {
  return (
    <>
      <Head>
        <title>DomainDumper | Welcome</title>
      </Head>
      <section className='position-relative'>
        <div className='container pt-12 pt-lg-15 pb-9 text-center'>
          <div className='row mb-7 mb-lg-9'>
            <div className='col-md-10 col-lg-9 mx-auto text-center'>
              <h5 className='mb-4'>Light & Dark Modes</h5>
              <h2 className='text-center text-capitalize display-4 mb-0'>
                Landing page template based on NextJs and Bootstrap5
              </h2>
            </div>
          </div>
          <h5 className='text-center mb-4 text-muted'>Choose a demo</h5>
          <div className='row mb-4 align-items-center justify-content-center'>
            <div className='col-md-4 mb-6'>
              <Link href="/landings" className='d-block shadow hover-lift overflow-hidden rounded-2 mb-4'>
                <Image priority layout='responsive' src={Demo1} width="768" height="600" alt="" />
               
              </Link>
              <h5 className='mb-0'>Default</h5>
            </div>
            <div className='col-md-4 mb-6'>
              <Link className='d-block shadow hover-lift overflow-hidden rounded-2 mb-4' href="/landings/index-signup">
                 <Image priority layout='responsive' src={Demo2} width="768" height="600" alt="" />
                
              </Link>
              <h5 className='mb-0'>SignUp</h5>
            </div>
            <div className='col-md-4 mb-6'>
              <Link href="/landings/index-decorative" className='d-block shadow hover-lift overflow-hidden rounded-2 mb-4'>
               <Image priority layout='responsive' src={Demo3} width="768" height="600" alt="" />

              </Link>
              <h5 className='mb-0'>Decorative</h5>
            </div>
          </div>
          <div className='alert bg-body shadow-lg text-reset d-flex flex-column justify-content-center align-items-center w-lg-85 mx-auto alert-info text-start p-4 border-0'>
            <div className='flex-grow-1 text-center'>
            <h4 className='mb-3'>Looking for HTML version?</h4>
            <p className='mb-4'>We got you! Both React NextJs and HTML versions are included with single price.</p>
            </div>
            <div className='flex-shrink-0'>
            <a href="https://uigator.com/themeforest/Domaindumper_2.0/index.html" target="_blank" className="btn btn-outline-primary d-inline-flex justify-content-center align-items-center" rel="noreferrer">
                                <svg className="me-2" width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.46733 25.6355L0.233704 0.581055H24.7663L22.5299 25.6375L12.494 28.4196L2.46733 25.6355Z" fill="#E34E26"></path>
                                    <path d="M12.5 2.62891V26.2913L20.6153 24.0418L22.5272 2.62891H12.5Z" fill="#EF662A"></path>
                                    <path d="M4.80371 5.70215L5.632 14.9947H16.2827L15.9253 18.9804L12.496 19.9076L9.0732 18.9818L8.84436 16.4226H5.75986L6.20093 21.356L12.4953 23.1041L18.7975 21.356L19.6425 11.9222H8.44251L8.16129 8.77533H19.9116H19.9209L20.1962 5.70215H4.80371Z" fill="white"></path>
                                    <path d="M12.5 5.70215H4.80371L5.632 14.9947H12.5V11.9222H8.44251L8.16129 8.77533H12.5V5.70215Z" fill="#EBEBEB"></path>
                                    <path d="M12.5 19.9065L12.496 19.9079L9.07323 18.9821L8.84439 16.4229H5.75989L6.20096 21.3563L12.4953 23.1044L12.5 23.1031V19.9065Z" fill="#EBEBEB"></path>
                                    </svg>
                                    
                                HTML Demo <span className="material-symbols-rounded align-middle ms-2">open_in_new</span></a>
            </div>
          </div>
          <div className="d-flex pt-7 pt-lg-9 flex-wrap align-items-center justify-content-center">
            <div className="ps-3 pe-4 me-2 mb-2 py-2 bg-body-tertiary rounded-pill">
              <FeatureIconTiny icon={
                <span className="material-symbols-rounded align-middle fs-3">
                  check
                </span>
              } color="primary" text="35+ Flexible Components" />
            </div>
            <div className="ps-3 pe-4 me-2 mb-2 py-2 bg-body-tertiary rounded-pill">
              <FeatureIconTiny icon={
                <span className="material-symbols-rounded align-middle fs-3">
                  check
                </span>
              } color="primary" text="Modern & Trendy Designs" />
            </div>
            <div className="ps-3 pe-4 me-2 mb-2 py-2 bg-body-tertiary rounded-pill">
              <FeatureIconTiny icon={
                <span className="material-symbols-rounded align-middle fs-3">
                  check
                </span>
              } color="primary" text="Bootstrap 5.2 and Next" />
            </div>
            <div className="ps-3 pe-4 me-2 mb-2 py-2 bg-body-tertiary rounded-pill">
              <FeatureIconTiny icon={
                <span className="material-symbols-rounded align-middle fs-3">
                  check
                </span>
              } color="primary" text="Clean & Well Coded" />
            </div>
            <div className="ps-3 pe-4 me-2 mb-2 py-2 bg-body-tertiary rounded-pill">
              <FeatureIconTiny icon={
                <span className="material-symbols-rounded align-middle fs-3">
                  check
                </span>
              } color="primary" text="Free Regular Updates" />
            </div>
            <div className="ps-3 pe-4 me-2 mb-2 py-2 bg-body-tertiary rounded-pill">
              <FeatureIconTiny icon={
                <span className="material-symbols-rounded align-middle fs-3">
                  check
                </span>
              } color="primary" text="Free and Instant Support" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
