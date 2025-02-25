import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from "layouts/LayoutDefault";
import Head from "next/head";
import PageHeaderDefault from "components/page-headers/PageHeaderDefault";
import FeatureIconWithTitle from "components/features/feature-icons/FeatureIconWithTitle";
import CtaDefault from "components/call-to-actions/CtaDefault";

export default function About() {
  const { t } = useTranslation('about');
  
  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Head>

      <PageHeaderDefault 
        pageTitle={t('title')} 
        pageSubtitle={t('subtitle')}
      />

      {/* Mission Section */}
      <section className="position-relative">
        <div className="container py-9 py-lg-11">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 className="display-5 mb-4">{t('mission.title')}</h2>
              <p className="lead mb-5">{t('mission.description')}</p>
              <div className="row g-4">
                <div className="col-sm-6">
                  <FeatureIconWithTitle
                    icon={<span className="material-symbols-rounded align-middle fs-3">domain</span>}
                    color="primary"
                    title={t('features.domains.title')}
                    description={t('features.domains.description')}
                  />
                </div>
                <div className="col-sm-6">
                  <FeatureIconWithTitle
                    icon={<span className="material-symbols-rounded align-middle fs-3">dns</span>}
                    color="success"
                    title={t('features.tld.title')}
                    description={t('features.tld.description')}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                {/* Mission SVG */}
                <svg className="w-100" viewBox="0 0 500 400">
                  <circle cx="250" cy="200" r="150" fill="#4F46E5" opacity="0.1"/>
                  <rect x="150" y="100" width="200" height="200" rx="10" fill="#4F46E5" opacity="0.2"/>
                  <path d="M200 150 L300 250" stroke="#4F46E5" strokeWidth="4"/>
                  <path d="M300 150 L200 250" stroke="#4F46E5" strokeWidth="4"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="position-relative bg-body-tertiary">
        <div className="container py-9 py-lg-11">
          <div className="row g-4 text-center">
            <div className="col-md-3">
              <h2 className="display-3 fw-bold mb-0">100K+</h2>
              <p className="mb-0">{t('stats.domains')}</p>
            </div>
            <div className="col-md-3">
              <h2 className="display-3 fw-bold mb-0">50+</h2>
              <p className="mb-0">{t('stats.tlds')}</p>
            </div>
            <div className="col-md-3">
              <h2 className="display-3 fw-bold mb-0">25K+</h2>
              <p className="mb-0">{t('stats.customers')}</p>
            </div>
            <div className="col-md-3">
              <h2 className="display-3 fw-bold mb-0">99.9%</h2>
              <p className="mb-0">{t('stats.uptime')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="position-relative">
        <div className="container py-9 py-lg-11">
          <div className="row mb-7">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 mb-4">{t('team.title')}</h2>
              <p className="lead mb-0">{t('team.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="position-relative bg-primary">
        <div className="container py-9 py-lg-11">
          <CtaDefault
            link="get-started"
            heading={t('cta.title')}
            subheading={t('cta.description')}
          />
        </div>
      </section>
    </>
  );
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['about', 'common'])),
    },
  };
}