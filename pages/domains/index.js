import Head from "next/head";
import { useSite } from '@/context/SiteContext';
import { getCommonPageProps } from '@/lib/getCommonPageProps';
import Layout from "@layouts/LayoutDefault";
import PageHeaderDefault from "@components/page-headers/PageHeaderDefault";
import FeatureIconWithTitle from "@components/features/feature-icons/FeatureIconWithTitle";
import FeatureImageLeft1 from "@components/features/feature-image/FeatureImageLeft1";
import FeatureImageRight1 from "@components/features/feature-image/FeatureImageRight1";
import CtaDefault from "@components/call-to-actions/CtaDefault";

export const getStaticProps = getCommonPageProps;

export default function DomainsPage({ pageProps }) {
  const { siteInfo } = useSite();

  return (
    <>
      <Head>
        <title>{`Domain Management | ${siteInfo.title}`}</title>
        <meta 
          name="description" 
          content={`Manage your domains efficiently with ${siteInfo.title}. Track, renew, and optimize your domain portfolio.`}
        />
      </Head>
      <PageHeaderDefault
        pageTitle="Domain Management"
        pageSubtitle="Simplify your domain portfolio management"
      />
      <section className="position-relative">
        <div className="container pb-9 pb-lg-11 position-relative">
          <FeatureImageLeft1 />
        </div>
      </section>
      <section className="position-relative">
        <div className="container py-9 py-lg-11 position-relative">
          <h2 className="display-6 text-center mb-6 mb-lg-9">Domain Features</h2>
          <div className="row justify-content-around">
            <div className="col-sm-6 col-md-4 col-xl-3 mb-6" data-aos="fade-up">
              <FeatureIconWithTitle
                icon={
                  <span className="material-symbols-rounded align-middle fs-3">
                    domain_verification
                  </span>
                }
                color="primary"
                title="Domain Monitoring"
                description="Track domain expiration dates, DNS changes, and domain health status in real-time."
              />
            </div>
            <div className="col-sm-6 col-md-4 col-xl-3 mb-6" data-aos="fade-up">
              <FeatureIconWithTitle
                icon={
                  <span className="material-symbols-rounded align-middle fs-3">
                    dns
                  </span>
                }
                color="success"
                title="DNS Management"
                description="Easy DNS management with templates and bulk update capabilities."
              />
            </div>
            <div className="col-sm-6 col-md-4 col-xl-3 mb-6" data-aos="fade-up">
              <FeatureIconWithTitle
                icon={
                  <span className="material-symbols-rounded align-middle fs-3">
                    autorenew
                  </span>
                }
                color="warning"
                title="Auto Renewal"
                description="Never miss a domain renewal with automated renewal management."
              />
            </div>
            <div className="col-12 d-none d-md-block"></div>
            <div className="col-sm-6 col-md-4 col-xl-3 mb-6 mb-md-0" data-aos="fade-up">
              <FeatureIconWithTitle
                icon={
                  <span className="material-symbols-rounded align-middle fs-3">
                    security
                  </span>
                }
                color="danger"
                title="Domain Security"
                description="Advanced security features including DNSSEC and registry locks."
              />
            </div>
            <div className="col-sm-6 col-md-4 col-xl-3 mb-6 mb-sm-0" data-aos="fade-up">
              <FeatureIconWithTitle
                icon={
                  <span className="material-symbols-rounded align-middle fs-3">
                    analytics
                  </span>
                }
                color="secondary"
                title="Portfolio Analytics"
                description="Get insights into your domain portfolio performance and value."
              />
            </div>
            <div className="col-sm-6 col-md-4 col-xl-3" data-aos="fade-up">
              <FeatureIconWithTitle
                icon={
                  <span className="material-symbols-rounded align-middle fs-3">
                    support_agent
                  </span>
                }
                color="info"
                title="24/7 Support"
                description="Expert domain support available around the clock."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="position-relative bg-body-tertiary">
        <div className="container py-9 py-lg-11">
          <CtaDefault
            link="Start Managing"
            action="/domains/search"
            heading="Take Control of Your Domains"
            subheading="Join thousands of domain professionals using DomainDumper"
          />
        </div>
      </section>
    </>
  );
}

DomainsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
