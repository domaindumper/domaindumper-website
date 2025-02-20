import Head from 'next/head';
import { useSite } from 'context/SiteContext';
import { getCommonPageProps } from 'lib/getCommonPageProps';
import Layout from "layouts/LayoutDefault";
import PageHeaderDefault from "components/page-headers/PageHeaderDefault";
import CtaDefault from "components/call-to-actions/CtaDefault";
import FeatureIconWithTitle from "components/features/feature-icons/FeatureIconWithTitle";

export const getStaticProps = getCommonPageProps;

export default function TLDsPage() {
  const { siteInfo } = useSite();

  return (
    <>
      <Head>
        <title>{`Domain TLDs | ${siteInfo.title}`}</title>
        <meta name="description" content="Explore our comprehensive list of domain TLDs (Top Level Domains) and find the perfect extension for your website." />
      </Head>
      <PageHeaderDefault
        pageTitle="Domain TLDs"
        pageSubtitle="Explore available Top Level Domains for your next project"
      />
      <section className="position-relative">
        <div className="container py-9 py-lg-11 position-relative">
          <div className="row justify-content-around">
            <div className="col-sm-6 col-md-4 col-xl-3 mb-6" data-aos="fade-up">
              <FeatureIconWithTitle
                icon={
                  <span className="material-symbols-rounded align-middle fs-3">
                    public
                  </span>
                }
                color="primary"
                title=".com Domains"
                description="The most popular and widely recognized domain extension for commercial websites worldwide."
              />
            </div>
            <div className="col-sm-6 col-md-4 col-xl-3 mb-6" data-aos="fade-up">
              <FeatureIconWithTitle
                icon={
                  <span className="material-symbols-rounded align-middle fs-3">
                    business
                  </span>
                }
                color="success"
                title=".org Domains"
                description="Perfect for organizations, non-profits, and community projects seeking global recognition."
              />
            </div>
            <div className="col-sm-6 col-md-4 col-xl-3 mb-6" data-aos="fade-up">
              <FeatureIconWithTitle
                icon={
                  <span className="material-symbols-rounded align-middle fs-3">
                    network_node
                  </span>
                }
                color="warning"
                title=".net Domains"
                description="Ideal for network, technology, and infrastructure-related websites and services."
              />
            </div>
            <div className="col-12 d-none d-md-block"></div>
            <div className="col-sm-6 col-md-4 col-xl-3 mb-6 mb-md-0" data-aos="fade-up">
              <FeatureIconWithTitle
                icon={
                  <span className="material-symbols-rounded align-middle fs-3">
                    domain
                  </span>
                }
                color="danger"
                title="Country TLDs"
                description="Establish local presence with country-specific domain extensions like .uk, .de, .fr"
              />
            </div>
            <div className="col-sm-6 col-md-4 col-xl-3 mb-6 mb-sm-0" data-aos="fade-up">
              <FeatureIconWithTitle
                icon={
                  <span className="material-symbols-rounded align-middle fs-3">
                    new_releases
                  </span>
                }
                color="secondary"
                title="New TLDs"
                description="Explore innovative domain extensions like .app, .io, .dev for modern web presence."
              />
            </div>
            <div className="col-sm-6 col-md-4 col-xl-3" data-aos="fade-up">
              <FeatureIconWithTitle
                icon={
                  <span className="material-symbols-rounded align-middle fs-3">
                    shield
                  </span>
                }
                color="info"
                title="Premium TLDs"
                description="Stand out with premium domain extensions perfect for your brand identity."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="position-relative bg-body-tertiary">
        <div className="container py-9 py-lg-11">
          <CtaDefault
            link="Search Domains"
            action="/domains/search"
            heading="Find Your Perfect Domain"
            subheading="Start with the right domain extension for your website"
          />
        </div>
      </section>
    </>
  );
}

TLDsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
