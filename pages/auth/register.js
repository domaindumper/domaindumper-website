import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import FormSignUp from "components/forms/SignUp";
import Layout from "layouts/LayoutDefault";
import Head from "next/head";
import Link from "next/link";
import { useSite } from "context/SiteContext";

export default function AuthSignUp() {
    const { t } = useTranslation('auth');
    const { siteInfo } = useSite();

    const pageTitle = t('register.meta.title', { siteName: siteInfo?.title || 'DomainDumper' });

    return (
      <>
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={t('register.meta.description')} />
        </Head>
        <div className="container pt-12 pt-lg-15 pb-9 pb-lg-11">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5 col-xl-4">
                    <h2 className="display-6">{t('register.title')}</h2>
                    <p className="text-muted mb-4">{t('register.subtitle')}</p>
                    <FormSignUp />
                    <p className="text-muted small mb-0">
                        <small>{t('register.haveAccount')}</small>
                        <span className="vr mx-2 align-middle"></span>
                        <Link 
                          className="text-decoration-underline d-inline-block" 
                          href="/auth/login"
                        >
                          {t('register.signInLink')}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
      </>
    );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['auth', 'common'])),
    },
  };
}

AuthSignUp.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
}