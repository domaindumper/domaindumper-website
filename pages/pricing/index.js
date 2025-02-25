import CtaDefault from "components/call-to-actions/CtaDefault";
import FaqsDefault from "components/faqs/FaqsDefault";
import PageHeaderDefault from "components/page-headers/PageHeaderDefault";
import PricingDefault from "components/pricing-tables/PricingDefault";
import Layout from "layouts/LayoutDefault";
import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";
import { useState, useEffect } from "react";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function PagePricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [mounted, setMounted] = useState(false);
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR('/api/faqs', fetcher);
  const { t } = useTranslation('pricing');

  // Add debug logging for mount
  useEffect(() => {
    console.log('Component mounted');
    setMounted(true);
  }, []);

  const handlePricingToggle = (e) => {
    const newValue = e.target.checked;
    console.log('Toggle clicked, new value:', newValue);
    setIsYearly(newValue);
  };

  // Add debug logging for isYearly changes
  useEffect(() => {
    console.log('isYearly changed to:', isYearly);
  }, [isYearly]);

  if (!mounted || !data) return <div className="vh-50 d-flex align-items-center justify-content-center">{t('loading')}</div>;
  if (error) return <div>{t('error')}</div>;

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Head>
      <PageHeaderDefault 
        pageTitle={t('header.title')} 
        breadcrumbActive={t('header.breadcrumb')} 
      />
      <section className="position-relative border-bottom">
        <div className="container pb-9 pb-lg-11 position-relative mt-n12">
          <div className="text-center mb-5">
            <div className="d-inline-block pricing-toggle">
              <div className="form-check form-switch d-flex align-items-center gap-2">
                <label className="form-check-label text-body-secondary">{t('pricing.toggle.monthly')}</label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="pricingToggle"
                  checked={isYearly}
                  onChange={handlePricingToggle}
                />
                <label className="form-check-label text-body-secondary" htmlFor="pricingToggle">
                  {t('pricing.toggle.yearly')}
                  <span className="badge bg-success ms-2">{t('pricing.toggle.saveText')}</span>
                </label>
              </div>
            </div>
          </div>
          {mounted && <PricingDefault isYearly={isYearly} />}
        </div>
      </section>
      <section className="position-relative">
        <div className="container py-9 py-lg-11 position-relative">
          <div className="row mb-6 mb-lg-9">
            <div className="col-lg-8 mx-auto text-center col-md-10">
              <h2 className="display-5 fw-bolder" data-aos="fade-up">{t('faqs.title')}</h2>
            </div>
          </div>
          <div className="row">
            {data.map((faq) => (
              <FaqsDefault faq={faq} key={faq.id} />
            ))}
          </div>
          <div className="text-center pt-5" data-aos="fade-up" data-aos-delay="100">
            <p className="mb-0">{t('faqs.support.text')}{' '}
              <Link href="#" className="fw-semibold ms-1">
                {t('faqs.support.link')}
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="position-relative bg-body-tertiary">
        <div className="container py-9 py-lg-11">
          <CtaDefault 
            link={t('cta.link')} 
            action="#" 
            heading={t('cta.heading')} 
            subheading={t('cta.subheading')}
          />
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['pricing', 'common'])),
    },
  };
}

PagePricing.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}